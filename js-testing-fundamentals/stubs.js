let Pokemons = {
    amount() {

    },
    say(str) {
        console.log('Твой покедекс сообщает: ', str)
    }
}

function howsMyCollection() {
    const size = Pokemons.amount()
    if (size === undefined) {
        return Pokemons.say('Упс, мы не можем сказать, сколько у тебя покемонов')
    }
    if (size < 10) {
        return Pokemons.say('У тебя есть несколько, но нужно больше')
    }
    if (size < 50) {
        return Pokemons.say('У тебя уже появились любимчики, продолжай в том же духе!')
    }
    return Pokemons.say('Из тебя отличный коллекционер!')
}

function stubAmount(amount) {
    Pokemons.amount = () => amount
}

function havePokemons(amount) {
    stubAmount(amount)
    howsMyCollection()
}

havePokemons(5)
havePokemons(17)
havePokemons(100)

