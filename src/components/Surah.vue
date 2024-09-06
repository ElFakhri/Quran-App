<script setup>
import {store} from  "../store.js"
const props = defineProps({
    surahNumber: {type: Number},
    surahName: {type: String},
    literalName: {type: String},
    ayahAmount: {type: Number},
    translation: {type: String},
    isActive: {type: Boolean, default: false}
})

if (props.isActive){
    console.log(props.surahName)
}
</script>

<template>
    <div class="surah-box" :class="props.isActive ? 'surah-active' : null" @click="$emit('changeSurah', props.surahNumber)">
        <div class="first-row">{{ surahNumber }}. {{ surahName }}</div>
        <div class="last-row">
            <div>{{translation}}</div>
            <div>{{ ayahAmount }} ayahs</div>
        </div>
    </div>
</template>

<style scoped>

/* what i wanted was when it hovers the border color changes but when i press it um background changes too ig */

.surah-box {
    margin: 4px;
    /* background-color: green; */
    border: 1px solid grey;;
    border-radius: 5px;
    /* background-color: white; */
    padding: 7px 5px;
    cursor: pointer
}

.surah-box:hover , .surah-active{
    background-color: rgb(179, 241, 220);
    color: rgb(0, 81, 54);
}

.first-row {
    margin-bottom: 10px;
    font-weight: 500;
}

/* .surah-box:hover *, .surah-active *{
    color: rgb(0, 81, 54);
} */

.last-row {
    color: grey;
    font-size: 14px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.literal-name {
    font-weight: 700
}
</style>