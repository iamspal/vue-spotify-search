import { shallowMount } from '@vue/test-utils';
import InputField from '@/components/form/InputField.vue';

describe('InputText.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(InputField, {
      props: {
        type: 'text',
        placeHolder: 'Search',
        modelValue: '',
        style: {
          backgroundImage: 'url(lupa.png)',
        },
      },
    });
  });

  it('Should emit input and change event', async () => {
    const input = wrapper.find('input');
    await input.setValue('The weekend');
    expect(wrapper.emitted()).toHaveProperty('input');
    expect(wrapper.emitted()).toHaveProperty('change');
  });

  it('Should add styles to input', async () => {
    const input = wrapper.find('input');
    expect(input.attributes('style')).toEqual('background-image: url(lupa.png);');
  });
});
