<template>
    <div class="flex flex-row justify-center mt-8">
        <form @submit.prevent="update" class="flex flex-col justify-center w-72 p-4" enctype="multipart/form-data">
                    <p class="py-3 text-xl font-semibold text-center">Modify Content</p>

                    <h3 class="text-lg font-semibold">Edit your description</h3>
                    <textarea type="text" placeholder="What are yoy thinking?" class="border rounded py-0.9 px-1 focus:outline-none" v-model="post.description" required></textarea>

                    <h3 class="text-lg font-semibold">Replace image</h3>
                    <input name="image" type="text" placeholger="type here" class="border rounded py-0.9 px-1 focus:outline-none" v-model="post.image" required/>

                    <button class="font-semibold text-lg bg-button rounded p-1 text-white mt-2">Update</button>
            </form>

    </div>
</template>

<script>
export default {
    name:'EditForm',
    data(){
        return{
            post:{
                description: '',
                image: ''
            }
        }
    },
    async created(){
        
    },
    methods:{
        async update(){

        }
    }

    
}
</script>