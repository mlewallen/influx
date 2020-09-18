<template>
  <v-navigation-drawer
    v-model="$store.state.drawer"
    :width="viewportWidth > 900 ? '360' : '100%'"
  >
    <div class="d-flex flex-row justify-space-between align-center px-4 py-4 ">
      <span class="text-h6">Email Signature</span>
      <v-chip label x-small color="gray" class="px-1">V2.0</v-chip>
    </div>
    <v-divider></v-divider>
    <v-form>
      <v-container>
        <v-row class="pa-4">
          <v-col cols="12">
            <h4 class="subtitle mb-4">Customize your signature</h4>
            <v-text-field
              v-model="signOff"
              label="Sign Off"
              placeholder="Best,"
            ></v-text-field>
            <v-text-field
              v-model="signOffName"
              label="Sign Off Name"
              placeholder="Nickname"
            ></v-text-field>
            <v-text-field
              v-model="name"
              label="Name"
              placeholder="First Last"
            ></v-text-field>
            <v-text-field
              v-model="certs"
              label="Certifications"
              placeholder="CISSP, Security+ (Optional)"
            ></v-text-field>
            <v-text-field
              v-model="title"
              label="Title"
              placeholder="Your Title"
            ></v-text-field>
            <v-text-field
              v-model="email"
              label="Email"
              placeholder="name@company.com"
            ></v-text-field>
            <v-text-field
              v-model="mobile"
              label="Mobile"
              placeholder="Mobile Phone (Optional)"
            ></v-text-field>
            <v-text-field
              v-model="office"
              label="Office"
              placeholder="Office Phone (Optional)"
            ></v-text-field>
            <v-btn
              v-if="viewportWidth < 900"
              large
              block
              color="primary"
              class="my-4"
              @click="$store.state.drawer = false"
              >Review Your Signature
              <v-icon small right>mdi-arrow-right</v-icon></v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'DrawerSignature',
  data() {
    return {
      drawer: true
    };
  },
  computed: {
    viewportWidth: function() {
      return window.innerWidth;
    },
    signOff: {
      get() {
        return this.$store.state.signOff;
      },
      set(value) {
        this.$store.commit("updateSignOff", value);
      }
    },
    signOffName: {
      get() {
        return this.$store.state.signOffName;
      },
      set(value) {
        this.$store.commit("updateSignOffName", value);
      }
    },
    name: {
      get() {
        return this.$store.state.name;
      },
      set(value) {
        this.$store.commit("updateName", value);
      }
    },
    certs: {
      get() {
        return this.$store.state.certs;
      },
      set(value) {
        this.$store.commit("updateCerts", value);
      }
    },
    title: {
      get() {
        return this.$store.state.title;
      },
      set(value) {
        this.$store.commit("updateTitle", value);
      }
    },
    mobile: {
      get() {
        return this.$store.state.mobile;
      },
      set(value) {
        this.$store.commit("updateMobile", value);
      }
    },
    office: {
      get() {
        return this.$store.state.office;
      },
      set(value) {
        this.$store.commit("updateOffice", value);
      }
    },
    email: {
      get() {
        return this.$store.state.email;
      },
      set(value) {
        this.$store.commit("updateEmail", value);
      }
    }
  }
};
</script>
