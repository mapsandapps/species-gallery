<template>
<g-link
  :to="`/species-gallery/species/${species.id}`">
  <figure class="species-gallery-entry">
    <Photo
      v-if="species.featuredPhoto"
      :photo="species.featuredPhoto"
      size=300 />
    <figcaption>
      <div
        v-if="species.commonName"
        class="common-name">
        {{ species.commonName }}
      </div>
      <div class="scientific-name">
        {{ species.scientificName}}
      </div>
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
@import '../styles/variables';

.species-gallery-entry {
  max-width: 300px;
  display: inline-block;
  padding: 16px;
  margin: 0px;
  &:hover {
    background-color: $purple-20;
    figcaption {
      text-decoration: underline;
    }
  }
  img {
    max-width: 300px;
    max-height: 300px;
    box-shadow: 0px 2px 4px 0px rgba($purple-90, 0.2);
  }
  .common-name {
    font-weight: $book-weight;
    font-size: 30px;
  }
  .scientific-name {
    font-weight: $book-weight;
    font-size: 24px;
  }
}
</style>
