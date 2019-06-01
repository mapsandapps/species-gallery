<template>
  <Layout>
    <div class="main-page">
      <!-- TODO: replace following with LargeImageLink component -->
      <g-link
        to="/species-gallery">
        <figure>
          <Photo
            :photo="$static.photo"
            size=800 />
          <figcaption>
            <h1>
              Species
            </h1>
          </figcaption>
        </figure>
      </g-link>
      <br>
      <g-link
        to="/portfolio">
        <figure>
          <img src="/underconstruction.gif" class="construction" />
          <figcaption>
            <h1>
              Portfolio
            </h1>
          </figcaption>
        </figure>
      </g-link>
      <g-link
        to="/travel">
        <figure>
          <img src="/underconstruction.gif" class="construction" />
          <figcaption>
            <h1>
              Travel
            </h1>
          </figcaption>
        </figure>
      </g-link>
    </div>
  </Layout>
</template>

<static-query>
query {
  photo(id: "95") {
    id
    filename
  }
}
</static-query>

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
@import '../styles/variables';

.main-page {
  text-align: center;
  h1 {
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 48px;
  }
  a {
    display: block;
    max-width: 864px;
    margin: 0px auto;
    clear: both;
  }
  figure {
    padding: 32px;
    margin: 16px 0px 32px;
  }
}

@media (max-width: 440px) {
  .main-page {
    figure {
      padding: 16px;
    }
    h1 {
      font-size: 32px;
    }
    img {
      max-width: calc(100vw - 64px);
    }
  }
}
</style>

<style lang="scss">
@import '../styles/variables';

.main-page { // replace with .large-image-link
  img {
    width: 800px;
    max-width: calc(100vw - 64px - 32px);
    &.construction {
      width: 76px;
    }
  }
}
</style>
