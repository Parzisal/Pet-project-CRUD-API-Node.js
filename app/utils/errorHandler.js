module.exports = (res, error, code) => {
  res.status(code).json({
    message: error.message ? error.message : error
  })
}
