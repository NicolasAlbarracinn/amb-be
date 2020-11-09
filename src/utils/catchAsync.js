//this forward any unhandled error to error handler middleware
module.exports = fn => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
