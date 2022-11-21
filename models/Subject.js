const { DataTypes } = require("sequelize");
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Subject extends Model {
        static associate(models) {
          Subject.belongsToMany(models.Student, { through: 'models.KRS', onDelete:"cascade" });
        }
    };
    Subject.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER 
        },
        name: {
            type: DataTypes.STRING
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
        modelName: 'Subject',
        tableName: 'subjects'
    })

    Subject.findSubjectbyId = async function (id, res) { 
        const find = await Subject.findOne({ where: { id } });
        if (!find) {
            return res.status(404).json({
                error : "Subject not found!"
            });
        }

        return find
    };

    return Subject
}