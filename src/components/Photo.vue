<template>
<div>
  <img :src="photoURL">
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
      default: 'small',
      required: false,
      type: String
    }
  },
  data() {
    return {
      flickrSizes: {
        square: 'q',
        small: 'm',
        medium: 'z'
      }
    }
  },
  computed: {
    photoURL() {
      if (this.photo.url) {
        return this.photo.url
      } else if (this.photo.flickrSlug) {
        var size = 'm'
        return `https://farm2.staticflickr.com/${this.photo.flickrSlug}_${this.flickrSizes[this.size]}_d.jpg`
      }
    }
  }
};
</script>

<style lang="scss" scoped>
img {
  max-width: 240px;
}
</style>
