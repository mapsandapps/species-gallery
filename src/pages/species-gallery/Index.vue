<template>
  <Layout>
    <div
      v-for="gallery in $page.allSpeciesGalleryGallery.edges"
      :key="gallery.node.id">
      <g-link
        v-if="gallery.node.public || displayPrivateGalleries"
        :to="`/species-gallery/${gallery.node.id}`">
        <figure>
          <Photo
            v-if="gallery.node.featuredPhoto"
            :photo="gallery.node.featuredPhoto"
            size=300 />
          <figcaption>
            {{ gallery.node.name }}
          </figcaption>
        </figure>
      </g-link>
    </div>
  </Layout>
</template>

<page-query>
query {
  allSpeciesGalleryGallery(order: ASC) {
    edges {
      node {
        id
        name
        featuredPhoto {
          id
          filename
        }
        public
      }
    }
  }
}
</page-query>

<script>
import Photo from '~/components/Photo'

export default {
  components: {
    Photo
  },
  metaInfo() {
    title: '',
    this.$route.meta.breadcrumbs = [
      {
        name: 'Home',
        link: '/'
      },
      {
        name: 'Species',
        link: this.$route.path
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
