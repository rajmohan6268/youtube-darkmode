<template>
  <div class='relative '>
    <div
      v-if='show'
      :class='currentTheme.bg'
      class='absolute z-50 flex flex-col justify-around h-full min-h-screen p-12 text-xl xl:hidden ten square square-animation'
    >
      <div @click='show = false' class=''>Home</div>
      <div @click='show = false' class=''>Shop</div>
      <div @click='show = false' class=''>Wishlist</div>
      <div @click='show = false' class=''>Log in</div>
      <div @click='show = false' class='mx-auto rounded-full '>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          class='w-6 h-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            d='M6 18L18 6M6 6l12 12'
          />
        </svg>
      </div>
    </div>
    <!-- {{theme}} -->
    <!-- -->
    <div class='hidden b-g-g b-g-y'></div>
    <div
      :class='currentTheme.bg'
      class='min-h-screen transition-all duration-1000 ease-in-out'
    >
      <img
        src='/bg.png'
        class='absolute z-40 flex w-full h-full mix-blend-multiply'
        alt=''
      />
      <img
        class='absolute top-0 right-0 z-50 w-16 md:w-20 xl:w-32'
        src='/rt.png'
        alt=''
      />
      <img
        class='absolute bottom-0 left-0 z-50 w-20 md:w-48'
        src='/lb.png'
        alt=''
      />
      <div
        class='container z-50 flex items-center justify-between mx-auto mt-2 sm:mt-8'
      >
        <div
        style="color:#fff;"
          class='ml-2 text-3xl font-black sm:ml-10 xl:ml-20 2xl:ml-0'
        >
          PHILIPS
        </div>
        <div
          class='items-center hidden p-3 px-10 mr-32 space-x-8 text-sm xl:flex xl:text-lg xl:px-16 xl:mr-40 xl:space-x-24 2xl:px-20 2xl:p-4 ten'
        >
          <div class=''>Home</div>
          <div class=''>Shop</div>
          <div class=''>Wishlist</div>
          <div class=''>Log in</div>
        </div>
        <div @click='show = !show' class='mr-2 xl:hidden'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            class='w-6 h-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M4 6h16M4 12h16m-7 6h7'
            />
          </svg>
        </div>
      </div>
      <div
        class='z-50 flex flex-col-reverse xl:grid md:grid-cols-2 xm:mt-40 place-content-center mt place-items-center xl:mt-0'
      >
        <div class='z-50 max-w-lg lg:max-w-xl md:pl-10 2xl:max-w-2xl'>
          <div class='md:mb-16 2xl:mb-40'>
            <img
              class='w-6/12 mx-auto md:w-auto'
              :src='`/${currentTheme.text}`'
              alt=''
            />
            <!-- tracking-widest -->
            <div
              style=''
              class='mt-2 text-lg font-light tracking-widest uppercase md:text-xl md:mt-4 xl:text-2xl tw'
            >
              true stereo Sounds
            </div>
          </div>
          <div
            class='flex items-center justify-center mb-8 space-x-5 text-lg cursor-pointer '
          >
            <div class=''>Choose colour</div>
            <div
              @click='set(0)'
              class='box-content w-5 h-5 border-4 border-white rounded-full bg-green md:h-7 md:w-7'
            ></div>
            <div
              @click='set(1)'
              class='box-content w-5 h-5 border-4 border-white rounded-full bg-orange md:h-7 md:w-7'
            ></div>
            <div
              @click='set(2)'
              class='box-content w-5 h-5 border-4 border-white rounded-full bg-gray md:h-7 md:w-7'
            ></div>
          </div>
        </div>
        <div class=''>
          <!-- <img
          class='max-w-xl drop-shadow-2xl'
          src='/green.png'
          alt=''
        />   -->
          <img
            class='hidden max-w-xl drop-shadow-2xl'
            src='/red.png'
            alt=''
          />
          <div class=''>
            <div class='max-w-3xl card'>
              <div class='dcard'>
                <div class='trigger'></div>
                <div class='trigger'></div>
                <div class='trigger'></div>
                <div class='trigger'></div>
                <div class='trigger'></div>
                <div class='trigger'></div>
                <div class='trigger'></div>
                <div class='trigger'></div>
                <div class='trigger'></div>

                <div class='card' style=''>
                  <img
                    class='w-8/12 mx-auto lg:w-10/12 md:w-auto md:max-w-sm drop-shadow-2xl 2xl:max-w-xl'
                    :src='`/${currentTheme.image}`'
                    alt=''
                  />
                </div>
              </div>
            </div>
          </div>
          <img
            class='-mt-20 rounded-full opacity-80 blur-2xl'
            src='/sh2.png'
            alt=''
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      theme: [
        {
          bg: 'b-g-g',
          text: 'beats-w.png',
          image: 'green.png'
        },
        {
          bg: 'b-g-y',
          text: 'beats-w.png',
          image: 'red.png'
        },
        {
          bg: '',
          text: 'beats-b.png',
          image: 'green.png'
        }
      ],
      currentTheme: {
        bg: 'b-g-g',
        text: 'beats-b.png',
        image: 'green.png'
      }
    }
  },
  methods: {
    set (val) {
      this.currentTheme = this.theme[val]
    }
  }
}
</script>
<style scoped>
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}

