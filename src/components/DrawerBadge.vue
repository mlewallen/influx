<template>
  <v-navigation-drawer
    v-model="$store.state.drawer"
    :width="viewportWidth > 900 ? '360' : '100%'"
  >
    <div class="d-flex flex-row justify-space-between align-center px-4 py-4 ">
      <span class="text-h6">Badge Creater</span>
      <v-chip label x-small color="gray" class="px-1">V1.0</v-chip>
    </div>
    <v-divider></v-divider>
    <v-form>
      <v-container>
        <v-row class="pa-4">
          <v-col cols="12">
            <h4 class="subtitle mb-4">Customize your badge</h4>

            <v-file-input
              label="Employee Image"
              @v-on:change="setUserImage"
              id="image-upload"
            >
            </v-file-input>
            <v-text-field label="First Name" v-model="user.first"></v-text-field>
            <v-text-field label="Last Name" v-model="user.last"></v-text-field>
            <v-text-field label="Title" v-model="user.title"></v-text-field>
            <v-text-field label="Location" v-model="user.location"></v-text-field>
            <v-menu
              ref="menu1"
              v-model="menu1"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="user.date"
                  label="Hire Date"
                  hint="MM/DD/YYYY format"
                  persistent-hint
                  v-bind="attrs"
                  @blur="date = parseDate(dateFormatted)"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="user.date" no-title @input="menu1 = false"></v-date-picker>
            </v-menu>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'DrawerBadge',
  data() {
    return {
      drawer: true
    };
  },
  computed: {
    viewportWidth: function() {
      return window.innerWidth;
    },
    user () {
      return this.$store.state.userData;
    }
  },
  methods: {
    setUserImage (e) {
      this.createImage(e.target.files[0]);
    },
    createImage(file) {
      var reader = new FileReader();

      reader.onload = (e) => {
        this.user.img = e.target.result;
      };
      let newImage = reader.readAsDataURL(file);
      this.user.img = newImage;
    },
  }
};
</script>
