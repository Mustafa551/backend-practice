import UserModel from "../../models/user/index.js";

export const postUser = async (req, res) => {
  try {
    const model = new UserModel(req.body);
    const user = await model.save();
    const data = user.toObject();
    delete data.password;
    res.status(201).send({ status: 200, user: data });
  } catch (error) {
    res.status(500).send({ status: 500, error });
  }
};
