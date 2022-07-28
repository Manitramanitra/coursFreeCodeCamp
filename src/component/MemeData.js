
let  UseFetch = () => {
    return fetch('https://api.thecatapi.com/v1/images/search')
        .then(res => res.json())
        .then((data) => data)
}

export default UseFetch;


