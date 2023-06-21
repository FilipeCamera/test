let data = require("./fakeData");

const deleteUser = (req, res, next) => {
  const { id } = req.params;

  const index = data.findIndex((user) => user.id == id);

  if (index === -1) return res.status(404).json({ message: "User not found" });

  data.splice(index, 1);

  return res.status(200).json({ message: "User deleted successfully" });
};

module.exports = { deleteUser };
