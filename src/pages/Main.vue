/* eslint-disable */

<template>
  <div class='page'>
    <div class='light__container'>
      <!-- red -->
      <Light
        :color="'#ff1100'" 
        :isActive="(this.activeLight === 'red')"
        :currentTime="this.currentTime"
      />
      <!-- yellow -->
      <Light
        :color="'#ffd900'" 
        :isActive="(this.activeLight === 'yellow')"
        :currentTime="this.currentTime"
      />
      <!-- green -->
      <Light
        :color="'#09ff00'" 
        :isActive="(this.activeLight === 'green')"
        :currentTime="this.currentTime"
      />
    </div>
  </div>
</template>

<script>
import Light from '../components/Light';

export default {
  name: 'Main',
  components: {
    Light
  },
  props: {
    activeLight: String,
    startTime: Number,
  },

  data: function() {
    return {
      currentTime: this.startTime,
      timer: null,
    };
  },

  mounted() {
    this.$store.commit('updateCurrentTime', this.currentTime);
    this.startTimer();
  },
  destroyed() {
    this.stopTimer();
  },

  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.currentTime -= 1;
      }, 1000);
    },
    stopTimer() {
      clearTimeout(this.timer);
    },
  },

  watch: {
    currentTime(time) {
      this.$store.commit('updateCurrentTime', time);
      if (time === 0) {
        this.stopTimer();
        this.$store.commit('changeLight');
      }
    },
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.page {
 width: 100%;
 height: 100vh;
 background-color: #0097A7;
 display: flex;
 flex-direction: column;
 justify-content: center;

}

.light__container {
  width: 100%;
  min-width: 30vh;
  max-width: 300px;
  height: 90%;
  margin: 0 auto;
  background-color: #3b3b3b;
  border-radius: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

</style>
