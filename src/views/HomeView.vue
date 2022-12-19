<template>
  <main class="hero">
    <div class="container">
      <div class="hero__wrapper">
        <h1 class="hero__title">
          Hi! I'm Lobanov Nikita - <br> Web Developer <br> from Tomsk
        </h1>
        <div class="hero__img">
          <img src="@/assets/img/hero.jpg" alt="Me">
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@/assets/styles/_";

.hero {
  display: flex;
  max-height: calc(100vh - 160px);

  &__wrapper {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    min-height: calc(100vh - 160px);
    padding-bottom: 60px;
  }

  &__title {
    max-width: 66%;
    font-weight: 700;
    font-size: 60px;
  }

  &__img {
    max-width: 33%;

    > img {
      max-width: 100%;
    }
  }
}
</style>