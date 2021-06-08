const mongoose = require("mongoose");
const settings = require("../ayarlar.json");

mongoose.connect(settings.mongoUrl, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to DB");
});
mongoose.connection.on("error", () => {
  console.error("Connection Error!");
});