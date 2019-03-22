<template>
  <Layout>
    <h1>{{ $page.gallery.name }}</h1>
    <div
      v-for="subgallery in $page.gallery.belongsTo.edges"
      :key="subgallery.node.id">
      <h2><Breadcrumbs :breadcrumbs="subgallery.node.names" /></h2>
      <SpeciesGalleryEntry v-for="species in subgallery.node.belongsTo.edges" :key="species.node.id" :species="species.node" />
    </div>
  </Layout>
</template>

<page-query>
query Gallery ($id: String!) {
  gallery (id: $id) {
    id
    name
    belongsTo(sortBy: "ASC") {
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
                      url
                      flickrSlug
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
import Breadcrumbs from '~/components/Breadcrumbs'
import SpeciesGalleryEntry from '~/components/SpeciesGalleryEntry'

export default {
  components: {
    Breadcrumbs,
    SpeciesGalleryEntry
  },
  metaInfo() {
    this.$route.meta.breadcrumbs = [
      {
        name: 'Home',
        link: '/'
      },
      {
        name: this.$page.gallery.name,
        link: this.$route.path
      }
    ]
    return {
      title: this.$page.gallery.name
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
