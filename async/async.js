const doFetch = () => {
//const doFetch = async () => {
    console.log("fetching from API...")
    const startTime = Date.now();

    const response = fetch('https://fakestoreapi.com/products?limit=1')
    .then(response => {
        let elapsedTime = Date.now() - startTime;
        console.log(`time elapsed since start for query: ${elapsedTime} ms`);
        console.log(`response:`);
        console.log(response);    
    })
    //const response = await fetch('https://fakestoreapi.com/products?limit=1');


    // const data = await response.json()
    // elapsedTime = Date.now() - startTime;
    // console.log(`time elapsed since start to finish json parsing: ${elapsedTime} ms`);
    // console.log(`data:`);
    // console.log(data); 
}

doFetch();

