const { Student, KRS } = require('../models')

class StudentController {
    static async addStudent(req,res,next){
        const {name, NIM} = req.body
        if(!name || !NIM) {
            return res.status(400).json({
                error : "Missing name or NIM parameters"
            });
        }
        try {
            const find = await Student.findOne({ where: { NIM } });
            if (find) {
                return res.status(409).json({
                    error : "Nomor Induk Mahasiswa(NIM) is used in the system!"
                });
            }

            const student = await Student.create({ name, NIM });
            res.status(200).json({
                msg: "Successfully add student",
                data: student
            })
        } catch (err) {
            next(err);
        }
    }

    static async getStudent(req,res,next){
        try {
            const students = await Student.findAll();
            res.status(200).json({
                msg: "Successfully get all student",
                data: students
            })
        } catch (err) {
            next(err);
        }
    }

    static async findById(req,res,next) {
        const id = req.params.id;

        try {
            const student = await Student.findStudentbyId(id, res);
            res.status(200).json({
                msg: "Successfully find student",
                data: student
            });
        } catch (err) {
            next(err);
        }
    }

    static async editStudent(req,res,next){
        const id = req.params.id;
        const {name, NIM} = req.body

        try {
            const find = await Student.findStudentbyId(id, res);
            const student = await Student.update({ name, NIM },
                { where : { id }
            })
            res.status(200).json({
                msg: "Successfully update the student"
            })
        } catch (err) {
            next(err);
        }
    }

    static async deleteStudent(req,res,next){
        const id = req.params.id;
        try {
            const find = await Student.findStudentbyId(id, res);
            const deleteStudent = await Student.destroy({ where: { id } })
            const deleteKRS = await KRS.destroy({ where: { StudentId : id } })
            res.status(200).json({
                msg: "Successfully delete the student"
            })
        } catch (err) {
            next(err);
        }
    }
    
    
}

module.exports = StudentController;
