<template>
        <Navbar/>
    <div class="flex justify-center">
        <div>
            <SingleContent/>
            <Review/>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import SingleContent from '@/components/SingleContent.vue';
import Review from '@/components/Review.vue';

export default {
    name: 'Content',
    components: {
        Navbar,
        SingleContent,
        Review
    }
}
</script>