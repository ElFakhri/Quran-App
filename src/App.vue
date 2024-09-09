<script setup>
import { onMounted, ref, watch } from 'vue';
import { getSurahs } from './api';
import useSurah from './hooks/surah'
import AyahBox from './components/AyahBox.vue';
import Surah from './components/Surah.vue';


const surahs = ref([])
const {surah, changeSurah} = useSurah()

function updateActive(num){
  surahs.value[surah.value.number-1].isActive = false
  changeSurah(num)
  surahs.value[surah.value.number-1].isActive = true
}

onMounted(async ()=>{
  surahs.value = await getSurahs()
  updateActive(1)
})
</script>

<template>
  <div class="container">
    <div class="surah-container">
      <Surah v-for="surah in surahs" :surah="surah" @change-surah="(n) => updateActive(n)"
      />
    </div>
    <div class="surah">
      <div class="surah-info">
        <div class="info-left">
          <template v-if="surah.info">
            <div class="english-name">{{ surah.info.englishName}}</div>
            <div class="literal">{{ surah.info.name }}</div>
            <div class="translation">{{ surah.info.translation }}</div>
            <div class="ayah-amount">{{ surah.info.ayahAmount }} ayat</div>
            <div class="revelation">dari {{ surah.info.revelation }}</div>
          </template> 
        </div>
        <div class="info-right arabic" v-if="surah.info">{{ surah.info.number }}</div>
      </div>
      <AyahBox v-if="surah.content" v-for="ayah in surah.content" :ayah="ayah"/>
    </div>
  </div>
</template>

<style scoped>
.container { 
  display: flex;
  flex-direction: row;
}

.surah-container {
  position: fixed;
  top: 0;
  bottom: 0;
  /* left: 0px; */
  overflow-y: scroll;
  padding: 10px;
  border-radius: 10px;
}

.surah {
  margin: 0px 50px 0px 300px;
}

.surah-info {
  display: flex;
  flex-direction: row;
  justify-content: space-between ;
  /* position: sticky; */
  /* top: 3px; */
  background-color: rgb(179, 241, 220);
  border: 1px solid rgb(0, 81, 54);
  padding: 16px;
  margin: 15px 0px;
  border-radius: 5px;
}

.info-right {
  font-size: 50px;

}

.english-name {
  font-size: 25px;
  margin-bottom: 8px;
}

.literal, .translation, .ayah-amount, .revelation {
  color: grey;
  margin: 3px 0px;
}
</style>
