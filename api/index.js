module.exports = (req, res) => {
  const { id } = req.query;
  res.send('Removing ID ' + id);
})
