/* function fetchData() {
    let container = document.querySelector('[data-container]')
    fetch("https://ismaaeel-a.github.io/onlineStore/data")
        .then((res) => {
            return res.json()
        })

        .then((data) => {
            //  console.table(data.results)
            data.results.forEach((product) => 
                {
                container.innerHTML += `
                    <div class='card'>
                        <img src='${product.img_url}'>
                        <button type="button">'${product.amount}'</button>
                        <p>'${product.description}'</p>
                    </div>
                `
            });
        })

        .catch((err) => {
            console.log('error')
        })
}

fetchData() */


async function fetchData() {
    let res = await fetch("https://ismaaeel-a.github.io/onlineStore/data")
    let tafel = document.querySelector('[data-container]')

    /*     let { results } = await res.json()
        results.forEach(product => {
            container.innerHTML += `
            <div class='card'>
                <img src='${product.img_url}'>
                <button type="button">'${product.amount}'</button>
                <p>'${product.description}'</p>
            </div>
        ` */
    let {
        results
    } = await res.json()
    results.forEach(product => {
        tafel.innerHTML += `
            <tr>
                <td>
                    <img src=${product.img_url}>
                </td>

                <td>
                    <p>${product.catergory}</p>
                </td>

                <td>
                    <p>${product.ProductName}</p>
                </td>
                
                <td>
                    <p>${product.amount}</p>
                </td>

                <td>
                    <p>${product.description}</p>
                </td>

            </tr>
    `
    });

    console.log(results)
}
fetchData()