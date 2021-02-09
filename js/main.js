const api = {
    key:'eb7d2b99-c7b6-43f3-8b32-586276241b2f',
    url_base : 'https://pro-api.coinmarketcap.com'
};

fetch(`${api.url_base}/v1/cryptocurrency/map?CMC_PRO_API_KEY=${api.key}`)
.then(response =>{
    if(!response.ok) throw new Error('Error ao Executar a requisição, status '+response.status);
    return  response.json();
})
.then(api=>{
    console.log(api);

    let texto = "";
    for(let i =0; i<10; i++){


        texto+= `
            <div class='media'>
                <img src='https://s2.coinmarketcap.com/static/img/coins/64x64/${api.data[i].id}.png' class='align-self-center mr-3' alt='coin' width='100' height='60'/>
                <div class='media-body'>
                    <h5 class='mt-2'>${api.data[i].name}</h5>
                    <p>${api.data[i].symbol}</p>
                    <p>${api.data[i].first_historical_data}</p>
                </div>
            </div>
        `;
        document.getElementById("coins").innerHTML = texto;
    }
})
.catch(error=>{
    console.log(error.message);
});
