const mongoose = require("mongoose");
const validateMongoDbId = () => {
  const isValid = mongoose.Schema.Types.isValid(id);
  if (!isValid) throw new Error("This id is not Valid or not Found");
};

// module.exports =
