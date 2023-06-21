var data = require("./fakeData");

const updateUser = (req, res, next) => {
  const { id } = req.params;
  const { job, name } = req.body;

  const index = data.findIndex((user) => user.id == id);

  if (index === -1) return res.status(404).json({ message: "User not found" });

  data[index].job = job ?? data[index].job;
  data[index].name = name ?? data[index].name;

  return res.status(200).json({ message: "Successfully changed" });
};

module.exports = { updateUser };
