module.exports.question = (req,res)=>{
    const questionId = req.params.id;
    message = questionId;
    res.status(200).json({ message: message });
}