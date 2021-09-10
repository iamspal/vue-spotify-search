import { mount } from '@vue/test-utils';
import Home from '@/views/Home.vue';
import CreateStore from '@/store';
import catalog from './catalog.mock';

// Mock fetch results
global.fetch = jest.fn(() => ({
  ok: true,
  json: () => catalog,
}));

describe('Home.vue', () => {
  let wrapper;
  let tabs;
  beforeEach(async () => {
    wrapper = mount(Home,
      {
        global: {
          plugins: [CreateStore],
        },
      });

    const searchInput = await wrapper.find('input');
    await searchInput.setValue('The weekend');
    // Find tabs
    tabs = wrapper.getComponent({ name: 'Tabs' });
  });

  it('Should list albums The Weekend (Funk Wav Remix)', async () => {
    const albumName = await wrapper.find('li p');
    const img = await wrapper.find('li img');
    expect(albumName.text()).toEqual(catalog.albums[0].name);
    expect(img.attributes('src')).toEqual(catalog.albums[0].image);
  });

  it('Should list artist The Weeknd', async () => {
    // Find artist tab and click on it
    await tabs.findAll('li')[1].trigger('click');
    const albumName = await wrapper.find('li p');
    const img = await wrapper.find('li img');
    expect(albumName.text()).toEqual(catalog.artists[0].name);
    expect(img.attributes('src')).toEqual(catalog.artists[0].image);
  });

  it('Should list track The Weekend', async () => {
    // Find tracks tab and click on it
    await tabs.findAll('li')[2].trigger('click');
    const albumName = await wrapper.find('li p');
    const img = await wrapper.find('li img');
    expect(albumName.text()).toEqual(catalog.tracks[0].name);
    expect(img.attributes('src')).toEqual(catalog.tracks[0].image);
  });
});
