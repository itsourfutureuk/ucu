<template lang="pug">
.ph6-ns.ph3.pb4.hero-bg(:class="$store.getters['settings/isMobile'] ? 'vh-90 v-mid dt w-100': 'relative vh-50'")
  .dib(:class="$store.getters['settings/isMobile'] ? 'v-mid w-100 dtc': 'absolute edgy-box'")
    .bg-black.white.dib(:class="$store.getters['settings/isMobile'] ? 'w-100': ''")
      h1.tc.f1.f-headline-ns.ph4.mb0.lh-title() {{header}}
      h2.tc.fw1.f3.ph4.mt3.mb4 {{ subHeader}}
  //- .bg-black.white.dib(:class="$store.getters['settings/isMobile'] ? 'v-mid w-100 dtc': 'absolute edgy-box'")
    h1.tc.f1.f-headline-ns.fw2.ph4.mb0.lh-title {{header}}
    h2.tc.fw1.f3.ph4.mt3.mb4 {{ subHeader}}
  //- a.f6.no-underline.grow.dib.v-mid.bg-blue.white.ba.b--blue.ph3.pv2.mb3(href='/') {{cta}}
  //- span.dib.v-mid.ph3.white-70.mb3 or
  //- a.f6.no-underline.grow.dib.v-mid.white.ba.b--white.ph3.pv2.mb3(href='') {{secondaryCta}}
  //- div.test

</template>

<script>
export default {
  props: ['header', 'subHeader', 'cta', 'secondaryCta'],
}
</script>

<style scoped>
.hero-bg {
  background-image: linear-gradient(67deg, #fec163 0%, #ef4056 100%);

}
.edgy-box {
  bottom: -2vh;
}
.vh-90 {
  height: 90vh;
}
</style>
