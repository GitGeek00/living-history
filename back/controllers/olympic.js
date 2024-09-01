const Olympic = require("../models/Olympic");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");

const getAllOlympic = async (req, res, next) => {
  try {
    let result = Olympic.find({});

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    result = result.skip(skip).limit(limit);

    const data = await result;

    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return;
  }
};

const getOlympic = async (req, res, next) => {
  res.status(200).send("get Olympic record");
};

const addOlympic = async (req, res, next) => {
  res.status(200).send("Add Olympic record");
};

const updateOlympic = async (req, res, next) => {
  res.status(200).send("Update Olympic Record");
};

const deleteOlympic = async (req, res, next) => {
  res.status(200).send("delete Olympic record");
};

module.exports = {
  getAllOlympic,
  getOlympic,
  addOlympic,
  updateOlympic,
  deleteOlympic,
};
