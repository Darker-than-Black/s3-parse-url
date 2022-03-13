<template>
  <div class="dark-tooltip">
    <b-button
      v-tooltip="{
        shown,
        container: '.dark-tooltip',
        content: popupText,
        triggers: ['click'],
      }"
      variant="outline-primary"
      @click="copyToClipboard"
    >
      <slot />
    </b-button>
  </div>
</template>

<script>
import {copyToClipboard} from "../utils/utils";

const ONE_SECOND = 1000;

export default {
  name: "CopyToClipboard",
  props: {
    content: {
      type: String,
      required: true,
    },
    popupText: {
      type: String,
      default: 'URL зкопійовано',
    },
  },
  data: () => ({
    shown: false,
  }),
  methods: {
    async copyToClipboard() {
      this.shown = true;
      await copyToClipboard(this.content);
      setTimeout(() => this.shown = false, ONE_SECOND);
    }
  },
}
</script>