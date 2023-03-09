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

  <SSection>
    <SHeading2>인사말</SHeading2>
    <SFontWarpper>
      <SBody centered="true">
        소개 1 We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big
        enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope
        you want at the pace you need.
      </SBody>
      <SBody centered="true">
        소개 2 We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.
      </SBody>
    </SFontWarpper>
  </SSection>

  <SSection>
    <SHeading2>선생님 소개</SHeading2>

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
  </SSection>

  <SSection>
    <SHeading2>오시는 길</SHeading2>
    <div class="flex justify-center">
      <div class="w-full max-w-screen-md h-44 bg-slate-600">dd</div>
    </div>

    <SBody>주소, 대중교통 </SBody>
  </SSection>
</template>

<script setup lang="ts">
import { SHeading2, SBody, SSection, SFontWarpper } from '@/components'

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
