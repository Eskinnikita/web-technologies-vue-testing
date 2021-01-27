const user = {
    name: "Eskin Nikita",
    age: 21,
    job: "student"
}

test('user matches', () => {
    expect(user).toMatchSnapshot()
})