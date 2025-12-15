import { PlaceOrder } from "./TransientState.js"

const handleSubmission = (clickEvent) => {
    if (clickEvent.target.type === "submit") {
        console.log("button clicked!")
        PlaceOrder()
    }
}

export const SalesBtn = () => {
    document.addEventListener("click", handleSubmission)

    const SalesButtonHTML = `
        <button type="submit">Place Combo Order!</button>
    `

    return SalesButtonHTML
}