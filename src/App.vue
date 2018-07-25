<template>
  <div id="app">
    <breadcrumbs></breadcrumbs>
    <router-view/>
  </div>
</template>

<script>
import Breadcrumbs from '@/components/breadcrumbs/Breadcrumbs';

export default {
  name: 'App',
  components: {
    breadcrumbs: Breadcrumbs,
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
