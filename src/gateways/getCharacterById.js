const axios = require('axios').default;

async function getCharacterById(characterId) {
  try {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/${characterId}`);
    if (response.status === 200) {
      return response.data;
    }
    return false;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = getCharacterById;