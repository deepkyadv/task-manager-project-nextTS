import mongoose from "mongoose";

const config = {
  isConnected : 0
}

export const connectDb = async () => {
  if(config.isConnected){
    return
  }
  try {
    const { connection } = await mongoose.connect(
      process.env.MONGO_DB_URL as string,
      {
        dbName: "work_manager",
      }
    );
    console.log("DB connected...", connection.host);
    console.log("DB connected...", connection);
    console.log(connection.readyState)
    config.isConnected = connection.readyState
    // const Uuser = new User({
    //   name: "testing name",
    //   email: "testing@gmail.com",
    //   password: "testpassword",
    //   about: "abouttesting",
    //   profileUrl: "profieUrl",
    // });
    // await Uuser.save();
    // console.log("data saved successfully", Uuser);
  } catch (error) {
    console.log("Connection failed...");
    console.error(error);
  }
};
