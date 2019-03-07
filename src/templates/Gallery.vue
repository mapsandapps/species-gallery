<template>
  <Layout>
    <h1>{{ $page.gallery.name }}</h1>
  </Layout>
</template>

<page-query>
query Gallery ($id: String!) {
  gallery (id: $id) {
    id
    name
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.gallery.name
    }
  },

  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>
