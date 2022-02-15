<template>
  <div class="flex items-center justify-between p-3 bg-dark ">
    <div class="flex items-center space-x-4">
      <div class="">
        <img class="w-8" src="/hamburger.svg" alt="">
      </div>
      <div class="">
        <n-link to="/">
          <img class="w-28" src="/logo-yt.png" alt="">
        </n-link>
      </div>
    </div>
    <div class="flex items-center justify-center w-full -ml-10 space-x-6">
      <div
        class="flex items-center w-full max-w-lg border border-white rounded border-opacity-5"
      >
        <input
          type="text"
          class="w-full py-2 pl-8 bg-dark-1 focus:outline-none"
          placeholder="Search"
        >
        <div class="px-5 py-2 bg-gray">
          <img class="w-7" src="/Group.svg">
        </div>
      </div>
      <div class="p-2.5 bg-black rounded-full">
        <img class="w-6" src="/mic.svg" alt="">
      </div>
    </div>
    <div class="flex items-center pr-10 space-x-5">
      <img src="/create.svg" alt="">
      <img src="/apps.svg" alt="">
      <img src="/notifications.svg" alt="">
      <img class="rounded-full" src="/User-Avatar.png" alt="">
    </div>
  </div>
</template>
