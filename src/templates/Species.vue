<template>
  <Layout>
    <h1>{{ $page.species.fields.commonName }}</h1>
    <img :src='$page.species.fields.file'>
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
        file
        commonName
      }
    }
  }
</page-query>
