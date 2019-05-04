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
      <g-link
        to="/portfolio">
        <figure>
          <Photo
            :photo="$static.photo"
            size="t_400" />
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
          <Photo
            :photo="$static.photo"
            size="t_400" />
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

<style lang="scss" scoped>
@import '../styles/variables';

.main-page {
  text-align: center;
  h1 {
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 48px;
  }
  figure {
    padding: 32px;
    margin: 16px 0px 32px;
    &:hover {
      background-color: $purple-20;
    }
  }
}
</style>

<style lang="scss">
.main-page { // replace with .large-image-link
  img {
    width: 800px;
    max-width: calc(100vw - 64px - 32px);
  }
}
</style>
