<template>
  <ul class="sidenav app-sidenav" :class="{ open: modelValue }">
    <li v-for="link in links" :key="link.url">
      <router-link class="waves-effect waves-orange pointer" :to="link.url">
        {{ link.title }}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['modelValue'],
  data: () => ({
    links: [
      { title: 'Главная', url: '/' },
      { title: 'Помощь', url: '/help' }
    ]
  })
}
</script>
