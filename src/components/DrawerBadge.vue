<template>
  <v-navigation-drawer
    v-model="$store.state.drawer"
    :width="viewportWidth > 900 ? '360' : '100%'"
  >
    <div class="d-flex flex-row justify-space-between align-center px-4 py-4 ">
      <span class="text-h6">Badge Creator</span>
      <v-chip label x-small color="gray" class="px-1">V1.0</v-chip>
    </div>
    <v-divider></v-divider>
    <v-form>
      <v-container>
        <v-row class="pa-4">
          <v-col cols="12">
            <h4 class="subtitle mb-4">Customize your badge</h4>

            <v-text-field label="Select Employee Image" placeholder="Click to upload" @click="pickFile" v-model="user.imgName"></v-text-field>
            <input
              type="file"
              style="display: none"
              ref="image"
              accept="image/*"
              @change="setUserImage"
            >
            <v-text-field label="First Name" v-model="user.first" placeholder="John"></v-text-field>
            <v-text-field label="Last Name" v-model="user.last" placeholder="Smith"></v-text-field>
            <v-text-field label="Title" v-model="user.title" placeholder="Designer"></v-text-field>
            <v-text-field label="Location" v-model="user.location" placeholder="Washington, D.C."></v-text-field>
            <v-menu
              ref="datePickerMenu"
              v-model="datePickerMenu"
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
                  persistent-hint
                  v-bind="attrs"
                  @blur="date = parseDate(dateFormatted)"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="user.date" no-title @input="datePickerMenu = false"></v-date-picker>
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
      drawer: true,
      datePickerMenu: false
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
    pickFile() {
      this.$refs.image.click()
    },
    setUserImage (e) {
      console.log('before')
      this.createImage(e.target.files[0]);
      this.user.imgName = e.target.files[0].name;
      console.log('after')
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
