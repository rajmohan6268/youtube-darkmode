<template>
  <div>
    <div class="container flex items-start w-full px-8 mx-auto mt-6 2xl:px-0 ">
      <!-- <div class=""></div> -->
      <div class="w-8/12 pr-6">
        <div class="ytb">
          <iframe
            class="w-full responsive-iframe"
            src="https://www.youtube.com/embed/8FAUEv_E_xQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
        <!-- <img class="w-full" alt="" src="/Youtube player.png"> -->
        <div class="my-4 space-y-2 text-lg">
          <div class="text-xl">
            Arabic Kuthu – Official Lyric Video | Beast | Thalapathy Vijay | Sun
            Pictures | Nelson | Anirudh
          </div>
          <div class="flex items-center justify-between">
            <div class="text-white text-opacity-50">
              17,669,343 viewsFeb 14, 2022
            </div>
            <div class="flex items-center justify-between space-x-6">
              <div class="flex items-center">
                <img class="w-8 mr-2" src="/Liked.svg" alt="">1.9 M
              </div>
              <div class="flex items-center">
                <img class="w-8 mr-2" src="/DisLiked.svg" alt="">
                DISLIKE
              </div>
              <div class="flex items-center">
                <img class="w-8 mr-2" src="/Share.svg" alt="">SHARE
              </div>
              <div class="flex items-center">
                <img class="w-8 mr-2" src="/Save.svg" alt="">SAVE
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
            <img
              class="rounded-full"
              src="https://yt3.ggpht.com/ytc/AKedOLSVyNuygCgHfKhqpBqa8KNb7DWU4DBuUlbjfbtf9Q=s48-c-k-c0x00ffffff-no-rj"
            >
          </div>

          <div class="">
            <div class="flex items-center justify-between w-full ">
              <div class="">
                <div class="">
                  Sun TV
                </div>
                <div class="">
                  15.5M subscribers
                </div>
              </div>
              <div class="px-6 py-2 font-medium uppercase bg-red">
                Subscribes
              </div>
            </div>
            <div class="mt-5">
              Watch the official lyrical video of "Arabic Kuthu" - 1st single
              from Thalapathy Vijay’s #BEAST by Sun Pictures, Lyrics by
              Sivakarthikeyan, Directed by Nelson & Music by Anirudh
              Ravichander.

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
          <Minicard v-for="(i, index) in cards" :key="index" :card="i" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      cards: [
        {
          img: '1.png'
        },
        {
          img: '2.png'
        },
        {
          img: '3.png'
        },
        {
          img: '4.png'
        },
        {
          img: '5.png'
        },
        {
          img: '6.png'
        },
        {
          img: '7.png'
        },
        {
          img: '8.png'
        }
      ]
    }
  }
}
</script>
