import movies from "../models/movies"

describe('Movies', () => {
    let myMovies = []
    beforeEach(() => {
        myMovies = [{
            title: 'Age of Ultron',
            rate: null
        }]
    })

    test('can add a movie', () => {
        movies.add(myMovies, 'Kung Fury')
        expect(myMovies).toMatchSnapshot()
    })

    test('rate a movie', () => {
        movies.rate(myMovies[0], 5)
        expect(myMovies).toMatchSnapshot()
    })
})