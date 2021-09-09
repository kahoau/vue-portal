<template>
    <b-container fluid>
        <b-row cols="1" cols-sm="2" cols-md="3" cols-lg="4">
            <b-col
                    v-for="card in getCards"
                    :key="card.id"
                    col
                    no-gutters
                    class="mb-2"
            >
                <b-card
                        :title="card.title"
                        :img-src="card.imgSrc"
                        border-variant="secondary"
                        img-width="100%"
                        align="center"
                        class="h-100"
                >
                    <b-card-text>
                        {{ card.title }}
                    </b-card-text>
                    <template v-slot:footer v-if="card.title">
                        {{ card.title }}
                    </template>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import { mapGetters } from "vuex";
import dispatchConstants from '../common/dispatchConstants'

export default {
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

img {
  cursor: pointer;
}

/*
.card-columns .card {
  max-width: 25%;
}

.card-columns .card {
  max-width: calc(25% - 30px);
  display: inline-block;
}
*/
</style>
