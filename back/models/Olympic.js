const mongoose = require("mongoose");

const OlympicSchema = new mongoose.Schema({
  discipline_title: {
    type: String,
  },
  slug_game: {
    type: String,
  },
  event_title: {
    type: String,
  },
  event_gender: {
    type: String,
  },
  medal_type: {
    type: String,
  },
  participant_type: {
    type: String,
  },
  participant_title: {
    type: String,
  },
  athlete_url: {
    type: String,
  },
  athlete_full_name: {
    type: String,
  },
  country_name: {
    type: String,
  },
  country_code: {
    type: String,
  },
  country_3_letter_code: {
    type: String,
  },
});

module.exports = mongoose.model("Olympic", OlympicSchema);
