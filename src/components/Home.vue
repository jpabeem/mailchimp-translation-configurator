<template>
  <main role="main" class="inner cover">
      <h1 class="cover-heading">Configure MailChimp translations.</h1>
      <p class="lead">Configure MailChimp translations with the help of this tool. Pick the
        <i>Browser language</i> option if you want to configure your translations by browser language. Pick the
        <i>Form field</i> option if you want to configure translations by using a form field with stored language preferences
        for each subscriber.</p>
      <p class="lead">
         <router-link tag="a" class="btn btn-md btn-primary" :to="{ name: 'browser-language'}">
            <i class="fa fa-globe" aria-hidden="true"></i> Browser language
          </router-link>
          <router-link tag="a" class="btn btn-md btn-primary" :to="{ name: 'form-field'}">
            <i class="fa fa-database" aria-hidden="true"></i> Form field
          </router-link>
      </p>
    </main>
</template>

<script>

export default {
  name: "Home",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*
 * Globals
 */
html {
  margin: 0;
  padding: 0;
}
/* Links */
a,
a:focus,
a:hover {
  color: #fff;
}

/* Custom default button */

.btn-secondary,
.btn-secondary:hover,
.btn-secondary:focus {
  color: #333;
  text-shadow: none;
  /* Prevent inheritance from `body` */
  background-color: #fff;
  border: 0.05rem solid #fff;
}

/*
 * Base structure
 */

html,
body {
  height: 100%;
  background-color: #333;
}

body {
  display: -ms-flexbox;
  display: flex;
  color: #fff;
  text-shadow: 0 0.05rem 0.1rem rgba(0, 0, 0, 0.5);
  box-shadow: inset 0 0 5rem rgba(0, 0, 0, 0.5);
}

.cover-container {
  max-width: 50em;
}

/*
 * Header
 */

.masthead {
  margin-bottom: 2rem;
}

.masthead-brand {
  margin-bottom: 0;
}

.nav-masthead .nav-link {
  padding: 0.25rem 0;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.5);
  background-color: transparent;
  border-bottom: 0.25rem solid transparent;
}

.nav-masthead .nav-link:hover,
.nav-masthead .nav-link:focus {
  border-bottom-color: rgba(255, 255, 255, 0.25);
}

.nav-masthead .nav-link + .nav-link {
  margin-left: 1rem;
}

.nav-masthead .active {
  color: #fff;
  border-bottom-color: #fff;
}

@media (min-width: 48em) {
  .masthead-brand {
    float: left;
  }
  .nav-masthead {
    float: right;
  }
}

/*
 * Cover
 */

.cover {
  padding: 0 1.5rem;
}

.cover .btn-lg {
  padding: 0.75rem 1.25rem;
  font-weight: 700;
}

/*
 * Footer
 */

.mastfoot {
  color: rgba(255, 255, 255, 0.5);
}
</style>
