<script setup lang="ts">
import {
  getAboutCompanyData,
  getContactData,
  getWelcomeToMyPageData,
} from '~/api'

const aboutCompanyData = await getAboutCompanyData()
const welcomeToMyPageData = await getWelcomeToMyPageData()
const { facebookLink, email, phone } = await getContactData()
</script>

<template>
  <div class="flex flex-col w-full gap-12">
    <article
      class="flex flex-col lg:flex-row justify-evenly min-h-[60vh] items-center lg:items-start"
    >
      <header>
        <!-- This is for SEO optimalization -->
        <div class="hidden">
          <h1>Biuro Rachunkowe</h1>
          <p>Joanna Makowska</p>
        </div>

        <img :src="'/logo.png'" alt="Biuro Rachunkowe" class="mt-36 sm:mt-0" />
      </header>

      <text-card
        class="lg:mt-48 md:w-128"
        :content="welcomeToMyPageData.content"
      >
        <template #header> {{ welcomeToMyPageData.header }} </template>
      </text-card>
    </article>

    <article class="flex flex-col gap-16">
      <section
        class="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12"
      >
        <img
          :src="'/kibr-logo.png'"
          alt="Biuro Rachunkowe"
          class="md:w-1/2 xl:w-1/3"
        />

        <text-card
          class="lg:w-1/2 lg:mt-20"
          :content="aboutCompanyData.content"
        >
          <template #header>{{ aboutCompanyData.header }}</template>
        </text-card>
      </section>
    </article>

    <article class="w-full flex justify-center lg:justify-start">
      <text-card class="w-[350px] lg:w-1/4">
        <template #header>Kontakt</template>

        <div class="flex flex-col gap-4 items-start">
          <contact-link :href="facebookLink" icon="mdi-facebook">
            Facebook
          </contact-link>

          <contact-link :href="`mailto:${email}`" icon="mdi-at">
            {{ email }}
          </contact-link>

          <contact-link :href="`tel:${phone}`" icon="mdi-phone">
            {{ phone }}
          </contact-link>
        </div>
      </text-card>
    </article>
  </div>
</template>
