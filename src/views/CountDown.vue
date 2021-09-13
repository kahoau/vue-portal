<template>
  <section id="countdown">
    <div class="col1">
      <h2><p>{{ $t('countdown.title') }} to {{getDec2021BonusDay()}}</p></h2>
      <b-container>
        <b-row>
          <b-col>
            Calendar Days: {{getCalendarDays(getDec2021BonusDay()) + 1}}
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            Business Days: {{getBusinessDays(getDec2021BonusDay()) + 1}}
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="col1">
      <h2><p>{{ $t('countdown.title') }} to {{getApr2022BonusDay()}}</p></h2>
      <b-container>
        <b-row>
          <b-col>
            Calendar Days: {{getCalendarDays(getApr2022BonusDay()) + 1}}
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            Business Days: {{getBusinessDays(getApr2022BonusDay()) + 1}}
          </b-col>
        </b-row>
      </b-container>
    </div>
  </section>
</template>

<script>
import moment from 'moment-timezone'

export default {
  mounted() {
  },
  data() {
    return {}
  },
  methods: {
    getDec2021BonusDay() {
      return "2021/12/20";
    },
    getApr2022BonusDay() {
      return "2022/04/20";
    },
    getCalendarDays(theBonusDate) {
      const dateFrom = moment.tz("Asia/Taipei");
      const dateTo = moment.tz(theBonusDate, "Asia/Taipei");

      return dateTo.diff(dateFrom, 'days')
    },
    getBusinessDays(theBonusDate) {
      const dateFrom = moment.tz("Asia/Taipei");
      const dateTo = moment.tz("Asia/Taipei").add(this.getCalendarDays(theBonusDate), 'days');

      let d1 = dateFrom.clone();
      let numDays = 0;
      while(dateTo.diff(d1.add(1, 'days')) > 0) {
        if ([0, 6].includes(d1.day())) {
          // Don't count the sat/sun
        } else if (this.isNonWeekendPublicHolidays(d1.format("YYYY-MM-DD"))) {
          // Don't count public holidays fall into weekdays
        } else {
          numDays++;
        }
      }
      return numDays;
    },
    isNonWeekendPublicHolidays(theDate) {
      return this.getNonWeekendPublicHolidays().some(elem => elem.isSame(theDate, 'day'));
    },
    getNonWeekendPublicHolidays() {
      return [
            moment.tz("2021-01-01", "Asia/Taipei"), moment.tz("2021-02-12", "Asia/Taipei"), moment.tz("2021-02-15", "Asia/Taipei"),
            moment.tz("2021-04-02", "Asia/Taipei"), moment.tz("2021-04-05", "Asia/Taipei"), moment.tz("2021-04-06", "Asia/Taipei"),
            moment.tz("2021-05-19", "Asia/Taipei"), moment.tz("2021-06-14", "Asia/Taipei"), moment.tz("2021-07-01", "Asia/Taipei"),
            moment.tz("2021-09-22", "Asia/Taipei"), moment.tz("2021-10-01", "Asia/Taipei"), moment.tz("2021-10-14", "Asia/Taipei"),
            moment.tz("2021-12-27", "Asia/Taipei"),

            moment.tz("2022-02-01", "Asia/Taipei"), moment.tz("2022-02-02", "Asia/Taipei"), moment.tz("2022-02-03", "Asia/Taipei"),
            moment.tz("2022-04-05", "Asia/Taipei"), moment.tz("2022-04-15", "Asia/Taipei"), moment.tz("2022-04-18", "Asia/Taipei"),
            moment.tz("2022-05-02", "Asia/Taipei"), moment.tz("2022-05-09", "Asia/Taipei"), moment.tz("2022-06-03", "Asia/Taipei"),
            moment.tz("2022-07-01", "Asia/Taipei"), moment.tz("2022-09-12", "Asia/Taipei"), moment.tz("2022-10-04", "Asia/Taipei"),
            moment.tz("2022-12-26", "Asia/Taipei"), moment.tz("2022-12-27", "Asia/Taipei")
      ];
    }
  }
}
</script>

<style lang="scss" scoped>
  .col {
    margin-bottom: 0.5rem;
  }
</style>
