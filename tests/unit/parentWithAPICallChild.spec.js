import { shallowMount, mount } from '@vue/test-utils'
import ParentWithAPICallChild from '@/components/ParentWithAPICallChild.vue'
import ComponentWithAsyncCall from '@/components/ComponentWithAsyncCall.vue'

describe('Given ParentWithAPICallChild.vue to loads', () => {

  // describe('When renders mount test with mount', () => {
  //   let wrapperWithMount;

  //   beforeEach(() => {
  //     wrapperWithMount = mount(ParentWithAPICallChild)
  //   });

  //   it('Then renders with mount and does initialize API call', () => {
  //     expect(wrapperWithMount.findComponent(ComponentWithAsyncCall).exists()).toBe(true)
  //   })
  // });

  describe('When renders with mount test with shallouw', () => {
    let wrapperWithShallowMount;

    beforeEach(() => {
      wrapperWithShallowMount = shallowMount(ParentWithAPICallChild)
    });

    it('Then renders with shallowMount and does not initialize API call', () => {
      expect(wrapperWithShallowMount.findComponent(ComponentWithAsyncCall).exists()).toBe(true)
    })
  });

});
