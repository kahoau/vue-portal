<template>
  <section id="calculator">
    <div class="col1">
      <h3>Calculator</h3>

      <p>{{ num1 }} - {{ num2 }} = {{answer}}</p>

      <form @submit.prevent>
        <button @click="refresh()" class="button">Refresh</button> &nbsp;
        <button @click="getAnswer()" class="button">Answer</button>
      </form>
    </div>
  </section>
</template>

<script>

export default {
  created() {
    this.refresh();
  },
  data() {
    return {
      num1: "",
      num2: "",
      answer: ""
    }
  },
  methods: {
    genRandomNum() {
      return Number(Math.random() * 100).toFixed(2);
    },
    refresh() {
      let temp1 = this.genRandomNum();
      let temp2 = this.genRandomNum();

      if (Number(temp2) > Number(temp1)) {
        this.num1 = temp2;
        this.num2 = temp1;
      } else {
        this.num1 = temp1;
        this.num2 = temp2;
      }
      this.answer = "";
    },
    getAnswer() {
      this.answer = Number(this.num1 - this.num2).toFixed(2);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
