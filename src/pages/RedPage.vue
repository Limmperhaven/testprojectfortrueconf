<template>
  <div class="wrapper">
    <TrafficLight :main-color="'red'" :timer-value="timerValue" :blinking="blinking"/>
  </div>
</template>

<script>
import TrafficLight from '../components/TrafficLight'
export default {
  name: 'RedPage',
  components: {TrafficLight},
  data () {
    return {
      timerValue: 10,
      timerPointer: '',
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
          this.$emit('update:prevPage', 'red')
          this.$router.push({name: 'yellow', params: {prevPage: 'red'}})
        }

        if (this.timerValue < 3) {
          this.blinking = true
        }
      }, 1000)
    }
  },
  mounted () {
    if (localStorage.timerValue > 0 && localStorage.color === 'red' && !isNaN(localStorage.timerValue)) {
      this.timerValue = localStorage.timerValue
      localStorage.color = 'red'
    } else {
      localStorage.color = 'red'
      localStorage.timerValue = 10
    }
    localStorage.prevPage = 'red'
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
