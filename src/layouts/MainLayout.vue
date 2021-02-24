<template>
  <div class="app-main-layout">
    <Navbar @showHideMenu="isOpenMenu = !isOpenMenu" />

    <Sidebar v-model="isOpenMenu" />

    <main class="app-content" :class="{ full: !isOpenMenu }">
      <div class="app-page">
        <router-view />
      </div>
    </main>

    <div class="fixed-action-btn" @click="help">
      <a class="btn-floating btn-large blue" href="#">
        <i class="large material-icons">help</i>
      </a>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/app/Navbar'
import Sidebar from '@/components/app/Sidebar'
export default {
  name: 'main-layout',
  data: () => ({
    isOpenMenu: true
  }),
  components: { Navbar, Sidebar },
  methods: {
    help: () => {
      alert('Help')
    }
  }
}
</script>
