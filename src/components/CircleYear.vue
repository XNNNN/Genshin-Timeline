<template>
    <div class="circle_container">
        <div :class="['circle_item', isActive === index && reduction ? 'expand' : 'item_hidden']" @click="expendDom(index)" v-for="(item, index) in data" :key="item.year">
            {{item.year}}
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import yearData from '../assets/data/year.json'
export default defineComponent({
    setup() {
        const data = yearData
        const reduction = ref(false)
        let isActive = ref(-1)
        const expendDom = (index:number) => {
            isActive.value = isActive.value === index ? -1 : index
        }
        return { defineComponent, data, isActive, expendDom, reduction }
    },
})
</script>
<style lang="sass" scoped>
.circle_container
    display: flex
    justify-content: space-around
    align-items: center
    height: 100%
    .circle_item
        width: 100px
        height: 100px
        border-radius: 50px
        background: red
        line-height: 100px
        &:nth-child(1)
            background-color: #112B3C
        &:nth-child(2)
            background-color: #205375
        &:nth-child(3)
            background-color: #F66B0E
    .expand
        background: blue
        width: 50px
        height: 100%
    .item_hidden
        display: none 
</style>
