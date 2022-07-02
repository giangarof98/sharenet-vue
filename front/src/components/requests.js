const api_url = 'http://localhost:3000';

async function getAll(){
    const res = await fetch(`${api_url}/contents`);
    return await res.json();
}

export {getAll}