const { Router } = require("express");
const router = Router();
const { LINKAPI: linkapi } = process.env;

router.get("/", async (req, res) => {
  try {
    res.status(200).send({ linkapi });
  } catch ({ message }) {
    res.status(403).send(message);
  }
});

module.exports = { router };
