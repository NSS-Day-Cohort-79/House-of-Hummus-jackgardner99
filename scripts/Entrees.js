import { setEntree } from "./TransientState.js"

const handleEntreeOption = (changeEvent) => {
    if (changeEvent.target.name === "entree") {
        setEntree(changeEvent.target.value)
    }
}

document.addEventListener("change", handleEntreeOption)

export const Entrees = async () => {
    const response = await fetch("http://localhost:8088/entrees")
    const entrees = await response.json()
    
    let html = ""

    const entreeArray = entrees.map(
        (entree) => {
            return `<div>
                        <input type="radio" name="entree" value="${entree.id}" /> ${entree.name}
                    </div>`
        }
    )

    html += entreeArray.join("")
    return html
}