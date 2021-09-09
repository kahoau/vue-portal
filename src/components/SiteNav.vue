<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="/">&nbsp;&nbsp;Ka Portal</b-navbar-brand>
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
                           @click="setLocale(lang)">
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
        <b-nav-item href="#">
          <b-link to="/login">
            <img src="@/assets/images/login_icon_152813.png" fluid alt="Responsive image">
          </b-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import {mapGetters} from "vuex";
import dispatchConstants from '../common/dispatchConstants'
import constants from '../common/constants'

export default {
  data () {
    return { langs: constants.locale.availableLocale }
  },
  computed: {
    ...mapGetters(["getUserProfile"])
  },
  methods: {
    setLocale(lang) {
      this.$store.dispatch(dispatchConstants.setLocale, {
        locale: lang
      })
    },
    doLogout() {
        this.$store.dispatch(dispatchConstants.userLogout, {
          username: this.usernameLogin,
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
