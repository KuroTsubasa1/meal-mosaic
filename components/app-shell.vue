<script lang="ts">
import {defineComponent} from 'vue'
import { IonContent, IonFooter, IonHeader, IonTitle, IonToolbar } from '@ionic/vue';


export default defineComponent({
  name: "app-shell",
  components: { IonContent, IonFooter, IonHeader, IonTitle, IonToolbar },
})
</script>

<template>
<ion-header>
  <ion-toolbar>
    <ion-title>
      App Shell
    </ion-title>
  </ion-toolbar>
</ion-header>

  <ion-content>
   <slot/>
  </ion-content>

  <ion-footer>
    <ion-toolbar>
      <ion-title>
        Footer
      </ion-title>
    </ion-toolbar>
  </ion-footer>
</template>

<style scoped>

</style>