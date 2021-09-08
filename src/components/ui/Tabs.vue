<template>
  <div>
    <ul role="tablist">
      <li v-for="tab in tabs"
          :key="tab"
          :class="{'active': activeTab === tab.name}"
          @click="$emit('update',tab)"
          role="presentation">
          <a :aria-selected="activeTab === tab" role="tab">{{tab.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  props: {
    tabs: {
      type: Array,
      required: true,
    },
    activeTab: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils";
@import "../../assets/scss/variables";
@import "../../assets/scss/mixin/responsive-breakpoints";

ul {
  display: flex;
  margin-top: 30px;
  user-select: none;
  padding: 0;

  @include for-tablet-up {
    margin-top: 70px;
  }

  li {
    list-style: none;
    padding: 12px 22px;
    background: white;
    cursor: pointer;
    border-right: 1px solid $bgBorder;

    @include for-tablet-up {
      padding: 15px 35px;
    }

    &.active {
      border-bottom: 3px solid $primaryColor;
    }

    &:last-child {
      border-right: none;
    }
  }
}
</style>
