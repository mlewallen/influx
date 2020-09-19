<template>
  <v-main class="badge-content">
    <DrawerBadge />
    <v-container fluid>
      <v-row justify="center" align="center">
        <v-col cols="12" sm="12" md="10" lg="9" class="d-flex flex-column justify-center text-center">
          <v-toolbar flat style="background: transparent;" class="px-0 mx-0">
            <v-toolbar-title class="pa-0">Badge Preview</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn
              text
              color="primary"
              @click.stop="
                $store.state.dialog.badge = !$store.state.dialog.badge
              "
            >
              Need help?
              <v-icon right>mdi-information-outline</v-icon>
            </v-btn>
          </v-toolbar>
          
          <BadgePreview class="preview" />

          
        </v-col>
      </v-row>
      
      <dialog-badge />
      
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
import BadgePreview from "../components/BadgePreview";
import DrawerBadge from "../components/DrawerBadge";
import DialogBadge from "../components/DialogBadge";

export default {
  name: "Badge",
  components: {
    BadgePreview,
    DrawerBadge,
    DialogBadge
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

<style lang="scss">

.badge-content {

  .v-main__wrap {
    display: flex;
    align-items: flex-start;
  }
}

.preview {
  margin: 24px auto;
}

</style>