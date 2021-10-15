<template>
  <div class="tlights">
    <div id="green" :class="[{ active__green: isActiveGreen }, {light__blinking: blinking && isActiveGreen}]">
      <span class="tspan" :class="{ active__span: isActiveGreen }">{{timerValue}}</span>
    </div>
    <div id="yellow" :class="[{ active__yellow: isActiveYellow }, {light__blinking: blinking && isActiveYellow}]">
      <span class="tspan" :class="{ active__span: isActiveYellow }">{{timerValue}}</span>
    </div>
    <div id="red" :class="[{ active__red: isActiveRed }, {light__blinking: blinking && isActiveRed}]">
      <span class="tspan" :class="{ active__span: isActiveRed }">{{timerValue}}</span>
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
.tlights div {
  border-radius: 50%;
  height: 350px;
  width: 350px;
  border: 10px solid #3D3A3A;
  display: flex;
  align-items: center;
}
.tspan {
  margin: 0 auto;
  text-align: center;
  font-size: 75px;
  letter-spacing: 0.1em;
  display: none;
}
.light__blinking {
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
.active__green {
  background: green;
}
.active__yellow {
  background: yellow;
}
.active__red {
  background: red;
}
.active__span {
  display: block;
}
@keyframes blink {
  to { background-color: #3D3A3A; }
}
</style>
