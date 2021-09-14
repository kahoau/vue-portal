<template>
    <section id="quotes">
        <div class="col1">
            <b-jumbotron bg-variant="secondary" text-variant="white" border-variant="dark"
                         style="padding: 1rem"
                         v-for="(quote, i) in quoteFilter" :key="i">
                <template #lead>
                    {{ quote.tc }}
                </template>
            </b-jumbotron>
        </div>
    </section>
</template>

<script>
import { mapGetters } from "vuex";
import dispatchConstants from '../common/dispatchConstants'
import mixins from '../common/mixins'

export default {
  mixins : [ mixins ],
  mounted() {
    const monthIdx = this.getDate().month();
    this.$store.dispatch(dispatchConstants.fetchQuotes, monthIdx);
  },
  data() {
    return {
    }
  },
    computed: {
        ...mapGetters(["getQuotes"]),
        quoteFilter: function() {
            const quoteIdx = this.getDate().date() - 1
            return this.getQuotes.filter( (quote,i) => (i == quoteIdx))
        }
    },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
</style>
