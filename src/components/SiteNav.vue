<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">&nbsp;&nbsp;Ka Portal</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#"><b-link to="/calculator">calculator</b-link></b-nav-item>
        <b-nav-item href="#"><b-link to="/cards">card</b-link></b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#" v-for="(lang, i) in langs"
                           :key="`lang${i}`"
                           :value="lang"
                           @click="$i18n.locale = lang">
            {{ lang }}</b-dropdown-item>
        </b-nav-item-dropdown>
        <!--
        <b-nav-item-dropdown right>
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
        -->
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  data () {
    return { langs: ['en', 'tc'] }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>

.navbar-nav li a {
  color: white;
  text-decoration: none;
}
</style>
