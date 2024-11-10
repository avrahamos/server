import { LoginDto, RegisterDto } from "../types/DTO/usersDto";
import UserModel from "../models/userModel";
import { compare, hash } from "bcrypt";

export const userLogin = async (user: LoginDto) => {
  try {
    const userFromDatabase = await UserModel.findOne({
      userName: user.userName, 
    });
    if (!userFromDatabase) throw new Error("user not found");

    const match = await compare(user.password, userFromDatabase.password);
    if (!match) {
      console.log("is match", match);
      console.log("Input Password:", user.password);
      console.log("Stored Encrypted Password:", userFromDatabase.password);

      throw new Error("wrong password");
    }
    return userFromDatabase;
  } catch (err) {
    throw err;
  }
};

export const createNewUser = async (user: RegisterDto) => {
  try {
    console.log({ user });
    if (!user.password)
      throw new Error("Missing user data, [password] is required");

    const encPass = await hash(user.password, 10);
    user.password = encPass;
    const newUser = new UserModel(user);
    return await newUser.save();
  } catch (err) {
    console.log(err);
    throw new Error("Can't create new user");
  }
};