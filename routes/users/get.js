import UserModel from "../../models/user/index.js";

const getUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).send({ status: 200, users });
  } catch (error) {
    res.status(500).send({ status: 500, error });
  }
};

export default getUsers;
