<template>
    <b-container class="bv-example-row" fluid>
        <b-row cols="1" cols-sm="2" cols-md="3" cols-lg="4">
            <b-col v-for="card in getCards"
                    :key="card.id"
                    col
                    no-gutters
                    class="mb-2">
                <post-card
                        :name="card.name"
                        :desc="card.desc"
                        :id="card.id"
                        :img-src="card.imgSrc"
                        :key="card.id"
                ></post-card>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import { mapGetters } from "vuex";
import dispatchConstants from '../common/dispatchConstants'
import PostCard from "../components/Card.vue";

export default {
  components: {
      PostCard
  },
  mounted() {
    this.$store.dispatch(dispatchConstants.fetchCards);
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters(["getCards"])
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
    .bv-example-row {
        margin-top: 10px;
    }
</style>
