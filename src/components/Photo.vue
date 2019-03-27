<template>
<div>
  <img :src="src" :srcset="srcset" :class="size">
</div>
</template>

<script>
export default {
  name: 'Photo',
  props: {
    photo: {
      required: true,
      type: Object
    },
    size: {
      default: 't400',
      required: false,
      type: String
    }
  },
  computed: {
    src() {
      return `http://res.cloudinary.com/atlnature/image/upload/${this.size}/${this.photo.cloudinarySlug}.jpg`
    },
    srcset() {
      return `http://res.cloudinary.com/atlnature/image/upload/${this.size}/${this.photo.cloudinarySlug}.jpg 1x, http://res.cloudinary.com/atlnature/image/upload/${this.size}@2x/${this.photo.cloudinarySlug}.jpg 2x`
    }
  }
};
</script>

<style lang="scss" scoped>
img {
  max-width: 400px;
}
</style>
