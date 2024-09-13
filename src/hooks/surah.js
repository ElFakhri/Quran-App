import {ref, onMounted, computed, watch} from 'vue'
import { getAyahs, getSurahInfo } from '../api'


export default function useSurah(num=1){
    const surahNumber = ref(1);
    const surahInfo = ref();
    const surahContent = ref();

    const surah = computed(() => {
        return {
            number: surahNumber.value,
            info: surahInfo.value,
            content: surahContent.value
        }
    })

    function changeSurah(num){
        surahNumber.value = num
    }

    async function updateSurah(num){
        surahContent.value = await getAyahs(num)   
        surahInfo.value = await getSurahInfo(num)
    }

    watch(surahNumber, async (newNum, oldNum) => {
        await updateSurah(newNum)
    })

    onMounted(async () => {
        await updateSurah(num)
    })

    return {surah, changeSurah}
}