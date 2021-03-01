<template lang="pug">
.mb4
    .mw8.pb4(v-if='post' v-html='post.html')
    div(v-if='collection' v-for='items in collection')
        nuxt-link.fl.w-33-l.w-50-m.w-100.link.overflow-hidden( :to="{ path:items.slug }")
            .grow-large.aspect-ratio--3x4.mb4(v-if='items.feature_image' :style='{"background": "url(" + items.feature_image +") no-repeat center center", "background-size": "cover",  "filter": "brightness(50%)"}')
            .relative
                h1.absolute.test.z-999.tc.w-100
                    span.bg-black.white {{items.title}}
        nuxt-child
        nuxt-link.fl.w-33-l.w-50-m.w-100.link.overflow-hidden( :to="{ path:items.slug }")
            .grow-large.aspect-ratio--3x4.mb4(v-if='!items.feature_image'  :style='{background: color()}')
            .relative
                h1.absolute.test.z-999.tc.w-100
                    span.bg-black.white {{items.title}}
        nuxt-child


</template>

<script>
export default {
  props: ['post'],
  async mounted() {
    // this.post = this.$store.getters['posts/getPostBySlug'](
    //   this.$route.params.slug
    // )
    await this.$store.dispatch('posts/fetchPosts')
    await this.$store.dispatch('posts/fetchTags')
    await this.$store.dispatch('settings/fetchColors')
    this.tag = this.$store.getters['posts/getTags'].find(
      (tag) => tag.slug === this.$route.name
    )
    this.collection = this.$store.getters['posts/getPostsByTag'](this.tag.name)
  },
  data() {
    return {
      collection: null,
      tag: null,
    }
  },
  methods: {
    color() {
      return this.$store.getters['settings/getRandomColor'](Math.random())
    },
  },
}
</script>

<style scoped>
.test {
  bottom: 10vh;
}
</style>
