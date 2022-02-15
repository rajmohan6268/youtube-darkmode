<template>
  <div>
    <n-link class="flex space-x-3" to="/">
      <div>
        <div class="relative w-60">
          <div class="absolute px-2 text-white bg-black bottom-2 right-2">
            23:45
          </div>
          <img :src="card.img" class="w-full" alt="">
        </div>
      </div>
      <div class="flex flex-col text-xs 2xl:text-sm justify-evenly">
        <div class="text-sm font-medium 2xl:text-lg">
          Ep 6: Living to Serve | SEARCH ON
        </div>
        <div class="text-gray ">
          James Gouse
        </div>
        <div class="text-gray ">
          1M views . 3 years ago
        </div>
      </div>
    </n-link>
  </div>
</template>
<script>
export default {
  props: {
    card: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
