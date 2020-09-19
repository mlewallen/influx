<template>
  <v-dialog v-model="$store.state.dialog.email" max-width="600">
    <v-card>
      <v-card-title class="headline">Gmail Signature Instructions</v-card-title>
      <v-card-text>
        <ol style="padding: 16px 32px;">
          <li>
            Copy the signature you created by clicking the
            <strong>‘Copy Signature’</strong> button
            <ul
              v-show="$store.state.name !== ''"
              style="margin: 8px 16px 16px;"
            >
              <li>
                If you've already created your signature and are happy with it,
                you can copy it below:
                <div class="d-block mb-4"></div>
                <v-btn color="primary" @click="copyEmailSignature(true)"
                  >Copy Signature
                  <v-icon right small>mdi-content-copy</v-icon>
                </v-btn>
              </li>
            </ul>
          </li>
          <li>
            Click the <strong>‘Open Gmail Settings’</strong> button in the top
            right corner to open up you <strong>Gmail Settings</strong>
            <ul style="margin: 8px 16px 16px;">
              <li>
                If you've copied your signature already you can open your
                <a
                  href="https://mail.google.com/mail/u/0/?tab=mm#settings/general"
                  target="_blank"
                  class="button is-info is-small"
                  >Gmail Settings</a
                >.
              </li>
            </ul>
          </li>
          <li>
            In your <strong>Gmail Settings</strong>, scroll down to the
            <strong>Signature</strong> section
          </li>
          <li>
            Paste the copied signature directly into the
            <strong>Edit Signature</strong> section (Ctrl/Cmd + V)
          </li>
          <li>
            Scroll to the bottom of the Settings page and click
            <strong>Save Changes</strong>
          </li>
        </ol>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          text
          @click="$store.state.dialog.email = !$store.state.dialog.email"
        >
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "DialogEmail",
};
</script>
