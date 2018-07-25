<template>
  <div id="breadcrumbs" v-if="$route.meta.breadcrumb">
    <ol>
      <li>You are here: </li>
      <li
        v-for="(breadcrumb, index) in $route.meta.breadcrumb[breadCrumbSource]"
        :key="`breadcrumbs-${index}`">
        <router-link
          :class="breadcrumb.nonInteractive ? 'non-interactive': ''"
          :to="{ name: breadcrumb.link, params: { source: breadcrumb.source } }">
          {{ breadcrumb.name }}
          <span v-if="breadcrumb.paramToDisplay">
            <span v-if="breadcrumb.name" >-</span>
            {{ $route.params[breadcrumb.paramToDisplay] }}
          </span>
        </router-link>
        <span
          class="carat"
          v-if="index < $route.meta.breadcrumb[breadCrumbSource].length - 1"> › </span>
      </li>
    </ol>
    <div style="display:none">{{ $route.params }}</div>
  </div>
</template>
<script>
export default {
  name: 'breadcrumbs',
  data() {
    return {
      breadCrumbSource: 'default',
    };
  },
  methods: {
    updateSource() {
      if (
        this.$route.params.source &&
        Array.isArray(this.$route.meta.breadcrumb[this.$route.params.source])
      ) {
        this.breadCrumbSource = this.$route.params.source;
      } else {
        this.breadCrumbSource = 'default';
      }
    },
  },
  watch: {
    '$route.params.source': {
      handler() {
        this.updateSource();
      },
    },
  },
};
</script>
<style lang="scss" scoped>
#breadcrumbs {
  text-align: left;
  font-size: 1rem !important;
  padding-left: 3.75rem;
  &.fixed-nav {
    margin-top: 100px;
  }
  ol {
    list-style-type: none;
    display: inline-block;
    margin-left:0;
    padding-left:0;
    li {
      .carat {
        padding: 0 5px;
        font-size: 1rem;
      }
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      font-style: normal;
      font-weight: 100;
      display: inline;
      a {
        color: black;
        font-weight: 100;
        font-size: 1rem;
        &.non-interactive {
          pointer-events: none;
          text-decoration: none;
        }
      }
    }
  }
}
</style>
