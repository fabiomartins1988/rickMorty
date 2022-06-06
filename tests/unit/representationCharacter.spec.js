import { shallowMount } from '@vue/test-utils'
import RepresentationCharacter from '@/components/RepresentationCharacter.vue'

const msg = 'new message'
const factory = () => shallowMount(RepresentationCharacter, {
  props: { msg }
});

describe('Given RepresentationCharacter page starts', () => {
  let wrapper;

  beforeAll(() => {
    jest.clearAllMocks();
    wrapper = factory();
  });

  it('renders props.msg when passed', () => {
    expect(wrapper.text()).toMatch(msg)
  })
})
