const express = require("express");
const router = express.Router();

const {
  getAllOlympic,
  getOlympic,
  addOlympic,
  updateOlympic,
  deleteOlympic,
} = require("../controllers/olympic");

router.get("/", getAllOlympic);
router.get("/:id", getOlympic);
router.post("/", addOlympic);
router.patch("/:id", updateOlympic);
router.delete("/:id", deleteOlympic);

module.exports = router;
