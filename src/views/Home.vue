<template>
  <div class="home">
    <div class="container">
      <div class="search-container">
        <InputField v-model="data.searchValue"
               @change="search"
               :style="getSearchInputBackgroundStyles()"
               type="text"
               aria-label="Search"
               place-holder="Search albums, tracks and artists"/>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';
import InputField from '../components/form/InputField.vue';
import magnifyingGlassIcon from '../assets/img/lupa.png';

export default {
  name: 'Home',
  components: {
    InputField,
  },
  setup() {
    const data = reactive({
      searchValue: '',
    });

    const search = () => {
      console.log(data.searchValue);
    };

    const getSearchInputBackgroundStyles = () => ({
      backgroundImage: `url(${magnifyingGlassIcon})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'left center',
      backgroundPositionX: '16px',
    });

    return { data, search, getSearchInputBackgroundStyles };
  },
};
</script>

<style lang="scss">
@import "../assets/scss/mixin/responsive-breakpoints.scss";
.home {
  margin-top: 50px;
  .search-container {
    width: 100%;
    margin: auto;

    @include for-tablet-up {
      width: 30%;
    }
  }
}
</style>
