const { DataTypes } = require("sequelize");
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Student extends Model {
        static associate(models) {
          Student.belongsToMany(models.Subject, { through: 'models.KRS' });
        }
    };
    Student.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER 
        },
        name: {
            type: DataTypes.STRING
        }, 
        NIM: {
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
        modelName: 'Student',
        tableName: 'students'

    });

    Student.findStudentbyId = async function (id, res) { 
        const find = await Student.findOne({ where: { id } });
        if (!find) {
            return res.status(404).json({
                error : "Student not found!"
            });
        }

        return find
    };

    return Student
}
