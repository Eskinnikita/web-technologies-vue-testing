import UserList from '@/exercise-1';
import { mount } from '@vue/test-utils';
import { name } from 'faker'

function getRandomUsers(amount = 1) {
    let i = 1
    const users = []
    while (i <= amount) {
        users.push(name.findName())
        i++
    }
    return users
}

test('component renders the users', async () => {
    const wrapper = mount(UserList, {
        propsData: {
            users: getRandomUsers(3)
        }
    })

    const list = wrapper.findAll('li')
    expect(list.length).toBe(3)

    const pickedName = list.at(1).text()

    wrapper.find('input').setValue(pickedName)
    await wrapper.vm.$nextTick()

    const lastLi = wrapper.find('li')
    expect(lastLi.text()).toBe(pickedName)
})