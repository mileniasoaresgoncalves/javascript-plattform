function getCurrentDate() {
  const today = new Date();
  return today.toLocaleDateString();
}

function getCurrentTime() {
  const now = new Date();
  return now.toLocaleTimeString();
}

module.exports = { getCurrentDate, getCurrentTime };

