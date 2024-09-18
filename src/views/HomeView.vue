<template>
 <section v-for="(d, index) in datas" :key="index">
<!-- Book Content -->
    <div class="bg-sky-100 mt-2">
        <h1 class="ml-4 py-1.5 text-gray-400 text-lg">{{ d.book }}</h1>
    </div>
<!-- Item books -->
<div 
    class="grid grid-cols-2 gap-1 mx-auto md:grid-cols-4 px-2">
    <!-- Card -->
     <div v-for="(itme,index) in d.levels" :key="index"> 
     <router-link :to="/read/+ itme.id_book" class="group">
        <div class="bg-zinc-200 w-42 shadow-lg rounded-xl mt-2 p-1 space-y-3" >
        <img class="rounded-t-xl" :src="itme.conver_url" alt="">
        <h1 class="text-center flex-wrap overflow-hidden pb-2 text-gray-500">{{ itme.level}}</h1>
     </div>
    </router-link>
    </div>
   </div>

</section>
</template>

<script setup>
import { useBook } from '@/store/storeBook';
const {datas} = useBook()


</script>
