<template>
  <section id="countdown">
      <div class="col1" v-for="(bonusDate, i) in getBonusDates()" :key="i">
        <h5 :id="`collapse-toggle-${i}`" v-b-toggle="`collapse-${i}`" variant="primary"><p>{{ $t('countdown.title') }} {{ $t('countdown.to') }} {{bonusDate}}</p></h5>
        <b-collapse :id="`collapse-${i}`" class="mt-2">
          <count-down
                  :calendar-days="getCalendarDays(bonusDate)"
                  :working-days="getWorkingDays(bonusDate)"
          ></count-down>
        </b-collapse>
      </div>
  </section>
</template>

<script>
import CountDown from "../components/CountDown";
import mixins from '../common/mixins'

export default {
  mixins : [ mixins ],
  components: { CountDown },
    mounted: () => {
        setTimeout(() => {
            const elem = document.getElementById('collapse-toggle-0');
            elem.click();
        }, 100);
    },
  data() {
    return {}
  },
  methods: {
    getBonusDates() {
      return ["2022/04/20", "2022/12/20"];
    },
    getCalendarDays(theBonusDate) {
      const dateFrom = this.getDate().startOf("day")
      const dateTo = this.getDate(theBonusDate).startOf("day")
      const diffDays = dateTo.diff(dateFrom, 'days')

      return diffDays < 0 ? 0 : diffDays;
    },
    getWorkingDays(theBonusDate) {
      const dateFrom = this.getDate().startOf("day")
      const dateTo = this.getDate(theBonusDate).startOf("day").add(1, 'days')

      let d1 = dateFrom.clone();
      let numDays = 0;
      while(dateTo.diff(d1.add(1, 'days')) > 0) {
        if ([0, 6].includes(d1.day())) {
          // don't count sat/sun
        } else if (this.isNonWeekendPublicHolidays(d1)) {
          // don't count public holidays fall into weekdays
        } else {
          numDays++;
        }
      }
      return numDays
    },
    isNonWeekendPublicHolidays(theDate) {
      return this.getNonWeekendPublicHolidays().some(elem => elem.isSame(theDate, 'day'));
    },
    getNonWeekendPublicHolidays() {
      return [
        this.getDate("2021-01-01"), this.getDate("2021-02-12"), this.getDate("2021-02-15"),
        this.getDate("2021-04-02"), this.getDate("2021-04-05"), this.getDate("2021-04-06"),
        this.getDate("2021-05-19"), this.getDate("2021-06-14"), this.getDate("2021-07-01"),
        this.getDate("2021-09-22"), this.getDate("2021-10-01"), this.getDate("2021-10-14"),
        this.getDate("2021-12-27"),

        this.getDate("2022-02-01"), this.getDate("2022-02-02"), this.getDate("2022-02-03"),
        this.getDate("2022-04-05"), this.getDate("2022-04-15"), this.getDate("2022-04-18"),
        this.getDate("2022-05-02"), this.getDate("2022-05-09"), this.getDate("2022-06-03"),
        this.getDate("2022-07-01"), this.getDate("2022-09-12"), this.getDate("2022-10-04"),
        this.getDate("2022-12-26"), this.getDate("2022-12-27")
      ];
    }
  }
  // https://hong-kong.workingdays.org/
}
</script>

<style lang="scss" scoped>

</style>
