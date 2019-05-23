import { shallowMount } from '@vue/test-utils'
import index from '@/pages/index.vue'
import Board from '@/components/Board.vue'

describe('index', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(index, {
      stubs: {
        Board: true
      }
    })
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders a Board component', () => {
    expect(wrapper.find(Board).exists()).toBe(true)
  })
})
