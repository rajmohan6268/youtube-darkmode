<template>
  <div>
    <Headercomponent />
    <div class="container flex items-start w-full mx-auto mt-6 ">
      <!-- <div class=""></div> -->
      <div class="w-8/12 pr-6">
        <img class="w-full" alt="" src="/Youtube player.png">
        <div class="my-4 space-y-2 text-lg">
          <div class="text-xl">
            Blind Woodturner: Turning passion into fine art
          </div>
          <div class="flex items-center justify-between">
            <div class="text-white text-opacity-50">
              576,969 views . Oct 8, 2021
            </div>
            <div class="flex items-center justify-between space-x-6">
              <div class="flex items-center">
                <img class="w-8 mr-2" src="/Liked.svg" alt="">1.7 K
              </div>
              <div class="flex items-center">
                <img class="w-8 mr-2" src="/DisLiked.svg" alt="">632
              </div>
              <div class="flex items-center">
                <img class="w-8 mr-2" src="/Share.svg" alt="">share
              </div>
              <div class="flex items-center">
                <img class="w-8 mr-2" src="/Save.svg" alt="">save
              </div>
              <div class="">
                <img class="w-8" src="/More.svg" alt="">
              </div>
            </div>
          </div>
        </div>
        <!--  -->
        <div class="flex">
          <div class="w-32">
            <img class="" src="/lol.png">
          </div>

          <div class="">
            <div class="flex items-center justify-between w-full pl-4">
              <div class="">
                <div class="">
                  Marcus Levin
                </div>
                <div class="">
                  1.2M subscribers
                </div>
              </div>
              <div class="px-6 py-2 font-medium uppercase bg-red">
                Subscribes
              </div>
            </div>
            <div class="mt-5">
              Chris Fisher, also known as the Blind Woodturner, learned his
              craft by listening to hundreds of hours of YouTube videos and
              experimenting in his workshop. Now he’s a YouTube creator himself,
              sells his products worldwide, and does demonstrations all around
              the country.
              <div class="text-lg font-medium ">
                show more
              </div>
            </div>
          </div>
        </div>
        <div class="py-4">
          <div class="flex items-center text-lg">
            286 Comments
            <span
              class="ml-8 mr-3"
            ><svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 6H3V5H21V6ZM15 11H3V12H15V11ZM9 17H3V18H9V17Z"
                fill="white"
              />
            </svg>
            </span>
            Sort by
          </div>

          <div class="flex items-center ">
            <div class="">
              <img class="w-12" src="/ua.png" alt="">
            </div>
            <div class="w-full ">
              <input
                class="w-full p-4 border-b border-white bg-dark border-opacity-20"
                type="text"
                placeholder=" Add a public comment..."
              >
            </div>
          </div>

          <div v-for="i in 3" :key="i" class="flex items-start my-3">
            <div class="mr-3">
              <img class="w-12 rounded-full" src="/cmd.png" alt="">
            </div>
            <div class="w-full ">
              <div class="font-semibold ">
                James Gouse
                <span class="font-normal text-white text-opacity-50">
                  8 hours ago</span>
              </div>
              <div class="my-1">
                Wow, world is full of different skills
              </div>
              <div class="flex items-center space-x-3">
                <div class="flex items-center">
                  <img src="/liked.png" class="w-4 mr-2">3
                </div>
                <div class="flex items-center pr-4">
                  <img src="/DisLiked.png" class="w-4 mr-2">3
                </div>
                <div class="uppercase ">
                  reply
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-4/12">
        <!--  -->
        <div class="space-x-4 ">
          <span class="px-5 py-2 text-black bg-white rounded-full">All </span>
          <span
            class="px-5 py-2 text-white bg-white border border-white rounded-full bg-opacity-20"
          >From Marcus Levin
          </span>
        </div>
        <div class="w-full mt-6 space-y-5">
          <Minicard v-for="i in 16" :key="i" />
        </div>
      </div>
    </div>
  </div>
</template>
