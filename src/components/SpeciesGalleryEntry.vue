<template>
  <figure>
    <Photo
      v-if="species.featuredPhoto"
      :photo="species.featuredPhoto" />
    <figcaption>
      {{ species.commonName }}<br>
      {{ species.scientificName}}
    </figcaption>
  </figure>
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
  },
  data() {
    return {
    };
  },
  computed: {
  },
  methods: {
  },
  mounted() {
  }
};
</script>

<style lang="scss" scoped>
</style>
