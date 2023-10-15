
<template>
  <div class="flex mx-auto w-full h-full items-center justify-center m-10">
    <InputPrimary v-model="message" @change="handleChange"></InputPrimary>
   
  </div>
 
</template>

<script lang="ts" setup>

import InputPrimary from './shared/InputPrimary.vue';
import api from './services/api';
</script>

<script lang="ts">

export default {

  data(){
    return {
      message:''
    };
  },
  methods: {
    async handleChange() {
  try {

   await api.get(`playlists/3cEYpjA9oz9GiPac4AsH4n`);

  
  
  } catch (error) {
    console.error('Erro na chamada à API:', error);
    throw error;
  }
}

  }
}
</script>

<style scoped>
</style>
