import { Sales } from "./Sales.js"
import { Entrees } from "./Entrees.js"
import { Veggies } from "./Vegetables.js"
import { Sides } from "./SideDishes.js"
import { SalesBtn } from "./SalesBtn.js"

export const FoodTruck = async () => {
    const entreeHTML = await Entrees()
    const veggieHTML = await Veggies()
    const sidesHTML = await Sides()
    const buttonHTML = SalesBtn()
    const salesHTML = await Sales()

    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>

        <article>
            <h2>Entrees</h2>
            ${entreeHTML}
        </article>

        <article>
            <h2>Vegetables</h2>
            ${veggieHTML}
        </article>

        <article>
            <h2>Sides</h2>
            ${sidesHTML}
        </article>

        <div class="button-container">
            ${buttonHTML}
        </div>
        

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${salesHTML}
        </article>

    `
}
