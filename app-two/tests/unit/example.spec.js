import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  let wrapper;
  const msg = 'new message';
  beforeEach(() => {
    wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
    });
  })
  it('renders props.msg when passed', () => {
    expect(wrapper.text()).toMatch(msg);
  });
  
  it('tests counter', async () => {
    const counterText = wrapper.find('.counter-text');
    expect(counterText.text()).toContain('counter: 0');

    const incrementTextButton = wrapper.find('.increment-text-button');
    await incrementTextButton.trigger('click');
    expect(counterText.text()).toContain('counter: 1');
  });


});
