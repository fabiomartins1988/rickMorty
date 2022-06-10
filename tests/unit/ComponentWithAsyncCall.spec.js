import { shallowMount } from '@vue/test-utils'
import ComponentWithAsyncCall from '@/components/ComponentWithAsyncCall.vue'

const factory = () => shallowMount(ComponentWithAsyncCall);

describe('Given ComponentWithAsyncCall page starts', () => {
  let wrapper;

  beforeAll(() => {
    jest.clearAllMocks();
    wrapper = factory();
  });

  it('renders props.msg when passed', () => {
    //expect(wrapper.text()).toMatch(msg)
  })
})
