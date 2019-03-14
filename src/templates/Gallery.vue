<template>
  <Layout>
    <h1>{{ $page.gallery.name }}</h1>
    <ul>
      <li v-for="subgallery in $page.gallery.belongsTo.edges" :key="subgallery.node.id">
        {{ subgallery.node.name }}
        <ul>
          <li v-for="species in subgallery.node.belongsTo.edges" :key="species.node.id">
            {{ species.node.commonName }} - {{ species.node.scientificName}}
          </li>
        </ul>
        <!-- TODO: figure out where Subgallery.vue should live so it won't need a route -->
        <!-- keep going along the Tags example -->
        <!-- TODO: display species here (add a belongsTo on subgalleries in the query below) -->
      </li>
    </ul>
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
            name
            belongsTo {
              edges {
                node {
                  ...on Species {
                    id
                    commonName
                    scientificName
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
import SpeciesGalleryEntry from '~/components/SpeciesGalleryEntry'

export default {
  components: {
    SpeciesGalleryEntry
  },
  metaInfo() {
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
