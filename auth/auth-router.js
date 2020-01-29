Users = require("../users/users-model");
const router = require("express").Router();

router.post("/register", (req, res) => {
  Users.add(req.body)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        errorMessage: "problem with registering to the database"
      });
    });
});

router.post("/login", (req, res) => {
  let { username, password } = req.body;
  Users.findBy({ username })
    .first()
    .then(user => {
      if (!user) {
        return res.status(401).json({
          errorMessage: "username does not exist"
        });
      } else {
        return res.status(200).json(user);
      }
    })
    .catch(error => {
      console.log(error);
      return res.status(500).json({ errorMessage: "error logging in" });
    });
});

module.exports = router;
