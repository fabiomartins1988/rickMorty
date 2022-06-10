<template>
  <div></div>
</template>

<script>
import getRandomText from "../gateways/getRandomText"

export default {
  name: "ComponentWithAsyncCall",
  
  data () {
    return {}
  },

  methods: {
    async makeApiCall() {
      console.log("--------------- Making api call ---------------------")
      await getRandomText();
    }
  }
}
</script>