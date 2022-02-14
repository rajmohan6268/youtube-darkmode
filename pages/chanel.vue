import { Card } from '../.nuxt/components';
<template>
  <div>
    <Headercomponent />
    <div>
      <!-- <div class=""></div> -->
      <!-- home.svg -->
      <div class="flex items-start w-full">
        <!-- side nav -->
        <Sidenav />
        <div class="p-8 pr-0 overflow-hidden">
          <div>
            <img src="/banner.png" alt="" />
          </div>
          <div class="p-3 pb-0 bg-dark-0">
            <div class="flex items-center justify-between space-x-3 ">
              <div class="">
                <img src="/cnli.png" class="" alt="" />
              </div>
              <div class="flex items-center justify-between w-full">
                <div class="">
                  <div class="text-xl font-medium">
                    Marcus Levin
                  </div>
                  <div class="text-sm text-gray">
                    1.2M subscribers
                  </div>
                </div>
                <div
                  class="px-6 py-2 mr-20 font-medium uppercase rounded bg-red"
                >
                  Subscribes
                </div>
              </div>
            </div>
            <div class="flex items-center justify-between w-full">
              <div
                class="flex items-center justify-between space-x-10 font-medium text-center"
              >
                <div class="py-2 border-b-2 border-opacity-20 w-28">
                  Home
                </div>
                <div class="py-2 w-28">
                  Videos
                </div>
                <div class="py-2 w-28">
                  playlists
                </div>
                <div class="py-2 w-28">
                  Community
                </div>
                <div class="py-2 w-28">
                  channels
                </div>
                <div class="py-2 w-28">
                  about
                </div>
                <div class="py-2">
                  <img src="/search.svg" alt="" />
                </div>
              </div>

              <div class="mr-20">
                <img src="/Btn.svg" alt="" />
              </div>
            </div>
          </div>
          <div class="w-full bg-black">
            <div class="flex items-start p-6 border-b border-opacity-20">
              <!--  -->
              <div class="w-full max-w-xl mr-6">
                <div class="relative w-full ">
                  <div
                    class="absolute flex items-center justify-between w-full p-4"
                  >
                    <div class="w-full">
                      Blind Woodturner: Turning passion into fine art
                    </div>
                    <div class="">
                      <img class="top-0 right-0 " src="/ico-info.svg" alt="" />
                    </div>
                  </div>

                  <img class="w-full" src="/image.png" alt="" /><img
                    class="w-full px-2 -mt-14 asbsolute"
                    src="/bottom controls.svg"
                    alt=""
                  />
                </div>
              </div>
              <div class="w-full space-y-4">
                <div class="font-semibold ">
                  Blind Woodturner: Turning passion into fine art
                </div>
                <div class="font-medium text-white text-opacity-50">
                  576,969 views . 3 weeks ago
                </div>
                <div class="max-w-lg ">
                  Chris Fisher, also known as the Blind Woodturner, learned his
                  craft by listening to hundreds of hours of YouTube videos and
                  experimenting in his workshop. Now he’s a YouTube creator
                  himself, sells his products worldwide, and does demonstrations
                  all around the country.
                </div>
              </div>
            </div>
            <div class="flex py-3 space-x-6">
              <div class="ml-5 text-xl font-semibold ">
                Search On ‘21
              </div>
              <div class="flex items-center space-x-3 ">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 4L18 12L6 20V4Z" fill="#AAAAAA" />
                </svg>
                <div class="text-lg uppercase">
                  Play all
                </div>
              </div>
            </div>
            <!--  -->
            <div class="grid grid-cols-5 gap-4 px-4">
              <!-- Thumbnail-Images.png -->
              <Card :showImgae="false" v-for="i in 15" :key="i" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
