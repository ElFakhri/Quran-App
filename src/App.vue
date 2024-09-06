<script setup>
import { onMounted, ref, watch } from 'vue';
import { getSurahs, getAyahs, getSurahInfo } from './api';
import AyahBox from './components/AyahBox.vue';
import Surah from './components/Surah.vue';


function getCurrentSurah(){
  const currentURL = new URL(window.location.href)
  const c = currentURL.searchParams.get("surah")
  
  if (c === null){
    return c
  }else {
    return 1
  }
}

const surahs = ref([])
const content = ref(0)
const currentSurah = ref(1)
const surahInfo = ref(0)

function updateSurah (surahNumber) {
  updateActive(surahNumber, currentSurah.value)
  updateContent(surahNumber)
}

function updateActive(cur, prev) {
  surahs.value[prev-1].isActive = false
  surahs.value[cur-1].isActive = true

  console.log(surahs.value[cur])
}

function updateContent (surahNumber) {
  getAyahs(surahNumber).then(res => content.value = res)
  getSurahInfo(surahNumber).then(res => surahInfo.value = res)
  
  currentSurah.value = surahNumber

  
}
onMounted(()=>{
  getSurahs().then(res => {
    res[currentSurah.value-1].isActive = true 
    surahs.value = res
  })
  updateContent(currentSurah.value)
})
</script>

<template>
  <div class="container">
    <div class="surah-container">
      <Surah 
        v-for="surah in surahs" 
        :surahNumber="surah.number" 
        :surahName="surah.name" 
        :literalName="surah.literal_name" 
        :ayahAmount="surah.ayah_amount" 
        :translation="surah.translation"
        :isActive="surah.isActive"
        @change-surah="(n) => updateSurah(n)"
      />
    </div>
    <div class="surah">
      <div class="surah-info">
        <div class="info-left">
          <div class="english-name">{{ surahInfo.englishName}}</div>
          <div class="literal">{{ surahInfo.name }}</div>
          <div class="translation">{{ surahInfo.translation }}</div>
          <div class="ayah-amount">{{ surahInfo.ayahAmount }} ayat</div>
          <div class="revelation">dari {{ surahInfo.revelation }}</div>
        </div>
        <div class="info-right arabic">{{ surahInfo.number }}</div>
      </div>
      <AyahBox v-for="ayah in content" :ayahNumber="ayah.number" :ayahLiteral="ayah.ayah" :ayahTranslation="ayah.translation"></AyahBox>
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
