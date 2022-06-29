<template>
    <div v-for="post in posts" :key="post"
        class="flex flex-row justify-center py-6">
        <div>
            <div>
                <p>{{post.description}}</p>
                <p>{{post._id}}</p>
            </div>
            <div>
                <router-link :to="`/content/${post._id}`">
                    <button class="font-semibold text-lg rounded p-1 text-white mt-2 bg-buttonSeeMore">
                        See more
                    </button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'AllContent',
    data() {
        return { posts: [] }
    },
    mounted() {
        const api_url = 'http://localhost:3000/contents'

        fetch(api_url)
            .then(res => {return res.json()})
            .then(data => console.log(this.posts = data))
            .catch(err => console.log(err.message))
    }
}
</script>