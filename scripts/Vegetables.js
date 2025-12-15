import { setVegetable } from "./TransientState.js"

const handleVegetableOption = (changeEvent) => {
    if (changeEvent.target.name === "vegetable") {
        setVegetable(changeEvent.target.value)
    }
}

document.addEventListener("change", handleVegetableOption)

export const Veggies = async () => {
    const response = await fetch("http://localhost:8088/vegetables")
    const vegetables = await response.json()

    let html = ""

    const veggieArray = vegetables.map(
        (vegetable) => {
            return `<div>
                        <input type="radio" name="vegetable" value="${vegetable.id}" /> ${vegetable.type}
                    </div>`
        }
    )

    html += veggieArray.join("")

    return html
}
