const { Router } = require("express");
const {
  question,
  answer,
  deleteQuestion,
  getAllQuestions,
  getPostQuestions,
} = require("../../controllers/questionLogic");
const router = Router();

router.post("/", question);
router.put("/:idQuestion", answer);
router.delete("/:idQuestion", deleteQuestion);
router.get("/", getAllQuestions);
router.get("/:idPost", getPostQuestions);

module.exports = router;