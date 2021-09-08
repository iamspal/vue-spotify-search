<template>
  <div class="home">
    <div class="container">
      <div class="search-container">
        <InputField v-model="searchValue"
                    @input="search"
                    :style="getSearchInputBackgroundStyles()"
                    type="text"
                    aria-label="Search"
                    place-holder="Search albums, tracks and artists"/>
      </div>

      <div class="tabs">
        <!-- Tabs !-->
        <Tabs :tabs="tabs"
              :active-tab="activeTab"
              @update="updateActiveTab">
        </Tabs>

        <!-- Tab contents Albums !-->
        <div v-for="tab in tabs"
             :key="tab.name">
          <AlbumList :items="tab.list"
                     v-if="activeTab === tab.name">
          </AlbumList>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import SEARCH_CATALOG from '../store/modules/catalog/catalog.actions.types';
import InputField from '../components/form/InputField.vue';
import AlbumList from '../components/AlbumList.vue';
import Tabs from '../components/ui/Tabs.vue';
import magnifyingGlassIcon from '../assets/img/lupa.png';

export default {
  name: 'Home',
  components: {
    InputField,
    AlbumList,
    Tabs,
  },
  setup() {
    const store = useStore();

    // Tabs
    const activeTab = ref('Albums');
    const tabs = ref([
      {
        name: 'Albums',
        list: [],
      },
      {
        name: 'Artists',
        list: [],
      },
      {
        name: 'Tracks',
        list: [],
      },
    ]);

    const updateActiveTab = (newActiveTab) => {
      activeTab.value = newActiveTab.name;
    };

    // Search
    const searchValue = ref('');

    const search = async () => {
      await store.dispatch(SEARCH_CATALOG, searchValue.value);
      tabs.value[0].list = store.state.catalog.albums;
      tabs.value[1].list = store.state.catalog.artists;
      tabs.value[2].list = store.state.catalog.tracks;
    };

    const getSearchInputBackgroundStyles = () => ({
      backgroundImage: `url(${magnifyingGlassIcon})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'left center',
      backgroundPositionX: '16px',
    });

    return {
      searchValue,
      search,
      getSearchInputBackgroundStyles,
      activeTab,
      tabs,
      updateActiveTab,
    };
  },
};
</script>

<style lang="scss" scoped>
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

  .tabs {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
