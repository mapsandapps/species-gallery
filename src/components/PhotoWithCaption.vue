<template>
<figure>
  <Photo
    v-if="photo"
    :photo="photo" />
  <figcaption>
    <slot />
  </figcaption>
</figure>
</template>

<script>
import Photo from './Photo'

export default {
  name: 'PhotoWithCaption',
  components: {
    Photo
  },
  props: {
    photo: {
      required: false,
      type: Object
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
