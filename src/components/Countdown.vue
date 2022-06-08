<template>
    <div class="countdown_container">
        <div class="time_title"></div>
        <div class="year time_card">
            <el-icon :size="20">
                <Edit />
            </el-icon>
            <div class="time_unit">年</div>
        </div>
        <div class="month time_card">

            <div class="time_unit">月</div>
        </div>
        <div class="day time_card">
            <div class="time_unit">日</div>
        </div>
        <div class="hour time_card">
            <div class="time_unit">时</div>
        </div>
        <div class="min time_card">
            <div class="time_unit">分</div>
        </div>
        <div class="sec time_card">
            <div class="time_unit">秒</div>
        </div>
    </div>
</template>
<style lang="sass" scoped>
.countdown_container
    margin: 20px
    display: flex
    align-items: flex-end
    font-family: "Lato", sans-serif
    .time_title 
        text-align: center
        line-height: 85px
        font-size: 30px
    .time_card
        display: flex
        padding: 10px 10px 10px 10px
        font-size: 50px
        font-weight: 600
        position: relative
        background: #F4BFBF
        border-radius: 20px
        margin-right: 20px
        .time_unit
            position: absolute
            right: 10px
            bottom: 10px
            font-size: 20px
    .year
        width: 120px
        height: 100px
        background: #F4BFBF
    .month
        width: 110px
        height: 90px
        background: #FFD9C0
    .day
        width: 100px
        height: 80px
        background: #8CC0DE
    .hour
        width: 90px
        height: 70px
        background: #8CC0DE
    .min
        width: 80px
        height: 60px
        background: #8CC0DE
    .sec
        width: 70px
        height: 50px
        background: #8CC0DE
    .time_base
        width: 50px
        height: 60px
        line-height: 60px
        background-color: #fff
        border-radius: 8px
        box-shadow: 0 3px 4px 0 rgb(0 0 0 / 20%), inset 2px 4px 0 0 rgb(255 255 255 / 8%)
        &:first-child
            margin: 0 5px 0 0
</style>