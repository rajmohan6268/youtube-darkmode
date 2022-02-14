<template>
  <n-link to="/a">
    <div class="">
      <div class="relative ">
        <div class="absolute bottom-0 right-0 px-3 py-1 m-2 bg-black">
          23:45
        </div>
        <img class="w-full" src="/image 1.png" alt="">
      </div>
      <div class="">
        <div class="flex p-2 space-x-3">
          <div v-if="showImgae">
            <img class="rounded-full w-14" src="/c1.png">
          </div>
          <div class="space-y-0.5 text-gray  text-xs">
            <div class="text-base font-medium text-white">
              Lorem ipsum dolor sit amet, consecte adipiscing elit.
            </div>
            <div class="">
              James Gouse
            </div>
            <div class="">
              15K Views .1 week ago
            </div>
          </div>
        </div>
      </div>
    </div>
  </n-link>
</template>
<script>
export default {
  props: {
    showImgae: {
      type: Boolean,
      default: true
    }
  }
}
</script>
