import User from "../models/user"

describe('User', () => {
    test('name return full name', () => {
        const user = new User({ firstname: 'Nikita', lastname: 'Eskin'})
        expect(user.name).toBe('Nikita Eskin')
    })
})