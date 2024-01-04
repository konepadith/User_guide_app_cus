<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col v-for="(item, idx) in images" :key="idx" cols="12">
          <img
            :src="require(`@/assets/by_car_insurance/${item.name}.png`)"
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
        { name: '5' },
        { name: '6' },
        { name: '7' },
        { name: '8' },
        { name: '9' },
        { name: '10' },
        { name: '11' },
        { name: '12' },
        { name: '13' },
        { name: '14' },
        { name: '15' },
        { name: '16' },
        { name: '17' },
        { name: '18' },
        { name: '19' },
        { name: '20' },
        { name: '21' },
        { name: '22' },
        { name: '23' },
        { name: '24' },
        { name: '25' },
        // Add more items as needed
      ],
    }
  },
}
</script>
