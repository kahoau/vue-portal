<template>
  <section id="calculator">
    <div class="col1">
      <h2>Calculator</h2>
        <b-container>
          <b-row>
            <b-col>
              <b-form-group
                      id="sbutton-digits-label"
                      label="Digits"
                      label-for="sbutton-digits">
                <b-form-spinbutton id="sbutton-decimal" min="1" max="3" v-model="digitsValue" placeholder="digits" inline></b-form-spinbutton>
              </b-form-group>
              <b-form-group
                      id="sbutton-decimal-label"
                      label="Decimal"
                      label-for="sbutton-decimal">
                <b-form-spinbutton id="sbutton-decimal" min="0" max="3" v-model="decimalValue" placeholder="decimal" inline></b-form-spinbutton>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row><b-col>&nbsp;</b-col></b-row>
          <b-row>
            <b-col>
              <h4>{{ num1 }} - {{ num2 }} = {{answer}}</h4>
              <form @submit.prevent>
                <b-button variant="primary" @click="refresh()">Refresh</b-button> &nbsp;
                <b-button variant="primary" @click="getAnswer()">Answer</b-button> &nbsp;
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

      this.answer = "";
    },
    getAnswer() {
      this.answer = Number(this.num1 - this.num2).toFixed(this.decimalValue);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
