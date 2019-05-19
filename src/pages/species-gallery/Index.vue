<template>
  <Layout>
    <div class="species-gallery-container">
      <div
        v-for="gallery in $page.allSpeciesGalleryGallery.edges"
        :key="gallery.node.id">
        <g-link
          v-if="gallery.node.public || displayPrivateGalleries"
          :to="`/species-gallery/${gallery.node.id}`">
          <figure class="species-gallery">
            <Photo
              v-if="gallery.node.featuredPhoto"
              :photo="gallery.node.featuredPhoto"
              size=450 />
            <figcaption>
              <h2>
                {{ gallery.node.name }}
              </h2>
            </figcaption>
          </figure>
        </g-link>
      </div>
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
.species-gallery-container {
  text-align: center;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50px, 482px));
  .species-gallery {
    max-width: 450px;
    display: inline-block;
    padding: 16px;
  }
}
</style>
