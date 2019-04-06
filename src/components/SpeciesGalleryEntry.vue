<template>
<g-link
  :to="`/species-gallery/species/${species.id}`">
  <figure class="species-gallery-entry">
    <Photo
      v-if="species.featuredPhoto"
      :photo="species.featuredPhoto"
      size=300 />
    <figcaption>
      {{ species.commonName }}<br>
      {{ species.scientificName}}
    </figcaption>
  </figure>
</g-link>
</template>

<script>
import Photo from './Photo'

export default {
  name: 'SpeciesGalleryEntry',
  components: {
    Photo
  },
  props: {
    species: {
      required: true,
      type: Object
    }
  }
};
</script>

<style lang="scss">
.species-gallery-entry {
  max-width: 300px;
  display: inline-block;
  padding: 16px;
  margin: 0px;
  &:hover {
    background-color: #f5f0fa;
    figcaption {
      text-decoration: underline;
    }
  }
  img {
    max-width: 300px;
    max-height: 300px;
  }
}
</style>
