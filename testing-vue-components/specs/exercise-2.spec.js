import ExerciseForm from '@/exercise-2';
import { mount } from '@vue/test-utils';
import { nextTick } from 'vue'

test('follow the user through the form', async () => {
    const wrapper = mount(ExerciseForm)
    expect(wrapper).toMatchSnapshot()

    const form = wrapper.find('form')

    const input = form.find('input')
    const tasksList = wrapper.find('li')

    input.setValue('my todo')
    form.trigger('submit')

    await wrapper.vm.$nextTick()

    expect(wrapper).toMatchSnapshot()

    const doneButton = wrapper.find('li').find('button')
    doneButton.trigger('click')

    await wrapper.vm.$nextTick()

    expect(wrapper).toMatchSnapshot()
})