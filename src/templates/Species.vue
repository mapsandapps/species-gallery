<template>
<Layout>
  <h1>{{ $page.species.commonName }}</h1>
  <h2>{{ $page.species.scientificName }}</h2>
  <figure
    v-for="photo in $page.species.photos"
    v-bind:key="photo.id">
    <Photo
      v-if="photo"
      :photo="photo"
      size=800 />
    <figcaption>
      {{ photo.annotations.sex }} {{ photo.annotations.stage }} {{ $page.species.commonName }} at {{ photo.captureInfo.location }}, {{ photo.captureInfo.date }}
    </figcaption>
  </figure>
</Layout>
</template>

<page-query>
query Species($id: String!) {
  species(id: $id) {
    id
    speciesGallery
    commonName
    scientificName
    photos {
      id
      url
      filename
      caption
      annotations {
        stage
        sex
      }
      captureInfo {
        photographer
        location
        city
        county
        date
      }
    }
  }
}
</page-query>

<script>
import _ from 'lodash'

import Photo from '~/components/Photo'

export default {
  components: {
    Photo
  },
  metaInfo() {
    this.$route.meta.breadcrumbs = [
      {
        name: 'Home',
        link: '/'
      },
      {
        name: 'Species',
        link: '/species-gallery'
      },
      {
        name: `${_.capitalize(this.$page.species.speciesGallery)}`,
        link: `/species-gallery/${this.$page.species.speciesGallery}`
      },
      {
        name: this.$page.species.commonName,
        link: this.$route.path
      }
    ]
    return {
      title: this.$page.species.commonName
    }
  }
};
</script>

<style lang="scss" scoped>
</style>