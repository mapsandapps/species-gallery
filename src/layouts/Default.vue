<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metaData.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about">About</g-link>
      </nav>
    </header>
    <div
      v-if="this.breadcrumbs"
      class="breadcrumbs">
      <span
        v-for="(crumb, index) in this.allButLast"
        :key="index">
        <span v-if="crumb.link">
          <a :href="crumb.link">{{ crumb.name }}</a> &raquo;
        </span>
        <span v-else>
          {{ crumb.name }} &raquo;
        </span>
      </span>
      {{ this.last.name }}
    </div>
    <slot/>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
import _ from 'lodash'

export default {
  components: {
  },
  data() {
    return {
      breadcrumbs: null
    }
  },
  computed: {
    allButLast() {
      return _.slice(this.breadcrumbs, 0, this.breadcrumbs.length - 1)
    },
    last() {
      return _.last(this.breadcrumbs)
    }
  },
  mounted() {
    this.breadcrumbs = this.$route.meta.breadcrumbs
  }
}
</script>

<style lang="scss">
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  padding-left: 16px;
  padding-right: 16px;
}

a {
  color: #4b2075;
  &:hover {
    text-decoration: underline;
  }
}

h1, h2, h3 {
  color: #4b2075;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.breadcrumbs {
  text-align: left;
}

.nav__link {
  margin-left: 20px;
}
</style>
