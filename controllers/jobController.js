const { promisify } = require("util");
const jwt = require("jsonwebtoken");

const Job = require("../models/jobModel");
const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

const decode = async (token) => {
  return await promisify(jwt.verify)(token, process.env.JWT_SECRET);
};

exports.getAllJobs = catchAsync(async (req, res, next) => {
  const queryObj = { ...req.query };
  const queryStr = JSON.stringify(queryObj);

  const query = Job.find(JSON.parse(queryStr));

  const jobs = await query;

  res.status(200).json({
    status: "sucesso",
    results: jobs.length,
    data: {
      jobs,
    },
  });
});

exports.getJob = catchAsync(async (req, res, next) => {
  const job = await Job.findById(req.params.id);

  if (!job) {
    return next(new AppError("Essa vaga não existe!", 404));
  }

  res.status(200).json({
    status: "sucesso",
    data: {
      job,
    },
  });
});

exports.createJob = catchAsync(async (req, res, next) => {
  const tokenDecoded = await decode(req.headers.authorization.split(' ')[1]);
  const userCreator = await User.findById(tokenDecoded.id);
  const job = req.body;
  job.creator = userCreator.name;
  job.owner = tokenDecoded.id;
  const newJob = await Job.create(job);
  res.status(201).json({
    status: "sucesso",
    data: {
      job: newJob,
    },
  });
});

exports.updateJob = catchAsync(async (req, res, next) => {
  const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!job) {
    return next(new AppError("Não existe essa vaga."), 404);
  }

  res.status(200).json({
    status: "sucesso",
    data: {
      job,
    },
  });
});

exports.deleteJob = catchAsync(async (req, res, next) => {
  const job = await Job.findByIdAndDelete(req.params.id);

  if (!job) {
    return next(new AppError("Não existe essa vaga.", 404));
  }

  res.status(204).json({
    status: "sucesso",
    data: null,
  });
});

exports.getMyJobs = catchAsync(async (req, res, next) => {
  const tokenDecoded = await decode(req.headers.authorization.split(' ')[1]);
  const jobs = await Job.find({ owner: tokenDecoded.id });
  res.status(200).json({
    status: "sucesso",
    data: jobs,
  });
});

exports.getMyJob = catchAsync(async (req, res, next) => {
  const job = await Job.findById(req.params.id);

  if (!job) {
    return next(new AppError("Essa vaga não existe!", 404));
  }

  res.status(200).json({
    status: "sucesso",
    data: {
      candidates: job.candidates,
    },
  });
});

exports.interestJob = catchAsync(async (req, res, next) => {
  const tokenDecoded = await decode(req.headers.authorization.split(' ')[1]);
  
  const job = await Job.findById(req.params.id);
  const user = await User.findById(tokenDecoded.id);

  const userObj = {
    name: user.name,
    telephone: user.telephone,
  };

  job.candidates.push(userObj);
  console.log(job.candidates);
  await job.save();
  console.log('asadsadads');
  res.status(200).json({
    status: "sucesso",
    data: job,
  });
});
