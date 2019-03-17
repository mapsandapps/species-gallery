<template>
  <figure>
    <img v-if="species.featuredPhoto"
      :src="species.featuredPhoto.url">
    <figcaption>
      {{ species.commonName }}<br>
      {{ species.scientificName}}
    </figcaption>
  </figure>
</template>

<script>
export default {
  name: 'SpeciesGalleryEntry',
  components: {
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
img {
  max-width: 200px;
}
</style>
