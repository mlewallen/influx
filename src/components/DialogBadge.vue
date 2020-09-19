<template>
  <v-dialog v-model="$store.state.dialog.badge" max-width="600">
    <v-card>
      <v-card-title class="headline">Badge Creator Instructions</v-card-title>
      <v-card-text>
        <ol style="padding: 16px 32px;">
          <li>Make sure you fill in all of the fields in the <strong>Customize Your Badge</strong> form.</li>
          <li>Make sure you review the <strong>Badge Preview</strong> to make sure everything looks right.</li>
          <li>If there are any changes needed, just update the form to the left, then you're ready to download!</li>
        </ol>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          text
          @click="$store.state.dialog.badge = !$store.state.dialog.badge"
        >
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "DialogBadge",
};
</script>
