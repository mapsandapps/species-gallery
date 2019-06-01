<template>
<div :class="`size-${size}`">
  <img :src="src">
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
      return `http://atlnature-lambda.s3-website.us-east-1.amazonaws.com/${this.size}x${this.size}/${this.photo.filename}`
    }
    // srcset() {
    //   return `https://gy8ko6xb5k.execute-api.us-east-1.amazonaws.com/image/fit-in/${this.size}x${this.size}/filters:format(webp):quality(60)/photos/${this.photo.filename} 1x, https://gy8ko6xb5k.execute-api.us-east-1.amazonaws.com/image/fit-in/${this.size * 2}x${this.size * 2}/filters:format(webp):quality(60)/photos/${this.photo.filename} 2x`
    // }
  }
};
</script>

<style lang="scss">
@media (max-width: 440px) {
  .size-800 {
    max-width: calc(100vw - 64px);
    img {
      max-width: calc(100vw - 64px);
    }
    .species & {
      max-width: calc(100vw - 32px);
      img {
        max-width: calc(100vw - 32px);
      }
    }
  }
}
</style>
