<template>
<div>
  <span
    v-for="(crumb, index) in this.allButLast"
    :key="index">
      {{ crumb }} &raquo;
  </span>
  {{ this.last }}
</div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'Breadcrumbs',
  props: {
    breadcrumbs: {
      required: true,
      type: Array
    }
  },
  computed: {
    allButLast() {
      return _.slice(this.breadcrumbs, 0, this.breadcrumbs.length - 1)
    },
    last() {
      return _.last(this.breadcrumbs)
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
