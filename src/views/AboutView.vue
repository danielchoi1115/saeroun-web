<template>
  <section
    class="py-12 overflow-hidden bg-primary bg-opacity-80 md:py-20 bg-slate-800"
    sectionname="testimonials"
    id="k1nwdj9hxi"
    sectioncomponent="Testimonials"
    sortorder="2"
    site-name="Private English Learning Center"
    site-id="igy3Tk0Qo5fsN9PVaT5C"
    site-logo-size="md"
  >
    <div class="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <svg
        class="absolute transform top-full right-full translate-x-1/3 -translate-y-1/4 lg:translate-x-1/2 xl:-translate-y-1/2 rotate-3"
        width="404"
        height="404"
        fill="none"
        viewBox="0 0 404 404"
        role="img"
        aria-labelledby="svg-squares"
      >
        <title id="svg-squares">squares</title>
        <defs>
          <pattern id="ad119f34-7694-4c31-947f-5c9d249b21f3" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-primary" fill="currentColor"></rect>
          </pattern>
        </defs>
        <rect width="404" height="404" fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)"></rect>
      </svg>
      <div class="relative">
        <blockquote>
          <div class="max-w-3xl mx-auto text-xl font-bold leading-7 text-center text-white md:leading-10 md:text-3xl text-shadow-sm">
            <p>"안녕하세요. 새로운 잉글리시 학원 입니다"</p>
          </div>
        </blockquote>
      </div>
    </div>
  </section>

  <section class="bg-white dark:bg-gray-900">
    <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
      <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">인사말</h2>
        <p class="mb-4">
          소개 1 We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big
          enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the
          scope you want at the pace you need.
        </p>
        <p>소개 2 We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
      </div>
      <div class="grid grid-cols-2 gap-4 mt-8">
        <img class="w-full rounded-lg object-scale-down" src="@/assets/demo.png" alt="office content 1" />
        <img class="mt-4 w-full lg:mt-10 rounded-lg object-scale-down" src="@/assets/demo2.png" alt="office content 2" />
      </div>
    </div>
  </section>

  <section class="bg-white dark:bg-gray-900">
    <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">선생님 소개</h2>
      </div>
      <div class="inline sm:flex">
        <div v-for="teacher in teachers" :key="teacher.name" class="m-3">
          <img
            class="h-auto transition-all duration-200 rounded-lg shadow-lg hover:scale-105"
            :src="teacher.src"
            :alt="teacher.description"
          />
          <div class="flex justify-center text-lg font-bold mt-6 sm:mb-16">{{ teacher.subject }} - {{ teacher.name }} 선생님</div>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-white dark:bg-gray-900">
    <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
      <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">오시는 길</h2>
        <p class="mb-4">
          We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough
          to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you
          want at the pace you need.
        </p>
        <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
      </div>
      <div class="grid grid-cols-2 gap-4 mt-8">
        <img class="w-full rounded-lg object-scale-down" src="@/assets/demo.png" alt="office content 1" />
        <img class="mt-4 w-full lg:mt-10 rounded-lg object-scale-down" src="@/assets/demo2.png" alt="office content 2" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const teachers = [
  {
    name: '최성환',
    subject: '영어',
    src: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png',
    description: ''
  },
  {
    name: '우민주',
    subject: '영어',
    src: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png',
    description: ''
  },
  {
    name: 'ㅇㅇㅇ',
    subject: '수학',
    src: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png',
    description: ''
  }
]
</script>
