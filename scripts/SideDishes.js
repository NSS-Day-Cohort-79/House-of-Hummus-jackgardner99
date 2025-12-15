import { setSide } from "./TransientState.js"

const handleSideOption = (changeEvent) => {
    if (changeEvent.target.name === "side") {
        setSide(changeEvent.target.value)
    }
}

document.addEventListener("change", handleSideOption)

export const Sides = async () => {
    const response = await fetch("http://localhost:8088/sides")
    const sides = await response.json()

    let html = ""

    const sidesArray = sides.map(
        (side) => {
            return `<div>
                        <input type="radio" name="side" value="${side.id}" /> ${side.title}
            </div>`
        }
    )

    html += sidesArray.join("")
    
    return html
}

