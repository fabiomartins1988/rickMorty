<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <img :src="imagem" width="250" height="300">
    <p>
      {{  name }}
    </p>

  </div>
</template>

<script>

export default {
  name: 'RepresentationCharacter',
  props: {
    msg: String,
    name: String,
    imagem: String
  },

  data: () => ({
    itsReal: false,
  }),
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
