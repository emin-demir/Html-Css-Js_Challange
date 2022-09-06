const express = require('express');
const { getAccessToRoute } = require("../middleware/authorization/auth")
const { addNewAnswerToQuestion,getAllAnswerByQuestion,getSingleAnswer,editAnswer } = require("../controllers/answer");
const {checkQuestionAndAnswerExist} = require("../middleware/database/databaseErrorHelpers")
const {getAnswerOwnerAccess} = require("../middleware/authorization//auth")
//Bir üst katman ile birleştir.
const router = express.Router({ mergeParams: true });


router.post("/", getAccessToRoute, addNewAnswerToQuestion);
router.get("/",getAllAnswerByQuestion, addNewAnswerToQuestion);
router.get("/:answer_id",checkQuestionAndAnswerExist,getSingleAnswer);
router.put("/:answer_id/edit",[checkQuestionAndAnswerExist,getAccessToRoute,getAnswerOwnerAccess],editAnswer);

module.exports = router;