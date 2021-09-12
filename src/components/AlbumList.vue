<template>
  <div>
    <ul class="album-list">
      <li v-for="item in items"
          :key="item.id">
        <img :src="item.image" :alt="item.name" v-if="item.image"/>
        <p v-if="item.name">{{item.name}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ImageList',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/utils";
@import "../assets/scss/mixin/responsive-breakpoints";

ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 15px;

  li {
    width: 48%;
    margin-bottom: 20px;

    @include for-tablet-up {
      width: 24%;
    }

    img {
      width: 100%;
      border-radius: 10px;
      object-fit: cover;
      max-height: 266px;
    }

    p {
      @extend %font-size-p;
      margin-top: 12px;
      color: white;
      font-weight: bold;
    }
  }
}
</style>
