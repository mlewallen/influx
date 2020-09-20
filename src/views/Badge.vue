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
              @click.stop="$store.state.dialog.badge = !$store.state.dialog.badge"
            >
              Need help?
              <v-icon right>mdi-information-outline</v-icon>
            </v-btn>
          </v-toolbar>
          
          <PreviewBadge class="preview" />

          <div class="text-center mb-4 pb-4">
            <v-btn large :disabled="hasUserInfo" @click.prevent="createCanvas" color="primary">Download Badge <v-icon right small>mdi-download-outline</v-icon></v-btn>
          </div>
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
import html2canvas from "html2canvas";
import PreviewBadge from "../components/PreviewBadge";
import DrawerBadge from "../components/DrawerBadge";
import DialogBadge from "../components/DialogBadge";

export default {
  name: "Badge",
  components: {
    PreviewBadge,
    DrawerBadge,
    DialogBadge
  },
  computed: {
    user: function () {
      return this.$store.state.userData
    },
    hasUserInfo () {
      return (this.user.img && this.user.first && this.user.last && this.user.title && this.user.location && this.user.date) == '' ? true : false
    }
  },
  methods: {
    createCanvas: function () {
      var image = document.getElementById("print");
      html2canvas(image, {
        allowTaint: true,
        height: 505.5,
        width: 318.75
      }).then(canvas => {
        let fileName = "badge--" + this.$store.state.userData.first + '-' + this.$store.state.userData.last;
        this.saveAs(canvas.toDataURL("image/png"), fileName);      
        this.$store.state.dialog = true  
      });
    },
    saveAs: function (uri, filename) {
      var link = document.createElement('a');
      if (typeof link.download === 'string') {
        link.href = uri;
        link.download = filename;

        if (this.iOS) {
          alert("Instructions...");
          link.target = "_blank";
          link.href = uri
        } else {
          link.href = uri.replace(/^data[:]image\/png[;]/i, "data:application/download;");//force download
        } 
        //Firefox requires the link to be in the body
        document.body.appendChild(link);
        //simulate click
        link.click();
        //remove the link when done
        document.body.removeChild(link);
      } else {
          window.open(uri);
      }
    }
  }
};
</script>

<style lang="stylus">

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