const express = require("express");
const answer = require("./answer");
const {checkQuestionExist} = require("../middleware/database/databaseErrorHelpers")
const {askNewQuestion,getAllQuestions,getSingleQuestion,editQuestion,deleteQuestion,likeQuestion} = require("../controllers/questions")
const {getAccessToRoute,getQuestionOwnerAccess} = require("../middleware/authorization/auth")
const router = express.Router();

router.get("/",getAllQuestions);
router.get("/:id",checkQuestionExist,getSingleQuestion);
router.get("/:id/like",[getAccessToRoute,checkQuestionExist,],likeQuestion)
router.post("/ask",getAccessToRoute,askNewQuestion);
router.put("/:id/edit",[getAccessToRoute,checkQuestionExist,getQuestionOwnerAccess],editQuestion);
router.delete("/:id/delete",[getAccessToRoute,checkQuestionExist,getQuestionOwnerAccess],deleteQuestion);

router.use("/:question_id/answers",checkQuestionExist,answer);
module.exports = router;