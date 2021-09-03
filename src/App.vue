<template>
  <div id="app">
    <SiteNav></SiteNav>
    <router-view/>
  </div>
</template>

<script>
import SiteNav from '@/components/SiteNav'

export default {
  components: {
    SiteNav
  },
  computed: {
  }
}
</script>
