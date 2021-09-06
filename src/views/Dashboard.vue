<template>
  <section id="calculator">
    <div class="col1">
      <h2>Calculator</h2>
        <b-container>
          <b-row>
            <b-col>
              Sign <b-form-select v-model="selectedCalculatorSign" :options="options"></b-form-select>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
                Digits <b-form-spinbutton id="sbutton-decimal" min="1" max="3" v-model="digitsValue" placeholder="digits" inline></b-form-spinbutton>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
                Decimal <b-form-spinbutton id="sbutton-decimal" min="0" max="3" v-model="decimalValue" placeholder="decimal" inline></b-form-spinbutton>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-jumbotron lead="Formula" text-variant="dark">
                <h6>{{ num1 }} {{calculatorSign}} {{ num2 }} = {{answer}}</h6>
              </b-jumbotron>
              <form @submit.prevent>
                <b-button variant="primary" @click="refresh()">Refresh</b-button> &nbsp;
                <b-button variant="primary" @click="calcAnswer()">Answer</b-button> &nbsp;
              </form>
            </b-col>
          </b-row>
        </b-container>
    </div>
  </section>
</template>

<script>

export default {
  mounted() {
    this.refresh();
  },
  data() {
    return {
      calculatorSign: '',
      selectedCalculatorSign: "-",
      options: [
        { text: '+', value: '+' },
        { text: '-', value: '-' }
      ],
      digitsValue: 2,
      decimalValue: 2,
      num1: "",
      num2: "",
      answer: ""
    }
  },
  methods: {
    genRandomNum() {
      return Number(Math.random() * Math.pow(10, this.digitsValue)).toFixed(this.decimalValue);
    },
    refresh() {
      this.num1 = this.genRandomNum();
      this.num2 = this.genRandomNum();

      if (Number(this.num2) > Number(this.num1)) {
        let temp = this.num1;
        this.num1 = this.num2;
        this.num2 = temp;
      }

      this.calculatorSign = this.selectedCalculatorSign;
      this.answer = "";
    },
    calcAnswer() {
      let theAnswer = this.calculatorSign  == '-' ?
                          Number(this.num1) - Number(this.num2) :
                          Number(this.num1) + Number(this.num2)
      this.answer = theAnswer.toFixed(this.decimalValue);
    }
  }
}
</script>

<style lang="scss" scoped>
  .col {
    margin-bottom: 0.5rem;
  }

  .btn {
    margin-right: 1rem;
  }

  .jumbotron {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
</style>
