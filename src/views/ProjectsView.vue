<template>
  <main>
    <div class="projects">
      <div class="container">
        <h2 class="block-title">
          {{ $t('titles.projects') }}
        </h2>
        <h3>projects page</h3>
      </div>
    </div>
    <ContactsComponent />
  </main>
</template>

<script>
import ContactsComponent from "@/components/ContactsComponent";

export default {
  components: {
    ContactsComponent,
  },
};
</script>