<template lang="pug">
div(
  :style="$store.getters['settings/isMobile'] && viewMenu ? { background: '#f3f3f3', height: '100vh', position: 'relative' } : ''"
)
  //- Click on the mobile menu

  //- Nav bar
  .pointer.z-max.absolute.left-100.dn-l.pr2.p0-ns.link.f3.fr.flex.pt4(
    @click="openMenu()"
  )
    .pr3(
      :style="$store.getters['settings/isMobile'] && viewMenu ? '' : 'bg-black'"
    ) Menu
    div(:class="{ animate: viewMenu }")
      #bar1.menu-bar
      #bar2.menu-bar
      #bar3.menu-bar
  .db.dt-l.w-100
    .db.dtc-l.v-mid.link.w-100.w-25-l.tc.tl-l.mb2.mb0-l
      a.ph4(href="/")
        img.pv3.dib.ph3-ns.pr4(
          src="~/assets/logo.png",
          height="100",
          v-if="!homePage"
        )
      img.dib.ph3(src="~/assets/blank.png", height="100", v-if="homePage")
      //- div(height='100' v-if="homePage")
    .z-max.absolute.left-100.w-30-m.h-80.tr(v-if="viewMenu")
      //- mt5 in the above when blank.png is gone
      .dt-s.pointer.mt3.ph3.pb2.link.f4-l.f3.dib-ns.mh3.mb2(
        :title="items.title",
        v-for="items in nav",
        @click="menuHandler(items)",
        :key="items.id"
      ) {{ items.title }}
    //- .z-max.dtc-l.v-mid.tr.tr-l.mt0-l.w-100.w-75-l(v-if='viewMenu')
    //-     //- mt5 in the above when blank.png is gone
    //-     div.pointer.mt3.pl3.pr3.pb2.link.f4-l.f3.dib.mh3.mb2(:title='items.title' v-for='items in nav' @click='menuHandler(items)'  :key='items.id') {{items.label}}
  //- div test
//- :style='{"background-image": "url(" + post.feature_image + ")",  "background-repeat": "no-repeat", "background-position": "center"}')
</template>

<script>
export default {
  async mounted() {
    this.loadMenu();

    window.addEventListener("resize", () => {
      this.loadMenu();
    });
  },
  data() {
    return {
      nav: [
        { title: "Home", url: "/" },
        { title: "About us", url: "/about" },
        { title: "Our UCU motion", url: "/ucu" },
        { title: "Our NUSU motion", url: "/nusu" },
        { title: "Join us", url: "/contact" },
      ],
      viewMenu: false,
      color: "#1d1d1b",
    };
  },
  computed: {
    homePage() {
      if (this.$route.path === "/") {
        return true;
      }
    },
  },
  methods: {
    menuHandler(items) {
      // :to='{path: items.url}'
      this.$router.push({ path: items.url });
      if (this.viewMenu && this.$store.getters["settings/isMobile"]) {
        this.viewMenu = false;
      }
    },
    openMenu() {
      this.viewMenu = !this.viewMenu;
    },
    loadMenu() {
      this.$store.dispatch("settings/fetchWindowWidth", window.innerWidth);
      if (this.$store.getters["settings/getWindowWidth"] < 960) {
        if (this.viewMenu && this.$store.getters["settings/isMobile"]) {
          this.viewMenu = false;
        }
        this.$store.dispatch("settings/changeMobileState", true);
      } else if (this.$store.getters["settings/getWindowWidth"] >= 960) {
        this.$store.dispatch("settings/changeMobileState", false);
        this.viewMenu = true;
      }
    },
  },
};
</script>

<style>
#site-name {
  font-family: "Nunito Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Trebuchet MS", Arial, sans-serif;
  color: #f3f3f3;
}
.primary {
  color: #fff;
}

.left-100 {
  right: 0%;
}

.animate #bar1 {
  -webkit-transform: rotate(-45deg) translate(-8px, 8px);
  transform: rotate(-45deg) translate(-8px, 8px);
}
.animate #bar2 {
  opacity: 0;
}
.animate #bar3 {
  -webkit-transform: rotate(45deg) translate(-8px, -8px);
  transform: rotate(45deg) translate(-8px, -8px);
}
/* 
#menu {
  transition: 0.2s;
} */
.menu-bar {
  width: 35px;
  height: 5px;
  background-color: black;
  margin: 6px 0;
  border-radius: 4px;
  transition: 0.4s;
}
.mobile-box {
  background-color: #1d1d1b;
  color: #fff;
  height: 100vh;
}
</style>
