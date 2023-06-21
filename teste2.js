let data = require("./fakeData");

const createUser = (req, res, next) => {
  const { name, job } = req.body;

  if (!name || !job)
    return res.status(400).json({ message: "Incomplete fields" });

  const existUser = data.find((user) => user.name == name);

  if (!!existUser)
    return res.status(422).json({ message: "User already exists" });

  data.push({ id: data.length + 1, name, job });

  return (
    res.status(200).json(data.find((user) => user.name == name)) ??
    res.status(500).json({ error: "We had a problem creating the user" })
  );
};

module.exports = { createUser };
