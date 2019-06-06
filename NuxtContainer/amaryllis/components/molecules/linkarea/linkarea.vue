<template>
  <div>
    <linkbutton :image-src="imageSrc" />
  </div>
</template>

<script>
import linkbutton from "../../atoms/linkbutton/linkbutton.vue";
export default {
  components: {
    linkbutton
  },
  data() {
    return {
      imageSrc: ""
    };
  }
};
</script>

<style scoped>
div {
  background-color: maroon;
  padding-top: 1.5vh;
}
</style>
