<template>
    <div class="flex justify-center mt-10">
        
        <form @submit.prevent="createPost" method="POST" class="flex flex-col justify-center w-72 p-4">
                <p class="py-3 text-xl font-semibold text-center">Create Content</p>

                <label for="description" class="text-lg font-semibold">What are you thinking?</label>
                <input placeholder="type here" id="description" class="border rounded py-0.9 px-1 focus:outline-none"/>

                <label for="image" class="text-lg font-semibold">Upload image</label>
                <input placeholger="type here" id="image" name="content[image]" class="border rounded py-0.9 px-1 focus:outline-none" />

                <button class="font-semibold text-lg bg-button rounded p-1 text-white mt-2">Create</button>
        </form>

    </div>
</template>

<script>

export default {
    name:'CreateForm',
}

</script>