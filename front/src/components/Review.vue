<template>
    <div>
        <form action="" class="flex flex-col py-8">
            <label for="review" class="text-center">Your New Comment</label>
            <textarea name="review" id="review" cols="30" rows="3"
                class="bg-grey rounded focus:outline-none p-3">
            </textarea>
            
            <button class="font-semibold text-lg bg-button rounded p-1 text-white mt-2">Comment</button>

        </form>
    </div>
</template>

<script>
export default {
    name:'Review',
    data(){

    }
}
</script>