<template>
  <section id="countdown">
    <div class="col1">
      <h5><p>{{ $t('countdown.title') }} {{ $t('countdown.to') }} {{getDec2021BonusDay()}}</p></h5>
      <b-container>
        <b-row>
          <b-col>
            <div class="clockdiv">
              <div>
                <span class="days day">{{getCalendarDays(getDec2021BonusDay())}}</span>
              </div>
            </div>
            {{ $t('countdown.calendarDays') }}
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <div class="clockdiv">
              <div>
                <span class="days day">{{getWorkingDays(getDec2021BonusDay())}}</span>
              </div>
            </div>
            {{ $t('countdown.workingDays') }}
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="col1">
      <h5><p>{{ $t('countdown.title') }} {{ $t('countdown.to') }} {{getApr2022BonusDay()}}</p></h5>
      <b-container>
        <b-row>
          <b-col>
            <div class="clockdiv">
              <div>
                <span class="days day">{{getCalendarDays(getApr2022BonusDay())}}</span>
              </div>
            </div>
            {{ $t('countdown.calendarDays') }}
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <div class="clockdiv">
              <div>
                <span class="days day">{{getWorkingDays(getApr2022BonusDay())}}</span>
              </div>
            </div>
            {{ $t('countdown.workingDays') }}
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
      const dateFrom = this.getDate().startOf("day")
      const dateTo = this.getDate(theBonusDate).startOf("day")

      return dateTo.diff(dateFrom, 'days')
    },
    getWorkingDays(theBonusDate) {
      const dateFrom = this.getDate().startOf("day")
      const dateTo = this.getDate(theBonusDate).add(1, 'days').startOf("day")

      let d1 = dateFrom.clone();
      let numDays = 0;
      while(dateTo.diff(d1.add(1, 'days')) > 0) {
        if ([0, 6].includes(d1.day())) {
          // Don't count the sat/sun
        } else if (this.isNonWeekendPublicHolidays(d1)) {
          // Don't count public holidays fall into weekdays
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
    },
    getDate(dateStr) {
      return (dateStr !== undefined) ? moment.tz(dateStr, "Asia/Taipei").startOf("day") :
                                       moment.tz("Asia/Taipei").startOf("day");
    }
  }
  // https://hong-kong.workingdays.org/
}
</script>

<style lang="scss" scoped>
  .col {
    margin-bottom: 0.5rem;
  }

  .clockdiv{
    font-family: sans-serif;
    color: #fff;
    display: inline-block;
    font-weight: 100;
    text-align: center;
    font-size: 30px;
  }
  .clockdiv > div{
    padding: 10px;
    border-radius: 3px;
    background: #00BF96;
    display: inline-block;
  }
  .clockdiv div > span{
    padding: 15px;
    border-radius: 3px;
    background: #00816A;
    display: inline-block;
  }
  smalltext{
    padding-top: 5px;
    font-size: 16px;
  }
</style>
