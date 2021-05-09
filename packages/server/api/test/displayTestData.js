module.exports = (req, res) => {
  try {
    res.json("test data")
  } catch (error) {
    console.log(error.message)
    res.status(500).send(error.message)
  }
}