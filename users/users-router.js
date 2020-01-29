const router = require("express").Router();

const Users = require("../users/users-model");

router.get("/", (req, res) => {
  Users.find()
    .then(users => {
      return res.status(200).json(users);
    })
    .catch(error => {
      console.log(error);
      return res.status(500).json({
        errorMessage: "problem retreivin users"
      });
    });
});
module.exports = router;
