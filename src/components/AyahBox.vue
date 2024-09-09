<script setup>
const props = defineProps({
    ayah: Object
})
</script>

<template>
    <div class="ayah-box">
        <div class="first-column">
            <div class="number">{{ props.ayah.number }}</div>
            <div class="ayah">{{ props.ayah.ayah }}</div>
        </div>
        <div class="translation">{{ props.ayah.translation }}</div>
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