.bg {
  background-image: url('/bg.png');
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;

  z-index: 50;
}

div.ten:before {
  content: '';
  position: absolute;
  border: 10px dashed #00000065;
  top: -8px;
  bottom: -8px;
  left: -8px;
  right: -8px;
}

div {
  overflow: hidden;
  position: relative;

  text-align: center;
}
.bg-green {
  background: #b2d306;
}
.bg-orange {
  background: #ffb800;
}
.bg-gray {
  background: #c4c4c4;
}
.b-g-g {
  background: radial-gradient(
    100% 316.05% at 26.48% 179.4%,
    #b2d306 0%,
    #e8ff72 69.74%,
    #b2d306 100%
  );
}
.b-g-y {
  background: radial-gradient(
    100% 316.05% at 0% 52.41%,
    #ffb800 0%,
    #ffcc47 69.74%,
    #ffb800 100%
  );
}
* {
  transition: all 1s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.card {
  display: block;

  transform-style: preserve-3d;
}
.dcard {
  position: relative;
  display: block;
  perspective: 700px;
}

.trigger {
  position: absolute;
  height: 33.333333%;
  width: 33.333333%;
  display: block;
  z-index: 2;
}
.trigger:nth-child(1) {
  left: 0%;
  top: 0%;
}
.trigger:nth-child(1):hover ~ .card {
  transform: rotateY(8deg) rotateX(-5deg);
}
.trigger:nth-child(2) {
  left: 33.333333%;
  top: 0%;
}
.trigger:nth-child(2):hover ~ .card {
  transform: rotateY(0deg) rotateX(-5deg);
}
.trigger:nth-child(3) {
  left: 66.666666%;
  top: 0%;
}
.trigger:nth-child(3):hover ~ .card {
  transform: rotateY(-8deg) rotateX(-5deg);
}
.trigger:nth-child(4) {
  left: 0%;
  top: 33.333333%;
}
.trigger:nth-child(4):hover ~ .card {
  transform: rotateY(8deg);
}
.trigger:nth-child(5) {
  left: 33.333333%;
  top: 33.333333%;
}
.trigger:nth-child(5):hover ~ .card {
  transform: rotateY(0deg) rotateX(0deg);
}
.trigger:nth-child(6) {
  left: 66.666666%;
  top: 33.333333%;
}
.trigger:nth-child(6):hover ~ .card {
  transform: rotateY(-8deg) rotateX(0deg);
}
.trigger:nth-child(7) {
  left: 0%;
  top: 66.666666%;
}
.trigger:nth-child(7):hover ~ .card {
  transform: rotateY(8deg) rotateX(5deg);
}
.trigger:nth-child(8) {
  left: 33.333333%;
  top: 66.666666%;
}
.trigger:nth-child(8):hover ~ .card {
  transform: rotateY(0deg) rotateX(5deg);
}
.trigger:nth-child(9) {
  left: 66.666666%;
  top: 66.666666%;
}
.trigger:nth-child(9):hover ~ .card {
  transform: rotateY(-8deg) rotateX(5deg);
}

@media (min-width: 768px) {
  .tw {
    letter-spacing: 0.7em;
  }
}
@media (min-width: 1440px) {
  .mt {
    margin-top: 60px;
  }
}
/* @media (min-width: 1540px) {
  .mt {
    margin-top: 60;
  }
} */
@media (min-width: 2000px) {
  .mt {
    margin-top: 200px;
  }
}

.square {
}
@keyframes wipe-enter {
  0% {
    transform: scale(0, 0.025);
  }
  50% {
    transform: scale(1, 0.025);
  }
}
@media (prefers-reduced-motion: no-preference) {
  .square-animation {
    animation: wipe-enter 1s 1;
  }
}
</style>
