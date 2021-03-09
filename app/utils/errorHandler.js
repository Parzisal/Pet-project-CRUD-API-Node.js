module.exports = (res, error, code) => {
  res.status(code).json({
    message: error ? error.message : error
  })
}
