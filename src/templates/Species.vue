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
        :showingTooltip="tooltipShown(photo.id)"
        size=800 />
      <figcaption>
        {{ photo.captureInfo.city }}, {{ moment(photo.captureInfo.date).format('YYYY') }}
        <img
          v-on:click="toggleTooltip(photo)"
          src="../../static/icons/info-circle.svg" />
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
      filename
      caption
      annotations {
        stage
        sex
      }
      captureInfo {
        photographer
        truthInCaptioning
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
  data() {
    return {
      showingTooltip: false
    }
  },
  methods: {
    moment,
    tooltipShown(id) {
      return this.showingTooltip === id
    },
    toggleTooltip(photo) {
      if (this.showingTooltip) {
        this.showingTooltip = false
      } else {
        this.showingTooltip = photo.id
      }
    }
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
    width: 800px;
    max-width: calc(100vw - 64px);
    margin: 0 auto;
    img {
      cursor: pointer;
      position: absolute;
      margin-top: 7px;
      right: calc((100vw - 800px) / 2);
    }
  }
}

@media (max-width: 864px) {
  .species {
    figcaption {
      img {
        right: 16px;
      }
    }
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
      img {
        height: 24px;
        margin-top: 6px;
      }
    }
  }
}
</style>
