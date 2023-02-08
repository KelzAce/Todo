const notFound = (err, req, res, next) => {
  res.status(404).send("Route does Not Found");
};

module.exports = notFound;
