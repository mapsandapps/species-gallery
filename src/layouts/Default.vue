<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/" class="title">{{ $static.metaData.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about">About</g-link>
      </nav>
    </header>
    <div class="body">
      <div
        v-if="this.breadcrumbs && this.breadcrumbs.length > 1"
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
@import '../styles/variables';

body {
  background-color: $purple-10;
  font-family: Jost, Futura, Arial, sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

a {
  color: #4b2075;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}

h1, h2, h3 {
  color: $purple-90;
}

h1 {
  font-size: 60px;
  font-weight: $bold-weight;
  margin-top: 32px;
  margin-bottom: 0px;
  text-shadow: 0px 2px 4px rgba($purple-90, 0.2);
}

h2 {
  font-size: 40px;
  font-weight: $medium-weight;
  margin-top: 32px;
  margin-bottom: 32px;
}

.header {
  background-color: $purple-90;
  box-shadow: 0px 0px 6px 4px rgba($purple-100, 0.5);
  padding: 0px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  height: 64px;
  a {
    color: white;
  }
  .title {
    text-decoration: none;
    font-size: 36px;
  }
}

.body {
  padding: 0px 16px;
}

.breadcrumbs {
  text-align: left;
}

.nav__link {
  margin-left: 20px;
}
</style>
