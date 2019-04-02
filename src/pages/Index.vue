<template>
  <Layout>
    <g-link
      to="/species-gallery">
      <figure>
        <Photo
          :photo="$page.photo"
          size="t_400" />
        <figcaption>
          Species
        </figcaption>
      </figure>
    </g-link>
    <g-link
      to="/portfolio">
      <figure>
        <Photo
          :photo="$page.photo"
          size="t_400" />
        <figcaption>
          Portfolio
        </figcaption>
      </figure>
    </g-link>
    <g-link
      to="/travel">
      <figure>
        <Photo
          :photo="$page.photo"
          size="t_400" />
        <figcaption>
          Travel
        </figcaption>
      </figure>
    </g-link>
  </Layout>
</template>

<page-query>
query {
  photo(id: "16") {
    id
    cloudinarySlug
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
