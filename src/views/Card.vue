<template>
  <b-container fluid>
    <b-row cols="1" cols-sm="1" cols-md="2" cols-lg="4">
      <b-col v-for="card in getCards" :key="card.id">
        <b-card
                :title="card.title"
                :img-src="card.imgSrc"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
        >
          <b-card-text>
            {{ card.desc }}
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>

  </b-container>
</template>

<script>
  import { mapGetters } from "vuex";

export default {
  mounted() {
    this.$store.dispatch("fetchCards");
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
</style>
