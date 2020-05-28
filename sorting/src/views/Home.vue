<template>
  <div class="home">
    <homepage msg="Sorting Tutorial" />
  </div>
</template>

<script>
// @ is an alias to /src
import homepage from "@/components/Homepage.vue";

export default {
  name: "Home",
  components: {
    homepage
  }
};
</script>
