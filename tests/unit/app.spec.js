import { shallowMount } from '@vue/test-utils'
import App from '../../src/App.vue'
import rickMortyBack from '../../src/rickMortyBack';
import RepresentationCharacter from '../../src/components/RepresentationCharacter';

jest.mock('../../src/rickMortyBack', () => ({
  getCharacterById: jest.fn(),
}));

const msg = 'new message'
const factory = () => shallowMount(App);

describe('Given App page starts', () => {
  let wrapper;

  beforeAll(() => {
    jest.clearAllMocks();
    wrapper = factory();
  });

  describe('When msgWithCount is called', () => {
    let result;

    beforeAll(async () => {
      wrapper.setData({ characterCount: 10 });

      result = wrapper.vm.msgWithCount;
    });

    it('And rickMortyBack.getCharacterById is called', () => {
      expect(rickMortyBack.getCharacterById).toHaveBeenCalledWith(10);
    });
  });

  describe('When msgWithCount is called', () => {
    let wrapper2;

    beforeAll(async () => {
      wrapper2 = factory();
      wrapper2.setData({ characterCount: 1 });
    });

    it('And rickMortyBack.getCharacterById is called', () => {
      expect(wrapper2.findComponent(RepresentationCharacter).isVisible()).toBeTruthy()
    });
  });
})
