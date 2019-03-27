<template>
<Layout>
  <h1>{{ $page.species.commonName }}</h1>
  <h2>{{ $page.species.scientificName }}</h2>
  <PhotoWithCaption
    v-for="photo in $page.species.photos"
    v-bind:key="photo.id"
    :photo="photo"
    size="t_400">
    {{ photo.annotations.sex }} {{ photo.annotations.stage }} {{ $page.species.commonName }} at {{ photo.captureInfo.location }}, {{ photo.captureInfo.date }}
  </PhotoWithCaption>
</Layout>
</template>

<page-query>
query Species($id: String!) {
  species(id: $id) {
    id
    gallery
    commonName
    scientificName
    photos {
      id
      url
      cloudinarySlug
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

import PhotoWithCaption from '~/components/PhotoWithCaption'

export default {
  components: {
    PhotoWithCaption
  },
  metaInfo() {
    this.$route.meta.breadcrumbs = [
      {
        name: 'Home',
        link: '/'
      },
      {
        name: `${_.capitalize(this.$page.species.gallery)}`,
        link: `/${this.$page.species.gallery}`
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
