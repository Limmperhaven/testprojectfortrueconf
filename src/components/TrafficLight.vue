<template>
  <div class="tlights">
    <div id="green" class="tlights__item" :class="[{ tlights__green_active: isActiveGreen }, {tlights_blinking: blinking && isActiveGreen}]">
      <span class="tlights__span" :class="{ tlights__span_active: isActiveGreen }">{{timerValue}}</span>
    </div>
    <div id="yellow" class="tlights__item" :class="[{ tlights__yellow_active: isActiveYellow }, {tlights_blinking: blinking && isActiveYellow}]">
      <span class="tlights__span" :class="{ tlights__span_active: isActiveYellow }">{{timerValue}}</span>
    </div>
    <div id="red" class="tlights__item" :class="[{ tlights__red_active: isActiveRed }, {tlights_blinking: blinking && isActiveRed}]">
      <span class="tlights__span" :class="{ tlights__span_active: isActiveRed }">{{timerValue}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TrafficLight',
  props: {
    mainColor: {
      type: String,
      required: true
    },
    blinking: {
      type: Boolean
    },
    timerValue: {}
  },
  data () {
    return {
      isActiveGreen: false,
      isActiveYellow: false,
      isActiveRed: false
    }
  },
  methods: {
    setMainColor (mainColor) {
      if (mainColor === 'green') {
        this.isActiveGreen = true
      } else {
        if (mainColor === 'red') {
          this.isActiveRed = true
        } else {
          this.isActiveYellow = true
        }
      }
    }
  },
  mounted () {
    this.setMainColor(this.mainColor)
  }
}
</script>

<style scoped>
.tlights {
  width: 1100px;
  height: 400px;
  background: #8E8E8E;
  border: 25px solid #3D3A3A;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 75px;
}
.tlights__item {
  border-radius: 50%;
  height: 350px;
  width: 350px;
  border: 10px solid #3D3A3A;
  display: flex;
  align-items: center;
}
.tlights__span {
  margin: 0 auto;
  text-align: center;
  font-size: 75px;
  letter-spacing: 0.1em;
  display: none;
}
.tlights_blinking {
  animation: blink 0.5s infinite alternate;
}
#green {
  background: rgba(0, 128, 0, 0.5);
  color: white;
}
#yellow {
  background: rgba(255, 255, 0, 0.5);
  color: black;
}
#red {
  background: rgba(255, 0, 0, 0.5);
  color: white;
}
.tlights__green_active {
  background: green;
}
.tlights__yellow_active {
  background: yellow;
}
.tlights__red_active {
  background: red;
}
.tlights__span_active {
  display: block;
}
@keyframes blink {
  to { background-color: #3D3A3A; }
}
</style>
