const express = require("express");
const {getSingleUser,getAllUsers} = require("../controllers/user.js")
const router = express.Router();
const {checkUserExist} = require("../middleware/database/databaseErrorHelpers")



router.get('/:id',checkUserExist,getSingleUser);
router.get("/",getAllUsers);

module.exports = router;