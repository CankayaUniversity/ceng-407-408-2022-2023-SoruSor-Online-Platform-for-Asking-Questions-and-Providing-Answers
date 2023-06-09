// // backend/routes/User.js

// import express from "express";
// import admin from "../firebaseBackend/firebaseAdmin.js"; // Import the firebase admin instance

// const router = express.Router();

// // Get a list of all users
// router.get("/", async (req, res) => {
//   try {
//     const listUsersResult = await admin.auth().listUsers();
//     res.status(200).send(listUsersResult.users);
//   } catch (error) {
//     res.status(500).send({ status: false, message: "Error listing users" });
//   }
// });

// export default router;
