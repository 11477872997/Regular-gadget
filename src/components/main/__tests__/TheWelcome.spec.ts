import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import mains from '../mains.vue'

describe('mains', () => {
  it('renders properly', () => {
    const wrapper = mount(mains, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
