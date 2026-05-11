// config/db.js
const dns = require("node:dns");

// Force Node.js to use Cloudflare DNS
dns.setServers(["1.1.1.1", "1.0.0.1"]);

const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

const connectDB = async () => {
  try {
    console.log("DNS servers used by Node:", dns.getServers());

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;