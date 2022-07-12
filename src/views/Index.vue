<template>
  <div class="main">
    <div class="banner">
        <div class="banner_info">
            <div
                :class="[onMusic ? 'music_on' : 'music_off']"
                @click="changeMusic"
            ></div>
            <div class="icon"></div>
        </div>
        <div class="banner_title" >
            <span v-for="(item, index) in titleArray" :key="item.name" :class="[isActive === index ? 'active_text' : 'noraml_text', 'common_text']" @click="changeTab(index, item)">
                <span :class="[isActive === index ? 'text_line' : '']"></span>
                {{item.name}}
            </span>
        </div>
    </div>
    <div>
        <component :is="componentName"></component>
        <!-- <Index v-if=""></Index>
        <World></World>
        <Character></Character> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import World from '../components/World.vue'
import Character from '../components/Character.vue'
import Index from '../components/Index.vue'
let titleArray = ref([
    {
        name: '首页',
        component: Index
    },
    {
        name: '角色',
        component: Character
    },
    {
        name: '世界',
        component: World
    }
])
let onMusic = ref(true)
let isActive = ref(0)
// let currentPage = { World, Character, Index }
let componentName = ref(Index)
const changeMusic = () => {
    onMusic.value = !onMusic.value
}
const changeTab = (index: number, item: any) => {
    isActive.value = index
    componentName.value = item.component
}
</script>
<style lang="scss" scoped>
.main {
    width: 100vw;
    height: 100vh;
    background: #EFEFEF;
    position: relative;
    .banner {
        position: fixed;
        top: 0px;
        height: 66px;
        width: 100vw;
        display: flex;
        align-items: center;
        background-color: rgba(17,17,17,0.75);
        box-shadow: 0px 3px 7px 0px rgb(0 0 0 / 35%);
        .banner_info {
            width: 250px;
            position: relative;
            .music_on {
                width: 30px;
                height: 30px;
                background: transparent url('../assets/img/on-music.png') no-repeat 0 0;
                background-size: contain;
                position: absolute;
                top: 20px;
                left: 70px;
                animation: rotate-center 6s ease-in-out infinite;
            }
            .music_off {
                width: 30px;
                height: 30px;
                background: transparent url('../assets/img/off-music.png') no-repeat 0 0;
                background-size: contain;
                position: absolute;
                top: 20px;
                left: 70px;
            }
            .icon {
                background: transparent url('http://ys.mihoyo.com/main/_nuxt/img/f78aabc.png') no-repeat 0 0;
                height: 66px;
            }
        }
        .banner_title {
            font-size: 17px;
            font-weight: normal;
            font-stretch: normal;
            color: #fff;
            height: 100%;
            line-height: 66px;
            .common_text {
                position: relative;
                display:inline-block;
                margin: 0 30px;
                cursor: pointer;
                .text_line {
                    position: absolute;
                    top: 0px;
                    display: block;
                    width:100%;
                    height: 5px;
                    background-color: rgb(105, 224, 255);
                }
            }
            .normal_text {

            }
            .active_text {
                text-shadow: 0 0 10px #69e0ff, 0 0 20px #69e0ff, 0 0 40px #69e0ff;
            }
        }
    }
    .video {
        width: 100vw;
        height: 100vh;
    }
}
@keyframes rotate-center {
  0% {
    transform: rotate(0)
  }
  100% {
    transform: rotate(360deg)
  }
}
</style>
