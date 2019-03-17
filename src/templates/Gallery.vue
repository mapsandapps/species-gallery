<template>
  <Layout>
    <h1>{{ $page.gallery.name }}</h1>
    <div
      v-for="subgallery in $page.gallery.belongsTo.edges"
      :key="subgallery.node.id">
      <h2><Breadcrumbs :breadcrumbs="subgallery.node.names" /></h2>
      <SpeciesGalleryEntry v-for="species in subgallery.node.species" :key="species.id" :species="species" />
    </div>
  </Layout>
</template>

<page-query>
query Gallery ($id: String!) {
  gallery (id: $id) {
    id
    name
    belongsTo {
      edges {
        node {
          ...on Subgallery {
            id
            names
            species {
              id
              commonName
              scientificName
              featuredPhoto {
                url
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
  },

  // computed: {
  //   sortedButterflies() {
  //     var unsorted = _.cloneDeep(this.$page.allButterfly.edges)
  //     var sorted = []
  //     var nextID

  //     // get the first item
  //     var firstItem = _.find(unsorted, item => {
  //       return !item.node.previousSpecies
  //     })
  //     sorted.push(firstItem.node)
  //     nextID = firstItem.node.nextSpecies.id
  //     _.pull(unsorted, firstItem);

  //     // get the rest of the items
  //     while (unsorted.length > 0) {
  //       console.log(unsorted)
  //       console.log(nextID)
  //       var nextItem = _.find(unsorted, item => {
  //         return item.node.id == nextID
  //       })
  //       sorted.push(nextItem.node)
  //       _.pull(unsorted, nextItem)
  //       if (nextItem) {
  //         if (nextItem.node.nextSpecies) {
  //           nextID = nextItem.node.nextSpecies.id
  //         }
  //       } else {
  //         console.warn('NO NEXT ITEM FOUND')
  //       }
  //     }

  //     console.log(sorted);
  //     return sorted
  //   }
  // },

  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>
