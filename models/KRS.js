const { DataTypes } = require("sequelize");
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class KRS extends Model {
        static associate(models) {
          KRS.belongsTo(models.Student)
          KRS.belongsTo(models.Subject)
        }
    };

    KRS.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER 
        },
        StudentId: {
            type: DataTypes.INTEGER 
        }, 
        SubjectId: {
            type: DataTypes.INTEGER 
        }, 
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE
        }
    },{    
        sequelize,
        modelName: 'KRS',
        tableName: 'krs'
    })

    KRS.findKRSbyId = async function (id, res) { 
        const find = await KRS.findOne({ where: { id } });
        if (!find) {
            return res.status(404).json({
                error : "KRS not found!"
            });
        }

        return find
    };

    return KRS;
}