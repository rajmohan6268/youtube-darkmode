<template>
  <div class="">
    <div
      class="absolute z-50 flex items-center justify-center min-w-full min-h-screen bg-black xl:hidden"
    >
      <div class="fixed max-w-xl text-center text-white">
        <span class="text-2xl">Ooops! ⚠️</span> sorry no suport for mobile and
        tab as of now <span class="text-2xl">🙁</span> may be in next
        version!<span class="text-2xl">🚀</span> check in screen resolution
        above
        <span class="text-2xl">💻 <span class="text-lg">1280*700 </span></span>screens
      </div>
    </div>
    <div class="hidden min-h-screen text-white xl:block font-Inter bg-dark">
      <Headercomponent class="sticky top-0 z-20 " />
      <div class="sticky top-0 flex items-start w-full ">
        <!-- side nav -->

        <Sidenav
          v-show="!$route.params.id"
          class="sticky max-h-screen pb-20 overflow-hidden overflow-y-scroll top-20 custom-scrollbar"
        />
        <transition mode="out-in" class="">
          <Nuxt class="mx-auto " />
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      ishow: true
    }
  }
}
</script>
<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>
