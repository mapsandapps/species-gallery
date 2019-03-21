<template>
  <figure>
    <img v-if="species.featuredPhoto && species.featuredPhoto.url"
      class="local"
      :src="species.featuredPhoto.url">
    <img v-if="species.featuredPhoto && species.featuredPhoto.flickrSlug"
      class="flickr"
      :src="`https://farm2.staticflickr.com/${species.featuredPhoto.flickrSlug}_m_d.jpg`">
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
img.local {
  max-width: 200px;
}
img.flickr {
  max-width: 240px;
}
</style>
