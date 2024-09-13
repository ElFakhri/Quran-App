<script setup>
const props = defineProps({
    surah: Object
})

const surah = props.surah;
</script>

<template>
    <div class="surah-box" :class="surah.isActive ? 'surah-active' : null" @click="$emit('changeSurah', surah.number)">
        <div class="first-row">{{ surah.number }}. {{ surah.name }}</div>
        <div class="last-row">
            <div>{{ surah.translation}}</div>
            <div>{{ surah.ayah_amount }} ayahs</div>
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