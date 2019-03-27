<template>
  <Layout>
    <div
      v-for="gallery in $page.allGallery.edges"
      :key="gallery.node.id">
      <g-link
        v-if="gallery.node.public || displayPrivateGalleries"
        :to="`${gallery.node.id}`">
        <PhotoWithCaption :photo="gallery.node.featuredPhoto" size="t_400">
          {{ gallery.node.name }}
        </PhotoWithCaption>
      </g-link>
    </div>
  </Layout>
</template>

<page-query>
query {
  allGallery(order: ASC) {
    edges {
      node {
        id
        name
        featuredPhoto {
          id
          cloudinarySlug
        }
        public
        belongsTo {
          edges {
            node {
              ... on Subgallery {
                id
                names
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
import PhotoWithCaption from '~/components/PhotoWithCaption'

export default {
  components: {
    PhotoWithCaption
  },
  metaInfo() {
    title: '',
    this.$route.meta.breadcrumbs = [
      {
        name: 'Home',
        link: '/'
      }
    ]
  },
  data() {
    return {
      displayPrivateGalleries: (process.env.GRIDSOME_DISPLAY_PRIVATE_GALLERIES === 'true')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
