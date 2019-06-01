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

<style lang="scss">
.species-gallery-container {
  text-align: center;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50px, 562px));
  .species-gallery {
    max-width: 450px;
    display: inline-block;
    padding: 16px;
  }
}

@media(max-width: 594px) {
  .species-gallery-container {
    grid-template-columns: repeat(auto-fill, minmax(50px, calc(100vw - 32px)));
    .species-gallery {
      max-width: calc(100vw - 32px);
      margin: 16px 0px;
      img {
        width: calc(100vw - 64px);
      }
      h2 {
        margin-top: 0px;
        margin-bottom: 16px;
      }
    }
  }
}

@media (max-width: 440px) {
  .species-gallery-container {
    .species-gallery {
      h2 {
        font-size: 32px;
        margin-bottom: 0px;
      }
    }
  }
}
</style>
