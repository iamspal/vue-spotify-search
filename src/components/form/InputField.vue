<template>
  <input :type="type"
         :style="style"
         :value='modelValue'
         :placeholder="placeHolder"
         :aria-label="ariaLabel"
         @input="$emit('update:modelValue', $event.target.value)"
         @change="$emit('change:modelValue', $event.target.value)"/>
</template>

<script>
export default {
  name: 'InputField',
  props: {
    type: {
      type: String,
      required: true,
    },
    modelValue: {
      type: String,
      required: true,
    },
    placeHolder: {
      type: String,
      required: true,
    },
    ariaLabel: {
      type: String,
      required: false,
    },
    style: {
      type: Object,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/utils.scss';

input {
  border: 1px solid #dddd;
  border-radius: 30px;
  width: 100%;
  padding: 15px 45px;
  outline: none;
  color: black;

  &:focus {
    @extend %box-shadow;
  }
}
</style>
