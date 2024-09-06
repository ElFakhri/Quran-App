<script setup>
const props = defineProps({
    ayahNumber: {type : Number},
    ayahLiteral: {type: String},
    ayahTranslation: {type: String}
})
</script>

<template>
    <div class="ayah-box">
        <div class="first-column">
            <div class="number">{{ ayahNumber }}</div>
            <div class="ayah">{{ ayahLiteral }}</div>
        </div>
        <div class="translation">{{ ayahTranslation }}</div>
    </div>
</template>

<style scoped>
.ayah-box {
    width: 100%;
    padding: 20px 0px;
    border-top: 1px solid grey;
}

.first-column {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
}

.number {
    font-size: 18px;
}

.ayah {
    font-size: 30px;
    direction: rtl;
    line-height: 1.5;
}
</style>