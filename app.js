// Simulated AI-assisted response (Gemini API placeholder)

function getAdvisory() {
  const lang = document.getElementById("language").value;
  const contentDiv = document.getElementById("content");

  const advisories = {
    English: "Use soil testing to improve crop productivity.",
    Hindi: "मिट्टी परीक्षण से फसल की उत्पादकता बढ़ाई जा सकती है।"
  };

  contentDiv.innerHTML = `
    <h3>AI-Assisted Advisory</h3>
    <p>${advisories[lang]}</p>
  `;
}