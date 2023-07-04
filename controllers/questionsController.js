const Questions = require('../models/Questions');

module.exports.question = (req, res) => {

  console.log("View Question!");
  const questionId = req.params.questionId;
  console.log("Question ID =", questionId);
  Questions.findById(questionId)
    .then(question => {
      if (question) {
        console.log("Question Found!");
        res.status(200).json(question);
      } else {
        console.log("Question Not Found!");
        res.status(404).json({ message: "Question Not Found!" });
      }
    })
    .catch(err => {
      console.log("Error finding Question!", err);
      res.status(500).json({ message: "Internal Server Error" });
    });
};


// Creating Questions
module.exports.create = (req,res)=>{
    console.log("Create Question!");
    Questions.create({
        question: req.body.title
    })
    .then(question=>{
        if(question){
            console.log("Successfully created Question!!");
        res.status(200).json({message: "Successfully created Question!", question})
        }
        else{
            console.log("Error creating Question!!");
        res.status(404).json({message: "Couldn't Create Question!"})
        }
    })
    .catch(err=>{
        console.log("Internal Server Error!", err);
        res.status(500).json({message: "Internal Server Error!"})
    })
}

// Delete Question
module.exports.delete = (req, res) => {
    console.log("Delete Question!");
    const questionId = req.params.questionId;
    console.log("Question ID =", questionId);
  
    Questions.findByIdAndDelete(questionId)
      .then(question => {
        if (question) {
          console.log("Successfully Deleted Question!");
          res.status(200).json({ message: "Successfully Deleted Question!", questionId });
        } else {
          console.log("Error Deleting Question!");
          res.status(404).json({ message: "Error Deleting Question!", questionId });
        }
      })
      .catch(err => {
        console.log("Internal Server Error!", err);
        res.status(500).json({ message: "Internal Server Error" });
      });
  };
  

