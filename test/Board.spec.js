import { mount, createLocalVue } from '@vue/test-utils'
import Board from '@/components/Board.vue'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Board', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Board, {
      computed: {
        words: () => ['a', 'b', 'c']
      }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
