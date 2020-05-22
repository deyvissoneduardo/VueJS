<template>
  <v-container fluid>
      <v-form>
          <v-file-input label="Selecione as Legendas" 
          multiple chips v-model="files"
          prepend-icon="mdi-message-text" 
          append-icon="mdi-send"
          @click:append-icon="processSubtitles" />
      </v-form>
      <div class="pills">
          <Pill  v-for="word in groupedWords" :key="word.name" :name="word.name" :amount="word.amount" />
      </div>
  </v-container>
</template>

<script>
import Pill from './Pill'
export default {
    components: { Pill },
    data: function(){
        return {
            files: [],
            groupedWords: [
                { name: 'you', amount: 900 },
                { name: 'he', amount: 700 },
                { name: 'it', amount: 258 }
            ]
        }
    },
    methods: {
        processSubtitles(){
            console.log(this.files)
        }
    }
}
</script>

<style>
    .pills{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
</style>