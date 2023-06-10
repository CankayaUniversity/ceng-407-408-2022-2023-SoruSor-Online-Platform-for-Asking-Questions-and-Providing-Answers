import fetch from "node-fetch"; // This code imports the 'node-fetch' library, which enables fetching resources over the network using Node.js' native http module

const PERSPECTIVE_API_KEY = "AIzaSyDdgeDXOTNZs3Bsn8_Tp-TXiSswscCz1js"; // This code sets the Google Perspective API key as a constant, which will be used to analyze the toxicity of user-generated content
// This function analyzes the toxicity of a given text using the Google Perspective API
async function analyzeText(text) {
  const apiUrl = `https://commentanalyzer.googleapis.com/v1alpha1/comments:analyze?key=${PERSPECTIVE_API_KEY}`;
  const requestBody = {
    comment: {
      text: text,
    },
    languages: ["en"],
    requestedAttributes: {
      TOXICITY: {},
    },
  };

  try {
    // Start by sending a POST request to the API at the specified URL
    const response = await fetch(apiUrl, {
      method: "POST", // Specify that this is a POST request
      headers: {
        "Content-Type": "application/json", // Set the content type to JSON
      },
      body: JSON.stringify(requestBody), // Convert the request body to a JSON string and include it in the request
    });

    const data = await response.json();

    // Checking if the response data has the expected format
    // We expect the data to have an "attributeScores" object, which contains a "TOXICITY" object,
    // which has a "summaryScore" property
    if (
      data &&
      data.attributeScores &&
      data.attributeScores.TOXICITY &&
      data.attributeScores.TOXICITY.summaryScore
    ) {
      // If the response data matches the expected format,
      // return the value of the "summaryScore" property
      return data.attributeScores.TOXICITY.summaryScore.value;
    } else {
      // If the response data doesn't match the expected format,
      // log an error message with the unexpected data and return null
      console.error(
        "Error fetching Perspective API: Unexpected response format:",
        data
      );
      return null;
    }
  } catch (error) {
    // If an error occurs during the fetch or the processing of the response
    // (such as a network error or a JSON parsing error),
    // log an error message and return null
    console.error("Error fetching Perspective API:", error);
    return null;
  }
}

export default analyzeText;
