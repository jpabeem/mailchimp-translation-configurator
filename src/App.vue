<template>
  <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
    <header class="masthead mb-auto">
      <div class="inner">
        <h4 class="masthead-brand">MailChimp translation configurator</h4>
        <nav class="nav nav-masthead justify-content-center">
          <router-link tag="a" class="nav-link" :to="{ name: 'home'}">
              <i class="fa fa-home" aria-hidden="true"></i> Home
          </router-link>
          <router-link tag="a" class="nav-link" :to="{ name: 'browser-language'}">
            <i class="fa fa-globe" aria-hidden="true"></i> Browser language
          </router-link>
          <router-link tag="a" class="nav-link" :to="{ name: 'form-field'}">
            <i class="fa fa-database" aria-hidden="true"></i> Form field
          </router-link>
        </nav>
      </div>
    </header>
  <router-view class="view"></router-view>

   <footer class="mastfoot mt-auto">
      <div class="inner">
        <p>Cover template for
          <a href="https://getbootstrap.com/">Bootstrap</a>, by
          <a href="https://twitter.com/mdo">@mdo</a>.</p>
      </div>
    </footer>
  </div>
</template>

<script>
import Home from "./components/Home";
import BrowserLanguageConfigurator from "./components/BrowserLanguageConfigurator";
import FormFieldConfigurator from "./components/FormFieldConfigurator";

export default {
  name: "App",
  components: {
    Home,
    BrowserLanguageConfigurator,
    FormFieldConfigurator
  },
  computed: {
    username() {
      // We will see what `params` is shortly
      return this.$route.params.username;
    }
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    }
  }
};
</script>

<style>
/*
 * Globals
 */

.app {
  width: 100%;
  height: 100%;
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
  width: 100%;
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
  /* color: rgba(255, 255, 255, 0.5); */
  background-color: transparent;
  border-bottom: 0.25rem solid transparent;
}

.router-link-exact-active {
  color: rgba(255, 255, 255, 0.5);
  border-bottom-color: rgba(255, 255, 255, 0.25);
}

.nav-masthead .nav-link + .nav-link {
  margin-left: 1rem;
}

.nav-masthead {
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
