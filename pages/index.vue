<template>
  <!-- <div>
    <div>

      <div class="flex items-start w-full">

        <Sidenav />

      </div>
    </div>
  </div> -->

  <div class="overflow-hidden ">
    <!-- -->
    <div class="flex ml-8 space-x-8 overflow-x-scroll example">
      <div v-for="i in 20" :key="i" class="p-2 px-6 border rounded-full">
        Item
      </div>
    </div>
    <!-- cards -->
    <div class="grid grid-cols-4 gap-8 p-8 mt-2 bg-black">
      <Card v-for="(i, index) in cards" :key="index" :card="i" />
      <Card v-for="(i, index) in cards" :key="index+100" :card="i" />
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      cards: [
        {
          img: '1.png',
          name: 'James Gouse',
          av: 'c1.png'
        },
        {
          img: '2.png',
          name: 'Alan Cooper',
          av: 'ca1.png'
        },
        {
          img: '3.png',
          name: 'Alan Cooper',
          av: 'ca3.png'
        },
        {
          img: '4.png',
          name: 'Alexis Sears',
          av: 'ca5.png'
        },
        {
          img: '5.png',
          name: 'Alexis Sears',
          av: 'ca6.png'
        },
        {
          img: '6.png',
          name: 'Anna White',
          av: 'ca7.png'
        },
        {
          img: '7.png',
          name: 'Skylar Dias',
          av: 'c1.png'
        },
        {
          img: '8.png',
          name: 'James Gouse',
          av: 'ca4.png'
        }
      ]
    }
  }
}
</script>
<style scoped>
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #ffffff;
}
</style>
