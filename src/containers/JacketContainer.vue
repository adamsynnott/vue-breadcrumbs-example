<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'jacket-container',
  props: {
    jacketLabel: {
      type: [String],
      required: false,
    },
  },
};
</script>
