<template>
  <div class="flex flex-col flex-shrink-0 w-56">
    <div
      class="p-2.5 w-full bg-white bg-opacity-10 flex items-center space-x-3"
    >
      <img src="/home.svg" class="" alt="">
      <div class="pt-0.5">
        <n-link to="/chanel">
          Home
        </n-link>
      </div>
    </div>
    <div class="p-2.5 w-full  flex items-center space-x-3">
      <img src="/explorer.svg" class="" alt="">
      <div class="pt-0.5">
        <n-link to="/chanel">
          Explore
        </n-link>
      </div>
    </div>
    <div class="p-2.5 w-full  flex items-center space-x-3">
      <img src="/subscription.svg" class="" alt="">
      <div class="pt-0.5">
        <n-link to="/chanel">
          Subscriptions
        </n-link>
      </div>
    </div>

    <div class="w-full border-b border-white border-opacity-10" />

    <div
      v-for="(i, index) in menu_list"
      :key="index"
      class="p-2.5 w-full flex items-center space-x-3"
    >
      <img :src="i.icon" class="" alt="">
      <div class="pt-0.5">
        <n-link to="/chanel">
          {{ i.name }}
        </n-link>
      </div>
    </div>
    <div class="w-full border-b border-white border-opacity-10" />

    <div class="py-2 font-semibold text-white text-opacity-40 pl-2.5">
      SUBSCRIPTIONS
    </div>
    <div
      v-for="(i, index) in SUBSCRIPTIONS"
      :key="index"
      class="p-2.5 w-full flex items-center space-x-3"
    >
      <img :src="i.avatar" class="rounded-full" alt="">
      <div class="pt-0.5">
        <n-link to="/chanel">
          {{ i.name }}
        </n-link>
      </div>
    </div>
    <div class="w-full border-b border-white border-opacity-10" />
    <div class="py-2 font-semibold text-white text-opacity-40 pl-2.5">
      MORE FROM YOUTUBE
    </div>
    <div
      v-for="(i, index) in MORE_FROM_YOUTUBE"
      :key="index"
      class="p-2.5 w-full flex items-center space-x-3"
    >
      <img :src="i.avatar" class="" alt="">
      <div class="pt-0.5">
        {{ i.name }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      menu: [
        {
          name: 'Explore',
          icon: '/explore.svg'
        },
        {
          name: 'Subscriptions',
          icon: '/subscriptions.svg'
        }
      ],
      menu_list: [
        {
          name: 'Lİbrary',
          icon: '/library.svg'
        },
        {
          name: 'History',
          icon: '/history.svg'
        },
        {
          name: ' Your Videos',
          icon: '/Icon.svg'
        },
        {
          name: 'Watch Later',
          icon: '/watchLater.svg'
        },
        {
          name: 'Liked Videos',
          icon: '/liked.svg'
        },
        {
          name: 'Show More',
          icon: '/arrowBottom.svg'
        }
      ],
      SUBSCRIPTIONS: [
        {
          name: 'James Gouse',
          avatar: '/av1.png'
        },
        {
          name: 'Alan Cooper',
          avatar: '/av2.png'
        },
        {
          name: 'Marcus Levin',
          avatar: '/av3.png'
        },
        {
          name: 'Alexis Sears',
          avatar: '/av4.png'
        },
        {
          name: 'Jesica Lambert',
          avatar: '/av5.png'
        },
        {
          name: 'Anna White',
          avatar: '/av6.png'
        },
        {
          name: 'Skylar Dias',
          avatar: '/av7.png'
        },
        {
          name: 'Show 13 more',
          avatar: '/arrowBottom.svg'
        }
      ],
      MORE_FROM_YOUTUBE: [
        {
          name: 'Youtube Premium',
          avatar: '/premium.svg'
        },
        {
          name: 'Gaming',
          avatar: '/play.svg'
        },
        {
          name: 'Live',
          avatar: '/live.svg'
        }
      ]
    }
  },
  methods: {}
}
</script>
