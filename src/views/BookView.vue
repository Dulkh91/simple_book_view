<template>
    <div class="mx-0 md:mx-2">
        <p class="text-gray-300 text-sm">
            <span>{{ currentBook.book }}</span>&gt;
            <span>{{ currentBook.level }}</span>
        </p>
       <div v-for="(url,index) in book" :key="index">
        <img :src="url" alt="">
       </div>
    </div>
    
</template> 
<script setup>
import {useRoute}  from 'vue-router'
import {ref,onMounted} from 'vue'
import { useBook } from '@/store/storeBook';

const route = useRoute()

const book = ref([])
const currentBook = ref({book:'', level:''})

const {datas} = useBook()

onMounted(() => {
    const bookFil = route.params.id
    const newFilter = []

    datas.forEach(d => {
        d.levels.forEach(level => {
            if (level.id_book == bookFil) {
                level.book_urls.forEach(item => {
                    newFilter.push(item.url)
                })

        // Set currentBook to the selected book and level by dynamic data binding ដោយប្រើ interpolation ({{ }})
            currentBook.value.book = d.book
            currentBook.value.level = level.level
            
            }
        })
    })

    book.value = newFilter
})
</script>
