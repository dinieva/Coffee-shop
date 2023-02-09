const bests = {
    state: {
        best: [
            {
                id: 0,
                name: "Solimo Coffee Beans 2kg",
                image: "coffee-1.jpg",
                price: 10.73,
            },
            {
                id: 1,
                name: "Presto Coffee Beans 1kg",
                image: "coffee-2.jpg",
                price: 15.99,
            },
            {
                id: 2,
                name: "AROMISTICO Coffee 1kg",
                image: "coffee-3.jpg",
                price: 6.99,
            },
        ],
    },

    getters: {
        getBests(state) {
            return state.best
        }
    }

}

export default bests