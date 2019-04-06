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
      default: 300,
      required: false,
      type: String
    }
  },
  computed: {
    src() {
      return `https://gy8ko6xb5k.execute-api.us-east-1.amazonaws.com/image/fit-in/${this.size}x${this.size}/filters:quality(90)/photos/${this.photo.filename}`
    },
    srcset() {
      return `https://gy8ko6xb5k.execute-api.us-east-1.amazonaws.com/image/fit-in/${this.size}x${this.size}/filters:format(webp):quality(90)/photos/${this.photo.filename} 1x, https://gy8ko6xb5k.execute-api.us-east-1.amazonaws.com/image/fit-in/${this.size * 2}x${this.size * 2}/filters:format(webp):quality(90)/photos/${this.photo.filename} 2x`
    }
  }
};
</script>

<style lang="scss" scoped>
img {
  max-width: 400px;
}
</style>
