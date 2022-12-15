<template>
  <header class="header">
    <router-link to="/" class="header__logo">
      &lt;Lobanov Nikita/&gt;
    </router-link>
    <button @click="change" class="header__btn">Hire me</button>
  </header>
</template>

<script>
export default {

};
</script>

<style lang="scss">
.header {
  background-color: #000;
  color: #fff;
  padding: 40px 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 4px 8px 0px rgba(34, 60, 80, 0.2);

  &__logo {
    font-size: 20px;
    color: #fff;
    text-decoration: none;
  }

  &__btn {
    padding: 12px 25px;
    border-radius: 20px;
    background-color: #fff;
    border: 0;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 16px;
  }
}
</style>