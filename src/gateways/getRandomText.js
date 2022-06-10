const axios = require('axios').default;

async function getRandomText() {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
    if (response.status === 200) {
      return response.data;
    }
    return false;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = getRandomText;