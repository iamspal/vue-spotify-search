import { shallowMount } from '@vue/test-utils';
import Tabs from '@/components/ui/Tabs.vue';

describe('Tabs.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Tabs, {
      props: {
        tabs: [
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
        ],
        activeTab: 'Albums',
      },
    });
  });

  it('Should emit update event', async () => {
    const li = wrapper.find('li');
    await li.trigger('click');
    expect(wrapper.emitted()).toHaveProperty('update');
  });

  it('Should add active class to clicked tab', async () => {
    const li = wrapper.find('li');
    await li.trigger('click');
    expect(li.attributes('class')).toContain('active');
  });

  it('Should show tab title correctly', async () => {
    await wrapper.setProps({
      tabs: [
        {
          name: 'Albums',
          list: [],
        },
      ],
    });
    expect(wrapper.text()).toEqual('Albums');
  });
});
