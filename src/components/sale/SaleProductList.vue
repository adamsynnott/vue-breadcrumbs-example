<template>
  <div>
    <h1>Awesome Jackets</h1>
    <ul>
      <li>
        <router-link
          :to="{ name: 'JacketProductDetails',
                 params: { jacketLabel: 'green-leather-jacket', source: 'fromSalesPage' } }">
          Green Leather Jacket
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'sales-product-list',
  data() {
    return {};
  },
};
</script>
