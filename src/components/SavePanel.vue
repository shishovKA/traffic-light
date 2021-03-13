
<template>
  <div>
      <div class='save-panel'>
          Click here to save current traffic-light state:
          <button class="save-btn" v-on:click="saveState" >Save</button>
          After page refresh traffic-light will start working from the saved position
          <div v-if="(color !== null)" class="saved-data">Color: {{color}}, time: {{time}}</div>
      </div>
      
  </div>
</template>

<script>
export default {
  name: 'SavePanel',

  data: function() {
    return {
      savedState: {
          color: null,
          time: 0,
        }
    };
  },

  computed: {
    color: function () {
      return this.savedState.color;
    },

    time: function () {
      return this.savedState.time;
    }
  },

  methods: {
    saveState() {
      this.$store.commit('setSate');
      this.savedState.color = this.$store.getters.currentName;
      this.savedState.time = this.$store.getters.currentTime;
    },
  },


};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.save-panel {
  max-width: 200px;
  text-align: left;
  position: absolute;
  top: 20px;
  left: 20px;
  color: #fff;
  background-color: rgb(75, 75, 75);
  padding: 10px;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
}

.save-btn {
  height: 30px;
  max-width: 100px;
  width: 100%;
  margin: 10px auto;
}

.saved-data {
  max-width: 200px;
  text-align: left;
  position: absolute;
  bottom: -40px;
  left: 0px;
  color: #fff;
  background-color: rgb(75, 75, 75);
  padding: 5px 10px;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
}

</style>
