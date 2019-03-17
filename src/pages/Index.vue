<template>
  <Layout>
    <div v-for="gallery in $page.allGallery.edges" :key="gallery.node.id">
      <g-link :to="`${gallery.node.id}`">{{ gallery.node.name }}</g-link>
    </div>
  </Layout>
</template>

<page-query>
query {
  allGallery {
    edges {
      node {
        id
        name
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    title: '',
    this.$route.meta.breadcrumbs = [
      {
        name: 'Home',
        link: '/'
      }
    ]
  },

  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>
