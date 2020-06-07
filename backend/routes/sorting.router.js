const express = require("express");
const router = express.Router();

const sortingController = require("../controllers/sorting.controller");

router.get("/", (req, res) => {
  res.send("Hallo from AlgoVisual");
});

router.post("/bubble-sort", sortingController.prosesBubbleSort);
router.post("/merge-sort", sortingController.prosesMergeSort);

module.exports = router;
