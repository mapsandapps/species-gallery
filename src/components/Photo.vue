<template>
<div :class="`photo-container size-${size}`">
  <img :src="src">
  <div v-if="showingTooltip" class="tooltip">
    <img src="../../static/icons/map-marker.svg" />
    <div><b>Location:</b> {{ location }}</div>
    <img src="../../static/icons/calendar.svg" />
    <div><b>Date:</b> {{ photo.captureInfo.date }}</div>
    <img v-if="photo.captureInfo.truthInCaptioning" src="../../static/icons/comment.svg" />
    <div v-if="photo.captureInfo.truthInCaptioning"><b>Info:</b> {{ photo.captureInfo.truthInCaptioning }}</div>
    <img src="../../static/icons/license.svg" />
    <div><b>License:</b> {{ license }}</div>
  </div>
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
    showingTooltip: {
      default: false,
      required: false,
      type: Boolean
    },
    size: {
      default: 300,
      required: false,
      type: String
    }
  },
  computed: {
    license() {
      if (this.photo.captureInfo.photographer === 'Shawn Taylor') {
        return 'Creative Commons Attribution 4.0, photo by Shawn Taylor, ATLnature'
      } else {
        return `${this.photo.captureInfo.photographer}, all rights reserved`
      }
    },
    location() {
      let locationString = ''
      if (this.photo.captureInfo.location) {
        locationString += `${this.photo.captureInfo.location}, `
      }
      if (this.photo.captureInfo.city) {
        locationString += `${this.photo.captureInfo.city}, `
      }
      if (this.photo.captureInfo.county) {
        locationString += `${this.photo.captureInfo.county} County, `
      }
      locationString += this.photo.captureInfo.state || 'GA'
      // TODO
      return locationString
    },
    src() {
      return `http://atlnature-lambda.s3-website.us-east-1.amazonaws.com/${this.size}x${this.size}/${this.photo.filename}`
    }
  }
};
</script>

<style lang="scss">
@import '../styles/variables';

.photo-container {
  position: relative;
  .tooltip {
    margin: 0 auto;
    width: calc(800px - 14px - 16px * 2);
    height: calc(100% - 14px - 16px * 2);
    position: absolute;
    top: 0px;
    left: calc(50vw - 400px - 16px);
    border: 7px solid $purple-90;
    padding: 16px;
    background-color: hsla(0, 0%, 100%, 0.8);
    font-size: 30px;
    color: $purple-90;
    text-align: left;
    display: grid;
    grid-template-columns: 50px 1fr;
    grid-column-gap: 24px;
  }
}

@media (max-width: 864px) {
  .photo-container .tooltip {
    width: calc(100% - 14px - 16px * 2);
    left: 0;
    font-size: 3.6vw; // 24
    grid-column-gap: 1.85vw; // 16
    grid-template-columns: 3.7vw 1fr; // 32
    img {
      width: 3.7vw;
    }
  }
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
