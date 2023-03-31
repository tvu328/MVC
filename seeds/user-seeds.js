const { User } = require("../models");

const userData = [
  {
    username: "tvu328",
    password: "067476543",
  },
  {
    username: "Larry June",
    password: "541289632",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;