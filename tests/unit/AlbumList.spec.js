import { shallowMount } from '@vue/test-utils';
import Tabs from '@/components/AlbumList.vue';

describe('ImageList.vue', () => {
  let wrapper;
  const item = {
    id: '4QLAtpLNUsHEYrcHXmMIZZ',
    name: 'STAY (with Justin Bieber)',
    image: 'https://i.scdn.co/image/ab67616d00001e0208e30ab6a058429303d75876',
  };
  beforeEach(() => {
    wrapper = shallowMount(Tabs, {
      props: {
        items: [item],
      },
    });
  });

  it('Should contain img tag', async () => {
    const img = wrapper.find('img');
    expect(img.attributes('src')).toEqual(item.image);
  });

  it('Should contain title inside p tag', async () => {
    const p = wrapper.find('p');
    expect(p.text()).toEqual(item.name);
  });
});
