<template>
  <section class="container">
    <div>
      <img src="/images/icons/icon-96x96.png" />
      <h2 class="subtitle">
        gunma.web 35 pori's pwa demo page
      </h2>
      <div class="links">
        <nuxt-link
          to="/demo"
          class="button--green"
        >ページ遷移デモ</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
