<template>
  <img alt="Vue logo" src="./assets/logo.jpg" width="400" height="300">
  <RepresentationCharacter
    v-if="showArticleMsg"
    :msg="msgWithCount"
    :name="name"
    :imagem="imagem"
  />
  <div
    v-if="!showArticleMsg"
  >
    <p>Não há nenhum personagem</p>
  </div>
  <div id="app">
    <button @click="addCharacter">
      Add character
    </button>
    <button @click="removeCharacter">
      Remove character
    </button>
  </div>
</template>

<script>
import RepresentationCharacter from './components/RepresentationCharacter.vue';
import getCharacterById from './gateways/getCharacterById.js';

export default {
  name: 'App',

  components: {
    RepresentationCharacter
  },

  data: () => ({
    msg: "The character is $characterName",
    name: "",
    imagem: "",
    itsLife: false,
    characterCount: 0,
  }),

  computed: {
    msgWithCount() {
        this.rickMortyFromBack(this.characterCount)
        return this.msg.replace('$characterName', this.name);
    },

    showArticleMsg() {
      return this.characterCount > 0;
    },
  },

  methods: {
    async rickMortyFromBack(characterId) {
      try {
        const response = await getCharacterById(characterId)
        this.imagem = response.image
        this.name = response.name
      } catch (error) {
        // console.log(error.response);
      }
    },

    addCharacter() {
      this.characterCount++;
    },

    removeCharacter() {
      if (this.characterCount >= 0) {
        this.characterCount--;
      }  
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
