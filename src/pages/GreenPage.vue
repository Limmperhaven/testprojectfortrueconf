<template>
  <div class="wrapper">
    <TrafficLight :main-color="'green'" :timer-value="timerValue" :blinking="blinking"/>
  </div>
</template>

<script>
import TrafficLight from '../components/TrafficLight'
export default {
  name: 'GreenPage',
  components: {TrafficLight},
  data () {
    return {
      timerValue: 15,
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
          this.$emit('update:modelValue', 'green')
          this.$router.push({name: 'yellow', params: {prevPage: 'green'}})
        }

        if (this.timerValue < 3) {
          this.blinking = true
        }
      }, 1000)
    }
  },
  mounted () {
    if (localStorage.timerValue > 0 && localStorage.color === 'green' && !isNaN(localStorage.timerValue)) {
      this.timerValue = localStorage.timerValue
      localStorage.color = 'green'
    } else {
      localStorage.color = 'green'
      localStorage.timerValue = 10
    }
    localStorage.prevPage = 'green'
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
