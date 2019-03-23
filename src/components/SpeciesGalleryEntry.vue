<template>
<g-link
  :to="`/species/${species.id}`">
  <PhotoWithCaption :photo="species.featuredPhoto">
    {{ species.commonName }}<br>
    {{ species.scientificName}}
  </PhotoWithCaption>
</g-link>
</template>

<script>
import PhotoWithCaption from './PhotoWithCaption'

export default {
  name: 'SpeciesGalleryEntry',
  components: {
    PhotoWithCaption
  },
  props: {
    species: {
      required: true,
      type: Object
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
