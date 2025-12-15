const TransientState = {
    entreeId: 0,
    vegetableId: 0,
    sideId: 0
}

export const setEntree = (id) => {
    TransientState.entreeId = id
}

export const setVegetable = (id) => {
    TransientState.vegetableId = id
}

export const setSide = (id) => {
    TransientState.sideId = id
}

export const PlaceOrder = async () => {
    if (TransientState.entreeId > 0 && TransientState.vegetableId > 0 && TransientState.sideId > 0) {
        const PostOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(TransientState)
        }

        const response = await fetch("http://localhost:8088/purchases", PostOptions)

        const newCustomEvent = new CustomEvent("placeNewOrder")
        document.dispatchEvent(newCustomEvent)

        setEntree(0)
        setVegetable(0)
        setSide(0)
    } else {
        window.alert('Please fill out your combo before submitting')
    }
}