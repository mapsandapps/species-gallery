<template>
  <Layout>
    <h1>{{ $page.gallery.name }}</h1>
    <div v-for="child in $page.gallery.children" :key="child.id">
      {{ `${child.level}: ${child.name} (${child.sciName})` }}
      <div v-for="subchild in child.children" :key="subchild.id">
        {{ `&nbsp;&nbsp;${subchild.level}: ${subchild.name} (${subchild.sciName})` }}
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Gallery ($id: String!) {
  gallery (id: $id) {
    id
    name
    type
    children {
      level
      id
      name
      sciName
      children {
        level
        id
        name
        sciName
      }
    }
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
