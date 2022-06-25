<template>

    <!-- large screen -->
    <nav class="flex flex-row justify-between bg-navbar py-5">
        <div>
            <img :src="require('../../public/vue-logo.png')" class="justify-start mx-5" alt="">
        </div>
        <div class="flex items-center gap-x-5 mx-5">
            <div class="hidden md:flex flex-row justify-end gap-x-5 text-lg text-white tracking-wide">
                <a href="">Home Page</a>
                <a href="">Profile</a>
                <a href="">SignUp</a>
                <a href="">SignIn</a>
            </div>

            <!-- Device Dropdown -->
            <div class="flex flex-col sm:items-center">
                <button @click="dropdown()" id="btn-menu" class="icon md:hidden focus:outline-none">
                        <span class="top"></span>
                        <span class="middle"></span>
                        <span class="bottom"></span>
                </button>

                <div class="md:hidden">
                    <div id="menu" class="flex-col hidden text-white space-y-2 px-2">
                        <a href="">Home Page</a>
                        <a href="">Profile</a>
                        <a href="">SignUp</a>
                        <a href="">SignIn</a>
                    </div>
                </div>

            </div>

        </div>


    </nav>
</template>

<style scoped>
.icon{
    cursor: pointer;
    width: 24px;
    height: 24px;
    position: relative;
    transition: all 0.25s;
}

.top, .middle, .bottom{
    position: absolute;
    top: 0;
    left: 0;
    width: 24px;
    height: 1.5px;
    background: #000;
    transform: rotate(0);
    transition: all 0.5s;
    
}

.middle{
    transform: translateY(7px);
}

.bottom{
    transform: translateY(14px);
}

.open{
    transform: rotate(90deg);
    transform: translateY(0px);
}

.open .top{
    transform: rotate(45deg) translateY(6px) translate(6px);
}

.open .middle{
    display: none;
}

.open .bottom{
    transform: rotate(-45deg) translateY(6px) translate(-6px);
}
</style>

<script>

export default {
    name:'Navbar',
    methods: {
        dropdown(){
            const btn = document.getElementById('btn-menu');
            const menu = document.getElementById('menu');

            btn.addEventListener('click', () => {
                btn.classList.toggle('open');
                menu.classList.toggle('flex');
                menu.classList.toggle('hidden');
            })

        }
    }
}

</script>