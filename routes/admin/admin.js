var express = require("express");
var router = express.Router();
var passport = require("passport");

var { signUp, login, updateProfile, getAllUsersProfile, updateUserProfile, deleteUserProfile, createUserProfile } = require("./controller/adminController");

router.post("/sign-up", signUp);
router.post("/login", login);

router.put(
  "/update-profile",
  passport.authenticate("admin-auth", { session: false }),
  updateProfile
);

router.get("/get-all-users-profile", 
passport.authenticate("admin-auth", { session: false }),
getAllUsersProfile)

router.put("/update-user-profile", 
passport.authenticate("admin-auth", { session: false }),
updateUserProfile);

router.delete("/delete-user-profile", 
passport.authenticate("admin-auth", { session: false }),
deleteUserProfile);

router.post("/create-user-profile", 
passport.authenticate("admin-auth", { session: false }),
createUserProfile);

module.exports = router;
