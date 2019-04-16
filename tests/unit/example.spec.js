import { suite, test } from '@testdeck/jest'
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

@suite
class HelloWorldTests {

  @test
  'renders props.msg when passed'() {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  }
}

