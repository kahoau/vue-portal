<template>
  <section id="countdown">
    <div class="col1">
      <h2>
        <p>{{$t('countdown.title')}}: {{ countDown() }} + 121</p>
      </h2>
    </div>
  </section>
</template>

<script>

export default {
  mounted() {
  },
  data() {
    return {
    }
  },
  methods: {
    countDown() {
      const dateFrom = new Date();
      const dateTo = new Date("12/20/2021");

      // To calculate the time difference of two dates
      const differenceInTime = dateTo.getTime() - dateFrom.getTime();

      // To calculate the no. of days between two dates
      return Math.round(differenceInTime / (1000 * 3600 * 24));
    }
  }
}
</script>

<style lang="scss" scoped>
  .col {
    margin-bottom: 0.5rem;
  }
</style>
