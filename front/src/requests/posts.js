const api_url = 'http://localhost:3000'

async function httpGetPosts(){
    const response = await fetch(`${api_url}/contents`);
    return await response.json();
}

module.exports = {
    httpGetPosts,
}