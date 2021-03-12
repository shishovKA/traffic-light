/* eslint-disable */

<template>
  <div class='page'>
    <div class='light__container'>
      <!-- red -->
      <div
        class='light red'
        v-bind:class="{'turned-off': (this.activeLight !== 'red')}">
      </div>
      <!-- yellow -->
      <div
        class='light yellow'
        v-bind:class="{'turned-off': (this.activeLight !== 'yellow')}">
      </div>
      <!-- green -->
      <div
        class='light green'
        v-bind:class="{'turned-off': (this.activeLight !== 'green')}">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
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
      console.log(this.activeLight, ' = ', time);
      if (time === 0) {
        this.stopTimer();
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

.light {
  width: 25vh;
  border-radius: 50%;
  background-color: #fff;
}

.light:after {
  content: "";
  display: block;
  padding-bottom: 100%;
}

.red {
  background-color: red;
}

.yellow {
  background-color: rgb(255, 238, 0);
}

.green {
  background-color: rgb(14, 223, 14);
}

.turned-off {
  opacity: 0.25;
}

</style>
