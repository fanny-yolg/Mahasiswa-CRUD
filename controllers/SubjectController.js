const { Subject, KRS } = require('../models')

class SubjectController {
    static async addSubject(req,res,next){
        const {name} = req.body
        try {
            const find = await Subject.findOne({ where: { name } });
            if (find) {
                return res.status(409).json({
                    error : "Subject name is used in the system!"
                });
            }

            const subject = await Subject.create({ name });
            res.status(200).json({
                msg: "Successfully add subject",
                data: subject
            })
        } catch (err) {
            next(err);
        }
    }

    static async getSubject(req,res,next){
        try {
            const subjects = await Subject.findAll();
            res.status(200).json({
                msg: "Successfully get all subject",
                data: subjects
            })
        } catch (err) {
            next(err);
        }
    }

    static async findById(req,res,next){
        const id = req.params.id;
        try {
            const subject = await Subject.findSubjectbyId(id, res);
            res.status(200).json({
                msg: "Successfully find student",
                data: subject
            })
        } catch (err) {
            next(err);
        }
    }

    static async editSubject(req,res,next){
        const id = req.params.id;
        const {name} = req.body

        try {
            const find = await Subject.findSubjectbyId(id, res);
            const subject = await Subject.update({ name },
                { where : { id }
            })
            res.status(200).json({
                msg: "Successfully update the subject"
            })
        } catch (err) {
            next(err);
        }
    }

    static async deleteSubject(req,res,next){
        const id = req.params.id;
        try {
            const find = await Subject.findSubjectbyId(id, res);
            const deleteSubject = await Subject.destroy({ where: { id } })
            const deleteKRS = await KRS.destroy({ where: { SubjectId : id } })

            res.status(200).json({
                msg: "Successfully delete the subject"
            })
        } catch (err) {
            next(err);
        }
    }
}
module.exports = SubjectController;
