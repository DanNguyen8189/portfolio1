<template>
    <div id='app'>  
        <navigation-component></navigation-component>
        <transition>
            <router-view id ='view'></router-view>
        </transition>
        <image-credit></image-credit>
    </div>
</template>

<script>
export default {
    data () {
        return {

        }
    }
}
</script>

<style>

#view{
    text-align: center;
    margin: 8% auto;
}
.fade-enter-active,
.fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
    opacity: 0
}

</style>
