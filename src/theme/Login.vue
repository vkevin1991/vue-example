<template>
  <div class="content">
    <div v-if="isAuthenticated">
      <h2>Hello Authenticated user!</h2>
      <!-- <p>Name: {{profile.firstName}}</p>
      <p>Favorite Sandwich: {{profile.favoriteSandwich}}</p> -->
      <button class="button is-primary" v-on:click="logout()">Logout</button>
    </div>
    <div v-else>
      <h2>Login</h2>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Username</label>
        </div>
        <div class="field-body">
          <div class="field">
          <div class="control">
            <input class="input" type="text"
            placeholder="Your username" v-model="username">
          </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Password</label>
        </div>
        <div class="field-body">
          <div class="field">
          <div class="control">
            <input class="input" type="password"
            placeholder="Your password" v-model="password">
          </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label">
          <!-- Left empty for spacing -->
        </div>
        <div class="field-body">
          <div class="field">
          <div class="control">
            <button class="button is-primary" v-on:click="login()">
            Login
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      username: '',
      password: '',
      profile: {}
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated'])
  },
  methods: {
    ...mapActions({
      logout: 'logout'
    }),
    login () {
      this.$store.dispatch('login', {username: this.username, password: this.password})
        .then(() => {
          this.username = ''
          this.password = ''
        })
    }
  }
  // watch: {
  //   isAuthenticated: function (val) {
  //     if (val) {
  //       appService.getProfile()
  //         .then(profile => {
  //           this.profile = profile
  //         })
  //     } else {
  //       this.profile = {}
  //     }
  //   }
  // },
  // created () {
  //   let expiration = window.localStorage.getItem('tokenExpiration')
  //   var unixTimestamp = new Date().getTime() / 1000
  //   if (expiration !== null && parseInt(expiration) - unixTimestamp > 0) {
  //     //this.isAuthenticated = true
  //   }
  // }
}
</script>

