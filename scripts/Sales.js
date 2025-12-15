export const Sales = async () => {
    const response = await fetch("http://localhost:8088/purchases?_expand=entree&_expand=vegetable&_expand=side")
    const sales = await response.json()

    let html = `<ul class="orders--container">`

    const salesDivs = sales.map(
        (sale) => {
            const totalPrice = sale.entree.price + sale.vegetable.price + sale.side.price
            const toUSCurrency = totalPrice.toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
            })
            return `<li>Receipt #${sale.id} = ${toUSCurrency}</li>`
        }
    )

    html += salesDivs.join("")
    html += "</ul>"

    return html
}

