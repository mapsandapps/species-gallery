<template>
<div>
  <img v-if="photo && photo.url"
    class="local"
    :src="photo.url">
  <img v-if="photo && photo.flickrSlug"
    class="flickr"
    :src="`https://farm2.staticflickr.com/${photo.flickrSlug}_m_d.jpg`">
</div>
</template>

<script>
export default {
  name: 'Photo',
  props: {
    photo: {
      required: true,
      type: Object
    }
  }
};
</script>

<style lang="scss" scoped>
img.local {
  max-width: 200px;
}
img.flickr {
  max-width: 240px;
}
</style>
