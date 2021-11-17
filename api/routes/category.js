const router = require("express").Router();
const Category = require("../models/Category");

<<<<<<< HEAD
router.post("/", async (req, res) => {
  const newCat = new Category(req.body);
  try {
    const savedCat = await newCat.save();
    res.status(200).json(savedCat);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
    try {
      const cats = await Category.find();
      res.status(200).json(cats);
    } catch (err) {
      res.status(500).json(err);
    }
  });
=======
router.post("/create", async (req, res) => {
  const newCat = new Category(req.body);
  try {
    const savedCat = await newCat.save();
    return res.status(200).json({ message: "success category created", data: savedCat });
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get("/all", async (req, res) => {
  try {
    const cats = await Category.find();
    return res.status(200).json({ message: "success retreived all categories", data: cats });
  } catch (err) {
    return res.status(500).json(err);
  }
});
>>>>>>> 9344f642762c9903386ceef2cc2a2f2abbbd046a

module.exports = router;