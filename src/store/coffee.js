const coffee = {
    state: {

        coffee: [
            {
                id: 0,
                name: "Solimo Coffee Beans 2kg",
                variety: "Brazil",
                image: "coffee-3.jpg",
                price: 10.73,
            },
            {
                id: 1,
                name: "Presto Coffee Beans 1kg",
                variety: "Brazil",
                image: "coffee-3.jpg",
                price: 15.99,
            },
            {
                id: 2,
                name: "AROMISTICO Coffee 1kg",
                variety: "Brazil",
                image: "coffee-3.jpg",
                price: 6.99,
            },
            {
                id: 3,
                name: "Solimo Coffee Beans 2kg",
                variety: "Brazil",
                variety: "Brazil",
                image: "coffee-3.jpg",
                price: 10.73,
            },
            {
                id: 4,
                name: "Solimo Coffee Beans 2kg",
                variety: "Brazil",
                image: "coffee-3.jpg",
                price: 10.73,
            },
            {
                id: 5,
                name: "Solimo Coffee Beans 2kg",
                variety: "Brazil",
                image: "coffee-3.jpg",
                price: 10.73,
            },
        ],

    },

    getters: {
        getCoffee(state) {
            return state.coffee
        }
    }
}

export default coffee