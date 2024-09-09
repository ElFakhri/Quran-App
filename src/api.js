const API_URL = "http://api.alquran.cloud/v1"

export async function getSurahs(){
    const url = API_URL + "/surah"
    const res = await fetch(url)
    const data = await res.json()
    return data.data.map(surah => {
        return {
            number: surah.number, 
            name:surah.englishName, 
            ayah_amount: surah.numberOfAyahs, 
            literal_name: surah.name, 
            translation: surah.englishNameTranslation,
            isActive: false
        }
    })
}

export async function getAyahs(noSurah){
    const url = API_URL + `/surah/${noSurah}/editions/quran-unicode,id.indonesian`
    const res = await fetch(url)
    const data = await res.json()
    const [texts, translations] = data.data
    // console.log(texts)
    const result = texts.ayahs.map((ayah, index) => {
        const translation = translations.ayahs[index]
        return {number: ayah.numberInSurah, ayah: ayah.text, translation: translation.text}
    })
    return result
} 

export async function getSurahInfo(noSurah) {
    const url = API_URL + `/surah/${noSurah}/editions/quran-unicode,id.indonesian`
    const res = await fetch(url)
    const raw = await res.json()
    // console.log(raw.data[noSurah+1])
    const data = raw.data[1]
    // console.log(raw.data)
    const result = {
        number: data.number,
        name: data.name,
        englishName: data.englishName,
        translation: data.englishTranslation,
        revelation: data.revelationType,
        ayahAmount: data.numberOfAyahs
    }
    return result
}