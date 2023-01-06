<template>
  <main>
    <div class="project">
      <div class="container">
        <h1 v-if="project">this is project - {{ project.id }}</h1>
        <h2 v-else>Ooops, there is not this project, let's create!!!</h2>
      </div>
    </div>
    <ContactsComponent/>
  </main>
</template>

<script>
import ContactsComponent from '@/components/ContactsComponent'

export default {
  components: { ContactsComponent },
  computed: {
    project() {
      return this.$store.getters.projectById(+this.$route.params.id)
    }
  }
}
</script>