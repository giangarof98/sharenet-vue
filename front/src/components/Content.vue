<template>
    <div v-for="post in posts" :key="post"
        class="flex flex-row justify-center py-6">
        <div>
            <div>
                <p>{{post.description}}</p>
            </div>
            <div>
                <button>See more</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Content',
    data() {
        return { posts: [] }
    },
    mounted() {
        const api_url = 'http://localhost:3000/contents'

        fetch(api_url)
            .then(res => {return res.json()})
            .then(data => console.log(this.posts = data))
            .catch(err => console.log(err.messgae))
    }
}
</script>