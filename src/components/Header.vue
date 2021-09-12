<template>
  <header>
    <slot></slot>
  </header>
</template>

<style lang="scss">
@import '../assets/scss/utils';
@import '../assets/scss/mixin/responsive-breakpoints';

header {
  background: $primaryColor;
  color: white;
  padding: 10px;
  h1 {
    margin: 0;
    @extend %font-size-h1;
    @extend %align-item-center;
    @include for-tablet-up {
      justify-content: flex-start;
    }

    img {
      margin-right: 10px;
      width: 32px;
      height: 32px;
    }
  }
}
</style>
