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
  }
}
</script>
