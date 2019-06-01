<template>
<Layout>
  <div class="species">
    <div v-if="$page.species.commonName">
      <h1>{{ $page.species.commonName }}</h1>
      <h2>({{ $page.species.scientificName }})</h2>
    </div>
    <h1 v-else>{{ $page.species.scientificName }}</h1>
    <figure
      v-for="photo in $page.species.photos"
      v-bind:key="photo.id">
      <Photo
        v-if="photo"
        :photo="photo"
        size=800 />
      <figcaption>
        {{ photo.captureInfo.city }}, {{ moment(photo.captureInfo.date).format('YYYY') }}
      </figcaption>
    </figure>
  </div>
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
import moment from 'moment'

import Photo from '~/components/Photo'

export default {
  components: {
    Photo
  },
  methods: {
    moment
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
@import '../styles/variables';

.species {
  text-align: center;
  figure {
    padding: 0px;
    margin: 0px 0px 32px;
    &:hover {
      background-color: transparent;
      figcaption {
        text-decoration: none;
      }
    }
  }
  figcaption {
    font-weight: $book-weight;
    font-size: 30px;
    color: $purple-100;
  }
}

@media (max-width: 440px) {
  .species {
    h1 {
      font-size: 40px
    }
    h2 {
      margin: 16px 0px;
      font-size: 24px;
    }
    figcaption {
      font-size: 24px;
    }
  }
}
</style>
