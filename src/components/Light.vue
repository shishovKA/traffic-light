
<template>
      <div class='light' v-bind:style="{'background-color': this.color}"
        v-bind:class="{
          'turned-off': (!this.isActive),
          'blink': (this.isActive) && (this.currentTime <= 3)
          }"
      >
        <p v-if="this.isActive" class="light__counter">{{this.currentTime}}</p>
      </div>
</template>

<script>
export default {
  name: 'Light',
  props: {
    isActive: Boolean,
    color: String,
    currentTime: Number,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.light__counter {
  margin: 0 auto;
  position: absolute;
  color: #fff;
  font-size: 40px;
}

.light {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25vh;
  border-radius: 50%;
  background-color: #fff;
}

.blink {
  animation-name: blink;
  animation-delay: 0.1s;
  animation-duration: 1s;
  animation-iteration-count: infinite;
}

.light:after {
  content: "";
  display: block;
  padding-bottom: 100%;
}

.turned-off {
  opacity: 0.25;
}

@keyframes blink {
  0%   {opacity: 1;}
  20%  {opacity: 0.25;}
  100%  {opacity: 1;}
}

</style>
