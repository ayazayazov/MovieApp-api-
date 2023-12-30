const searchBtn = document.querySelector('#searchBtn');
const searchInput = document.querySelector('#searchInput');


// const myPromise = fetch('https://www.omdbapi.com/?apikey=2ceb9ddf&s=lucy');

// myPromise.then((res)=>{
//     const secondPromise = res.json();
//     return secondPromise;
// }).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log('err', err);
// }).finally(()=>{
//     console.log('fetched.');
// })

searchBtn.addEventListener('click', function(){
    const title = searchInput.value;
    const myPromise = fetch(`https://www.omdbapi.com/?apikey=2ceb9ddf&s=${title}`);
    myPromise.then((res)=>{
        const secondPromise = res.json();
        return secondPromise;
    }).then((data)=>{
        console.log(data.Search);
        // data.Search.map()
        // data.Search[0]
        main.innerHTML = data.Search.map(item =>{
            return `
            <div class="movie">
                    <img src="${item.Poster}" alt="">
                    <div class="movie-info">
                        <h3>${item.Title}</h3>
                        <div class="overview">
                            <p>Year: ${item.Year}</p>
                            <p>imdbID: ${item.imdbID}</p>
                            <p>Type: ${item.Type}</p>
                        </div>
                    </div>
                </div>
            `
        }).join('');
    }).catch((err)=>{
        console.log('err', err);
    }).finally(()=>{
        console.log('fetched.');
    });


    // console.log(movieTitle);
    searchInput.value = '';
})