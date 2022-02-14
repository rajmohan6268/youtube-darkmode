<template>
  <div>
    <Headercomponent />
    <div>
      <!-- <div class=""></div> -->
      <!-- home.svg -->
      <div class="flex items-start w-full">
        <!-- side nav -->
        <Sidenav />
        <div class="overflow-hidden ">
          <!-- -->
          <div class="flex ml-8 space-x-8 overflow-x-scroll example">
            <div
              v-for="i in 20"
              :key="i"
              class="p-2.5  rounded-full px-8 border"
            >
              Item
            </div>
          </div>
          <!-- cards -->
          <div class="grid grid-cols-4 gap-8 p-8 mt-2 bg-black">
            <Card v-for="i in 20" :key="i" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>
<style scoped>
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #ffffff;
}
</style>
