import TestComponent from '../src/test.vue'
import { mount, shallowMount } from '@vue/test-utils'
import List from "../src/list"

test('mount a vue component', () => {
    const wrapper = mount(TestComponent, {
        propsData: {
            value: 'VueSchool'
        }
    })
    expect(wrapper).toMatchSnapshot()
})

test('ListComponent', async () => {
    const wrapper = mount(List)
    const movies = wrapper.vm.marvelMovies
    await wrapper.setData({
        marvelMovies: [
            ...movies,
            'Endgame'
        ]
    })
    expect(wrapper).toMatchSnapshot()
})

