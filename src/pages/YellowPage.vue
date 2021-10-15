<template>
  <div class="wrapper">
    <TrafficLight :main-color="'yellow'" :timer-value="timerValue" :blinking="blinking"/>
  </div>
</template>

<script>
import TrafficLight from '../components/TrafficLight'
export default {
  name: 'YellowPage',
  components: {TrafficLight},
  props: {
    prevPage: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      timerValue: 3,
      timerPointer: '',
      prev: this.prevPage,
      blinking: false
    }
  },
  methods: {
    setTimer () {
      this.timerPointer = setInterval(() => {
        this.timerValue--
        localStorage.timerValue = this.timerValue

        if (this.timerValue === 0) {
          clearInterval(this.timerPointer)
          this.$emit('update:prevPage', 'yellow')
          if (this.prev === 'green') {
            this.$router.push('/red')
          } else {
            this.$router.push('/green')
          }
        }

        if (this.timerValue < 3) {
          this.blinking = true
        }
      }, 1000)
    }
  },
  mounted () {
    this.prev = localStorage.prevPage
    if (localStorage.timerValue > 0 && localStorage.color === 'yellow' && !isNaN(localStorage.timerValue)) {
      this.timerValue = localStorage.timerValue
      localStorage.color = 'yellow'
    } else {
      localStorage.color = 'yellow'
      localStorage.timerValue = 3
    }
    this.setTimer()
  }
}
</script>

<style scoped>
.wrapper {
  background: #E2E2E2;
  width: 100%;
  height: 100%;
  padding-top: calc(120%/1080*100);
}
</style>
