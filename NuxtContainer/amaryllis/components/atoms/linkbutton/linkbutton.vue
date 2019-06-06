<template>
  <div>
    <img :src="img_src" @click="onLinkClick" />
  </div>
</template>
<script>
export default {
  props: {
    imageSrc: {
      type: String,
      default: ""
    },
    linkUrl: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      img_src: this.imageSrc,
      url: this.linkUrl
    };
  },
  methods: {
    onLinkClick() {
      window.location.href = this.linkUrl;
    }
  }
};
</script>
