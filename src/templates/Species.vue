<template>
  <Layout>
    <h1>{{ $page.species.fields.commonName }}</h1>
    <g-image :src='$page.species.fields.file' />
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.species.fields.commonName
    }
  }
}
</script>

<page-query>
  query Species ($id: String!) {
    species (id: $id) {
      title
      id
      fields {
        files {
          url
        }
        commonName
      }
    }
  }
</page-query>

<style lang="scss" scoped>
img {
  max-width: 100%;
}
</style>
