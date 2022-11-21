const { KRS, Student, Subject } = require('../models')

class KRSController {
    static async addKRS(req,res,next){
        const {StudentId, SubjectId} = req.body
        try {
            const find = await KRS.findOne({ where: { StudentId, SubjectId } });
            if (find) {
                return res.status(409).json({
                    error : "This user is registered to the subject!"
                });
            }

            const krs = await KRS.create({ StudentId, SubjectId });
            res.status(200).json({
                msg: "Successfully add krs",
                data: krs
            })
        } catch (err) {
            next(err);
        }
    }

    static async getKRS(req,res,next){
        try {
            const krs = await KRS.findAll({
                include : [
                    Student,Subject
                ]
            });
            res.status(200).json({
                msg: "Successfully get all krs",
                data: krs
            })
        } catch (err) {
            next(err);
        }
    }

    static async findById(req,res,next){
        const id = req.params.id;

        try {
            const krs = await KRS.findOne({ 
                where: { id }, 
                include : [
                    Student,Subject
                ]
            });
            if (!krs) {
                return res.status(404).json({
                    error : "KRS not found!"
                });
            }
            res.status(200).json({
                msg: "Successfully find krs",
                data: krs
            })
        } catch (err) {
            next(err);
        }
    }

    static async editKRS(req,res,next){
        const id = req.params.id;
        const { StudentId, SubjectId } = req.body

        try {
            await KRS.findKRSbyId(id, res);
            await KRS.update({ StudentId, SubjectId },
                { where : { id }
            })
            res.status(200).json({
                msg: "Successfully update the krs"
            })
        } catch (err) {
            next(err);
        }
    }

    static async deleteKRS(req,res,next){
        const id = req.params.id;
        try {
            await KRS.findKRSbyId(id, res);
            await KRS.destroy({ where: { id } })
            res.status(200).json({
                msg: "Successfully delete the krs"
            })
        } catch (err) {
            next(err);
        }
    }
    
    
}

module.exports = KRSController;
