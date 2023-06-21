let data = require("./fakeData");

const getUser = (req, res, next) => {
  const { name } = req.query;

  const user = data.find((dado) => dado.name == name);

  if (!user) return res.status(404).json({ message: "User not found" });

  return res.status(200).json(user);
};

const getUsers = (req, res, next) => {
  return data.length > 0
    ? res.status(200).json(data)
    : res.status(404).json({ message: "User not found" });
};

module.exports = {
  getUser,
  getUsers,
};
