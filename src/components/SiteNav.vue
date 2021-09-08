<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">&nbsp;&nbsp;Ka Portal</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#"><b-link to="/calculator">calculator</b-link></b-nav-item>
        <b-nav-item href="#" v-if="getUserProfile"><b-link to="/cards">card</b-link></b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="mr-auto">
        <b-nav-item-dropdown text="Lang">
          <b-dropdown-item href="#" v-for="(lang, i) in langs"
                           :key="`lang${i}`"
                           :value="lang"
                           @click="$i18n.locale = lang">
            {{ lang }}</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
      <b-navbar-nav v-if="getUserProfile">
        <b-nav-item-dropdown>
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#" @click="doLogout">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
      <b-navbar-nav class="ms-auto" v-else>
        <b-nav-item href="#"><b-link to="/login">login</b-link></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  data () {
    return { langs: ['en', 'tc'] }
  },
  computed: {
    ...mapGetters(["getUserProfile"])
  },
  methods: {
    doLogout() {
        this.$store.dispatch('logout', {
          email: this.emailLogin,
          password: this.passwordLogin
        })
    }
  }
}
</script>

<style lang="scss" scoped>

.navbar-nav li a {
  color: white;
  text-decoration: none;
}
</style>
