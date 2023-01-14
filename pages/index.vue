<script setup lang="ts">
const email = ref('')
const phone = ref('')

onMounted(() => {
  email.value = 'biuro.makowska@gmail.com'
  phone.value = '+48 505 107 100'
})
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

      <text-card class="lg:mt-48 md:w-128">
        <template #header> Witam na mojej stronie </template>

        <p>
          Proponuję Państwu profesjonalne usługi księgowe w atrakcyjnych cenach
          z możliwością odbioru dokumentów od klienta.
        </p>

        <div>
          <p class="font-semibold">Posiadam:</p>

          <ul class="list-disc px-4">
            <li>wieloletnie doświadczenie w obsłudze księgowej firm</li>
            <li>licencję Ministra Finansów</li>
            <li>ubezpieczenie w zakresie odpowiedzialności cywilnej</li>
          </ul>
        </div>
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

        <text-card class="lg:w-1/2 lg:mt-20">
          <template #header>O Firmie</template>

          <p>
            Biuro Rachunkowe Joanna Makowska to certyfikowane biuro, które
            zapewnia swoim klientom profesjonalną obsługę oraz rzetelne i
            fachowe świadczenie usług księgowych.
          </p>

          <p>
            Wieloletnia praca zawodowa, nabyta wiedza teoretyczna i praktyczna
            oraz umiejętności jej wykorzystania to dowód na rzetelną realizację
            usług.
          </p>

          <p>
            Działalność biura rachunkowego to dziś istotna pomoc dla wielu
            przedsiębiorców. Chcemy wychodzić naprzeciw wymaganiom i
            oczekiwaniom, które pojawiają się ze strony przedsiębiorców, dlatego
            oferujemy szeroki zakres usług księgowych i kadrowych w ramach
            prowadzenia KPiR, ksiąg rachunkowych, obsługi płac pracowniczych,
            deklaracji podatkowych, ZUS, kontaktów z Urzędem Skarbowy, rozliczeń
            rocznych PIT oraz pomocy przy działalności gospodarczej.
          </p>

          <p>
            Świadczone przez nas usługi księgowe i kadrowe realizujemy na
            podstawie certyfikatu księgowego wydanego przez Ministra Finansów nr
            26183/01. Posiadamy obowiązkowe i dodatkowe ubezpieczenie OC.
          </p>

          <p>
            Jednocześnie stale poszerzamy swoją merytoryczną wiedzę uczestnicząc
            na bieżąco w organizowanych szkoleniach, chociażby w
            Stowarzyszeniach Księgowych w Polsce. Serdecznie zapraszamy Państwa
            do skorzystania z naszych kompleksowych i elastycznie dopasowanych
            do Państwa potrzeb usług.
          </p>
        </text-card>
      </section>
    </article>

    <article class="w-full flex justify-center lg:justify-start">
      <text-card class="w-[350px] lg:w-1/4">
        <template #header>Kontakt</template>

        <div class="flex flex-col gap-4 items-start">
          <contact-link
            href="https://www.facebook.com/BiuroRachunkoweJoannaMakowska"
            icon="mdi-facebook"
          >
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
