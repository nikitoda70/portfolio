<template>
  <div class="contacts">
      <div class="container">
        <h2 class="block-title">{{ $t('titles.contacts') }}</h2>
        <div class="contacts__wrapper">
          <div class="contacts__img" v-scroll-animation>
            <picture>
              <source srcset="@/assets//img/contacts-mobile.png" media="(max-width: 768px)">
              <img src="@/assets//img/contacts-desktop.png" alt="Me">
            </picture>
          </div>
          <div class="contacts__content" v-scroll-animation>
            <div class="contacts__item">
              <span class="contacts__key">Github:&nbsp;</span>
              <a href="https://github.com/nikitoda70" target="_blank" class="contacts__value">nikitoda70</a>
            </div>
            <div class="contacts__item">
              <span class="contacts__key">Telegram:&nbsp;</span>
              <a href="https://t.me/stfuchump" target="_blank" class="contacts__value">@stfuchump</a>
            </div>
            <div class="contacts__item">
              <span class="contacts__key">{{ $t('contacts.mail') }}:&nbsp;</span>
              <a href="mailto:nikitoda70@gmail.com" target="_blank" class="contacts__value">nikitoda70@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>