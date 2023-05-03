import mongoose from "mongoose";

const url =
  "mongodb://berkaycona:sorusorşiifremongodb12@ac-twh7uei-shard-00-00.srf77lq.mongodb.net:27017,ac-twh7uei-shard-00-01.srf77lq.mongodb.net:27017,ac-twh7uei-shard-00-02.srf77lq.mongodb.net:27017/sorusor-mem?ssl=true&replicaSet=atlas-u43u2z-shard-0&authSource=admin&retryWrites=true&w=majority";

const connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected succesfully!");
    })
    .catch((error) => console.log("Error: ", error));
};
export default { connect };
