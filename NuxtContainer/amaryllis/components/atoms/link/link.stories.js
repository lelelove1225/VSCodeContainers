import { storiesOf } from "@storybook/vue";

import link from "./link.vue";

storiesOf("Atoms", module).add("link", () => ({
  components: { link },
  template: `<link />`
}));
