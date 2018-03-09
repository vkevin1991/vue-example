<template>
  <nav class="navbar has-shadow">
    <div class="container">
      <router-link to="/category/front-end" exact>
        <img src="http://bit.ly/vue-img"
          alt="Vue SPA" />
      </router-link>
      <router-link :to="{name: 'category', params: {id: 'front-end'}}" class="navbar-item is-tab">FrontEnd</router-link>
      <router-link :to="{name: 'category', params: {id: 'mobile'}}" class="navbar-item is-tab">Mobile</router-link>
      <router-link to="/login" class="navbar-item is-tab">Login</router-link>
    </div>
  </nav>
</template>
