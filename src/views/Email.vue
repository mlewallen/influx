<template>
  <v-main class="email-content">

    <DrawerSignature />

    <v-container fluid>
      <v-row class="justify-center">
        <v-col cols="12" sm="12" md="10" lg="9">
          <v-toolbar flat style="background: transparent;" class="px-0 mx-0">
            <v-btn icon class="d-none">
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <v-toolbar-title class="pa-0">Signature Preview</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn
              text
              color="primary"
              @click.stop="$store.state.dialog.email = !$store.state.dialog.email"
            >
              Need help?
              <v-icon right>mdi-information-outline</v-icon>
            </v-btn>
          </v-toolbar>
          
          <PreviewEmail class="preview" />

          <div class="text-center mb-4 pb-4">
            <transition name="fade" mode="out-in">
              <v-btn
                v-if="$store.state.copied !== true"
                :disabled="hasSignature"
                color="primary"
                large
                @click="copyEmailSignature"
              >
                Copy Signature
                <v-icon right small>mdi-content-copy</v-icon>
              </v-btn>
              <v-btn
                v-else
                color="primary"
                large
                href="https://mail.google.com/mail/u/0/?tab=mm#settings/general"
                target="_blank"
              >
                Open Gmail Settings
                <v-icon right small>mdi-launch</v-icon>
              </v-btn>
            </transition>
          </div>
        </v-col>
      </v-row>
      
      <dialog-email />
      
      <v-snackbar elevation="24" color="primary" v-model="$store.state.copied" top>
        Signature copied!
        <template v-slot:action="{ attrs }">
          <v-btn
            text
            v-bind="attrs"
            @click="$store.state.copied = false"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>
      
      <v-btn
        v-show="!$store.state.drawer"
        color="primary"
        dark
        fixed
        bottom
        right
        fab
        @click="$store.state.drawer = true"
      >
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </v-container>
  </v-main>
</template>

<script>
import PreviewEmail from "../components/PreviewEmail";
import DrawerSignature from "../components/DrawerSignature";
import DialogEmail from "../components/DialogEmail";

export default {
  name: "Email",
  components: {
    PreviewEmail,
    DrawerSignature,
    DialogEmail
  },
  computed: {
    hasSignature: function() {
      return this.$store.state.name !== "" ? false : true;
    }
  },
  methods: {
    copyEmailSignature () {
      let signatureCode = document.getElementById('emailSignatureCode');
      let code = signatureCode;

      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(code);
      selection.removeAllRanges();
      selection.addRange(range);

      try {
        document.execCommand('copy');
        selection.removeAllRanges();
        this.$store.state.copied = true
      } catch(e) {
        alert('Oops! Looks like something went wrong and we couldn\'t copy your signature -_-')
      }
    }
  }
};
</script>

<style lang="stylus">

.email-content {

  .v-main__wrap {
    display: flex;
    align-items: flex-start;
    margin-top: 64px;
  }

  .email {
    margin-top: 24px;
  }
}
</style>