<template>
  <v-container fluid>
      <v-form>
          <v-file-input label="Selecione as Legendas" 
          multiple chips v-model="files"
          prepend-icon="mdi-message-text" 
          append-outer-icon="mdi-send"
          @click:append-outer="processSubtitles" />
      </v-form>
      <div class="pills">
          <Pill  v-for="word in groupedWords" :key="word.name" :name="word.name" :amount="word.amount" />
      </div>
  </v-container>
</template>

<script>
import { ipcRenderer } from 'electron'
import Pill from './Pill'
export default {
    components: { Pill },
    data: function(){
        return {
            files: [],
            groupedWords: []
        }
    },
    methods: {
        processSubtitles(){
            const paths = this.files.map(f => f.paths)
            ipcRenderer.send('process-subtitles', paths)
            ipcRenderer.on('process-subtitles', (event, resp) =>{
                this.groupedWords = resp
            })
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