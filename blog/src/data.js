export function getDataAPI(){
    return fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(res=> {
        if(res.ok){
            console.log('GET request successful')
        }
        else{
            console.log('GET request unsuccessfull')
        }
        return res
    })
    .then(res => res.json())
    .then(data => data)
    .catch(error => console.log(error))
}

export function addDataAPI(item){
    return fetch (`https://jsonplaceholder.typicode.com/posts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
    .then(res => res.json())
    .then(data => data)
    .catch(error => console.log(error));
}

export function updateDataAPI(item){
    console.log(item);
    return fetch (`https://jsonplaceholder.typicode.com/posts/${item.id}`,{
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
    .then(res => res.json)
    .then(data => data)
    .catch(error => console.log(error));
}

export function deleteDataAPI(id){
    return fetch (`https://jsonplaceholder.typicode.com/posts/${id}`,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        // body: JSON.stringify(item)
    })
    .then(res => res.json())
    .then(data => data)
    .catch(error => console.log(error));
}
