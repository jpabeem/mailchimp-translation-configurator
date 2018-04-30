<template>
  <div class="error-404">
    <h1>{{ msg }}</h1>
    <br>
    <router-link tag="a" class="btn btn-lg btn-primary" :to="{ name: 'home'}">
              <i class="fa fa-home" aria-hidden="true"></i> Go home
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'Hello',
    data () {
      return {
        msg: 'Oops... the page you were looking for does not exist.'
      }
    }
  }
</script>