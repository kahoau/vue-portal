<template>
  <div id="app">
    <SiteNav></SiteNav>
    <router-view/>
  </div>
</template>

<script>
import SiteNav from '@/components/SiteNav'
import * as types from '@/store/mutation-types'

export default {
  components: {
    SiteNav
  },
  computed: {
  },
  beforeCreate () {
    this.$store.commit(types.INITIALISE_STORE)
  },
  metaInfo() {
    return {
      title: "Vue portal: " + this.countDown() + " + 121",
      meta: [
        /*
        { name: 'description', content:  'Epiloge is about connecting in your field of interest. Our vision is to help people share their knowledge, work, projects, papers and ideas and build their network through what they do rather where they live, study or work.'},
        { property: 'og:title', content: "Epiloge - Build your network in your field of interest"},
        { property: 'og:site_name', content: 'Epiloge'},
        {property: 'og:type', content: 'website'},
        {name: 'robots', content: 'index,follow'}
         */
      ]
    }
  },
  methods: {
    countDown() {
      const dateFrom = new Date();
      const dateTo = new Date("12/20/2021");

      // To calculate the time difference of two dates
      const differenceInTime = dateTo.getTime() - dateFrom.getTime();

      // To calculate the no. of days between two dates
      return Math.round(differenceInTime / (1000 * 3600 * 24));
    }
  }
}
</script>
