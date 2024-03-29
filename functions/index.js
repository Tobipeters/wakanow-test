/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.getAllUsers = functions.https.onRequest(async (request, response) => {
  try {
    const allUsers = await getAllUsers();
    response.json(allUsers);
  } catch (error) {
    console.error("Error fetching users:", error);
    response.status(500).send("Internal Server Error");
  }
});

/**
 * Fetches all users from Firebase Authentication.
 * @return {Promise<Array>} A promise that resolves to an array of user objects.
 */
async function getAllUsers() {
  return admin.auth().listUsers().then((userList) => userList.users);
}
