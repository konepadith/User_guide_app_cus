<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col v-for="(item, idx) in images" :key="idx" cols="12">
          <img
            :src="require(`@/assets/policy/${item.name}.png`)"
            alt="Main user Image"
            :height="width"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  computed: {
    width() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 350
        case 'sm':
          return 400
        case 'md':
          return 500
        case 'lg':
          return 600
        case 'xl':
          return 800
      }
    },
  },
  data() {
    return {
      images: [
        { name: '0' },
        { name: '1' },
        { name: '2' },
        { name: '3' },
        { name: '4' },
        // Add more items as needed
      ],
    }
  },
}
</script>
