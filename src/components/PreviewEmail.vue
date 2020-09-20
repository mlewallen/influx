<template>
  <div class="email">
    <div
      class="window-bar grey darken-4 d-flex align-center pa-2 px-4"
    >
      <div class="dot error mr-2 pa-1"></div>
      <div class="dot warning mr-2 pa-1"></div>
      <div class="dot success mr-2 pa-1"></div>
    </div>
    <div class="email__section header white primary--text d-flex justify-start">
      <v-icon class="mr-2 primary--text">mdi-email-plus</v-icon> New Email
    </div>
    <div class="email__section to d-flex align-center">
      <v-chip
        label
        small
        class="primary white--text font-weight-bold px-2 mr-2"
        >To</v-chip
      >
      John Smith
    </div>
    <div class="email__section subject d-flex align-center">
      <v-chip
        label
        small
        class="grey lighten-3 grey--text text--darken-1 font-weight-bold px-2 mr-2"
        >Subject</v-chip
      >
      Check out my new IronNet email signature!
    </div>
    <div class="email__section body">
      Hi John,
      <br />
      <br />
      Check out my new amazing IronNet themed email signature!
      <div class="signatureWrapper" id="emailSignatureCode">
        <table
          width="100%"
          style="margin: 24px 0px 0px; font-family: Arial, sans-serif; font-size: 16px; line-height: 18px;"
        >
          <tr v-if="signOff !== ''">
            <td
              style="padding-bottom: 16px; color: #0E203D; font-size: 14px;"
            >
              <p style="margin-bottom: 0;">
                {{ signOff }}<br />{{ signOffName }}
              </p>
            </td>
          </tr>
          <tr
            style="border-bottom: 1px solid #E7E8EA; box-sizing: border-box; padding-bottom: 16px;"
          >
            <td class="signature">
              <ul
                style="margin: 0; padding: 0; text-align: left; list-style: none;"
              >
                <li
                  v-if="name === ''"
                  style="font-size: 20px; color: #0E203D;"
                >
                  Your Name
                </li>
                <li v-else style="font-size: 20px; color: #0E203D;">
                  {{ name
                  }}<span v-if="certs !== ''" class="certs"
                    >, {{ certs }}</span
                  >
                </li>
                <li
                  v-if="title === ''"
                  style="font-size: 14px; color: #818B99; margin-top: 4px;"
                >
                  Your Title Here
                </li>
                <li
                  v-else
                  style="font-size: 14px; color: #818B99; margin-top: 4px;"
                >
                  {{ title }}
                </li>
              </ul>
              <table
                style="margin: 16px 0; font-size: 14px; color: #818B99;"
              >
                <tr v-if="email !== ''">
                  <td style="padding-bottom: 4px;">Email:</td>
                  <td style="padding-bottom: 4px; padding-left: 8px;">
                    <a
                      :href="'mailto:' + email"
                      style="color: #2B8EE5; text-decoration: none !important;"
                      >{{ email }}</a
                    >
                  </td>
                </tr>
                <tr v-if="mobile !== ''">
                  <td style="padding-bottom: 4px;">Mobile:</td>
                  <td style="padding-bottom: 4px; padding-left: 8px;">
                    <a
                      :href="'tel:' + mobile.replace(/[- )(]/g, '')"
                      style="color: #2B8EE5; text-decoration: none !important;"
                      >{{ mobile }}</a
                    >
                  </td>
                </tr>
                <tr v-if="office !== ''">
                  <td style="padding-bottom: 4px;">Office:</td>
                  <td style="padding-bottom: 4px; padding-left: 8px;">
                    <a
                      :href="'tel:' + office.replace(/[- )(]/g, '')"
                      style="color: #2B8EE5; text-decoration: none !important;"
                      >{{ office }}</a
                    >
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr
            style="border-bottom: 1px solid #E7E8EA; box-sizing: border-box; padding-bottom: 16px;"
          >
            <td>
              <ul
                style="margin: 16px 0 12px; padding: 0; text-align: left; list-style: none; display: table;"
              >
                <li
                  style="display: table-cell; vertical-align: middle; padding-right: 16px;"
                >
                  <a
                    href="https://www.ironnet.com"
                    target="_blank"
                    style="text-decoration: none !important; display: inline-block;"
                    ><img
                      src="https://www.ironnet.com/hs-fs/hubfs/ironnet-logo.png?width=304&name=ironnet-logo.png"
                      width="150px"
                  /></a>
                </li>
                <li
                  style="display: table-cell; vertical-align: middle; padding-left: 16px; border-left: 1px solid #E7E8EA;"
                >
                  <a
                    style="color: #2B8EE5 !important; text-decoration: none !important; font-size: 14px;"
                    href="https://goo.gl/maps/pXtZ2RTPTSbNoG6p8"
                    target="_blank"
                    >8135 Maple Lawn Blvd, Fulton, MD 20759</a
                  >
                </li>
              </ul>
            </td>
          </tr>
        </table>
      </div>
      <p style="font-size: 12px; margin-top: 24px; color: #818B99;">
        This message is intended exclusively for the individual(s) or
        entity to which it is addressed. It may contain information that
        is privileged or otherwise legally exempt from disclosure. If you
        are not the named addressee, you are not authorized to read,
        print, retain, copy or disseminate this message or any part of it.
        If you have received this message in error, please notify the
        sender immediately by e-mail and delete all copies of the message.
      </p>
      <p
        style="font-size: 12px; margin-top: 16px; margin-bottom: 0; color: #818B99;"
      >
        Any digital signatures or certifications transmitted with this
        email are for sender verification purposes only and have not been
        included in this email for the purposes of binding the company to
        any statement or attachment made herein or for any other purpose.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "EmailPreview",
  computed: {
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
.email {
  box-shadow: 0 2px 10px rgba(10,10,10,.1);
  margin-bottom: 24px;

  .window-bar {
    border-radius: 0;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    
    .dot {
      border-radius: 8px;
    }
  }

  .email__section {
    padding: 16px;
    
    &.header {
      color: white;
      font-weight: bold;
    }

    &.to, &.subject {
      background-color: white;
      border-top: 1px solid rgba(0,0,0,.05);
      border-bottom: 1px solid rgba(0,0,0,.05);
    }

    &.body {
      border-bottom-right-radius: 4px;
      border-bottom-left-radius: 4px;
      background-color: white;
    }

    &.to, &.subject, &.body {
      font-size: 14px;
    }
  }
}

</style>