import fetch from "node-fetch";

const PERSPECTIVE_API_KEY = "AIzaSyDdgeDXOTNZs3Bsn8_Tp-TXiSswscCz1js";

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
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    const data = await response.json();

    if (
      data &&
      data.attributeScores &&
      data.attributeScores.TOXICITY &&
      data.attributeScores.TOXICITY.summaryScore
    ) {
      return data.attributeScores.TOXICITY.summaryScore.value;
    } else {
      console.error(
        "Error fetching Perspective API: Unexpected response format:",
        data
      );
      return null;
    }
  } catch (error) {
    console.error("Error fetching Perspective API:", error);
    return null;
  }
}

export default analyzeText;
