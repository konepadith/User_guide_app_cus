<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col v-for="(item, idx) in images" :key="idx" cols="12">
          <img :src="require(`@/assets/claim/${item.name}.png`)" alt="Local Image" />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { name: '0' },
        { name: '1' },
        { name: '2' },
        { name: '3' },
        { name: '4' },
        { name: '5' },
        { name: '6' },
        // Add more items as needed
      ],
    };
  },
};
</script>
