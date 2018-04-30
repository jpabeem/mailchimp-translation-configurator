<template>
  <div class="browser-language-configurator">
    
    <h3>{{ steps[this.currentStep-1] }}</h3>
    <div class="input-group sm-3">
      <v-select v-model="selected" label="language" :options="languages">
        <slot name="no-options">Sorry, no matching options.</slot>
      </v-select>
      <div class="input-group-append">
        <button @click.prevent="addLanguage" v-bind:class="{ disabled: selected === null}" class="btn btn-primary" type="button">Add</button>
      </div>
    </div>
    <br>

    <table class="table table-hover">
      <thead>
          <tr>
            <th>Language</th>
            <th>Code</th>
            <th>Translated</th>
            <th>Action</th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="(item, index) in selectedLanguages">
            <td>{{ item.language }} {{ isPrimaryLanguage(item) ? " (primary language)" : "" }}</td>
            <td>{{ item.code }}</td>
            <td><i class="fa fa-pencil" aria-hidden="true"></i></td>
            <td>
              <template v-if="isPrimaryLanguage(item)">
                <button @click.prevent="deleteLanguage(item)" type="button" class="btn btn-outline-danger">Delete</button>
              </template>
              <template v-else>
                <button @click.prevent="makePrimaryLanguage(item)" type="button" class="btn btn-primary">Make primary</button>
                <button @click.prevent="deleteLanguage(item)" type="button" class="btn btn-outline-danger">Delete</button>
              </template>
            </td>
          </tr>
      </tbody>
    </table>

    <template v-if="this.currentStep >= 2">
      <br>
      <button class="btn btn-lg btn-primary" type="button">
        <i class="fa fa-flag-checkered" aria-hidden="true"></i> Finish
      </button>
    </template>

    <ul v-if="errors && errors.length">
    <li v-bind:key="error" v-for="error of errors">
      {{error}}
    </li>
  </ul>
  </div>
</template>

<script>
import axios from "axios";
import vSelect from "vue-select";

export default {
  name: "BrowserLanguageConfigurator",
  data() {
    return {
      steps: [
        "Pick your primary language (fall back language)",
        "Pick your alternative language(s)"
      ],
      languages: [],
      selectedLanguages: [],
      primaryLanguage: [],
      errors: [],
      dataIsLoaded: false,
      currentStep: 1,
      selected: null
    };
  },
  methods: {
    addLanguage() {
      if (this.selected === null) {
        return;
      }
      if (!this.selectedLanguages.includes(this.selected)) {
        if (this.currentStep === 1) {
          this.primaryLanguage = this.selected;
          this.currentStep++;
        }
        this.selectedLanguages.push(this.selected);
      } else {
        alert("You can't add a duplicate language.");
      }
      this.selected = null;
    },
    isPrimaryLanguage(language) {
      return language === this.primaryLanguage;
    },
    makePrimaryLanguage(language) {
      this.primaryLanguage = language;
    },
    deleteLanguage(language) {
      if (language === this.primaryLanguage && this.selectedLanguages.length >= 2) {
        alert("You can't delete the primary language in the current state, try again after marking another language as primary.");
        return;
      }
      this.selectedLanguages.splice(this.selectedLanguages.indexOf(language), 1);
      if (this.selectedLanguages.length < 1) {
        this.primaryLanguage = null;
        this.currentStep = 1;
      }
    }
  },
  computed: {
    hasPrimaryLanguage() {
      return this.primaryLanguage !== null;
    }
  },
  created() {
    //check if local storage contains data already
    const data = localStorage.getItem("languageCodes");
    if (data) {
      this.languages = JSON.parse(data);
      this.dataIsLoaded = true;
    }
    if (!this.dataIsLoaded) {
      axios
        .get(`https://api.jsonbin.io/b/5ae6fdf9c2e3344ccd966548/1`)
        .then(response => {
          console.log(response.data.data);
          this.languages = response.data.data;
          localStorage.setItem(
            "languageCodes",
            JSON.stringify(response.data.data)
          );
        })
        .catch(e => {
          this.errors.push(`Oops... Something went wrong!\n${e}`);
          console.log("Oops... Something went wrong!");
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dropdown-toggle {
  background: black !important;
}
.v-select {
  /* width: 87%; */
  width: 100%;
  background: whitesmoke;
  /* border-radius: 3px; */
}
.disabled {
  cursor: not-allowed;
}
.selected-tag {
  font-family: "Segoe UI";
}
.picked-languages {
  background: #F1ECE9;
}
</style>
