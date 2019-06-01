<template>
  <Layout class="gallery">
    <h1 class="gallery-title">{{ $page.speciesGalleryGallery.name }}</h1>
    <div
      v-for="subgallery in $page.speciesGalleryGallery.belongsTo.edges"
      :key="subgallery.node.id">
      <div
        v-if="subgallery.node.belongsTo.edges.length > 0"
        class="subgallery">
        <h2>
          <!-- <Breadcrumbs :breadcrumbs="subgallery.node.names" /> -->
          {{ split(last(subgallery.node.names), ' (')[0] }}
        </h2>
        <div class="subgallery-photos">
          <SpeciesGalleryEntry
            v-for="species in subgallery.node.belongsTo.edges"
            :key="species.node.id"
            :species="species.node" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query SpeciesGalleryGallery ($id: String!) {
  speciesGalleryGallery (id: $id) {
    id
    name
    belongsTo(order: ASC, perPage: 120) {
      edges {
        node {
          ...on Subgallery {
            id
            names
            belongsTo(sortBy: "ASC") {
              edges {
                node {
                  ...on Species {
                    id
                    commonName
                    scientificName
                    featuredPhoto {
                      id
                      filename
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</page-query>

<script>
import _ from 'lodash'

import Breadcrumbs from '~/components/Breadcrumbs'
import SpeciesGalleryEntry from '~/components/SpeciesGalleryEntry'

export default {
  components: {
    Breadcrumbs,
    SpeciesGalleryEntry
  },
  methods: {
    last: _.last,
    split: _.split
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
        name: this.$page.speciesGalleryGallery.name,
        link: this.$route.path
      }
    ]
    return {
      title: this.$page.speciesGalleryGallery.name
    }
  }
}
</script>

<style lang="scss">
.gallery {
  text-align: center;
  padding-bottom: 100px;
  .subgallery {
    margin-bottom: 64px;
  }
  .subgallery-photos {
    justify-content: center;
    display: grid;
    grid-gap: 0px;
    grid-template-columns: repeat(auto-fill, minmax(50px, 332px));
  }
}

@media (max-width: 440px) {
  .gallery {
    .gallery-title {
      font-size: 40px;
    }
    .subgallery {
      margin-bottom: 32px;
      h2 {
        font-size: 24px;
        margin: 16px 0px;
      }
    }
  }
}

@media (max-width: 702px) {
  .gallery {
    .subgallery-photos {
      grid-template-columns: repeat(auto-fill, minmax(50px, calc(50vw - 16px)));
      a {
        max-width: calc(50vw - 16px);
      }
    }
  }
}
</style>
