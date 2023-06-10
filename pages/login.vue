<script setup lang="ts">
import {
  IonAvatar,
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/vue"

const router = useRouter();
</script>

<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Meal Mosaic</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">

      <ion-grid>
        <ion-row >
          <ion-col class="ion-text-center" >
            <h1>
              Kjells Bitcoin App
            </h1>
          </ion-col>
        </ion-row>
        <ion-row class="ion-justify-content-center">
            <ion-button @click="router.push('/login')">
              Login
            </ion-button>

        </ion-row>
      </ion-grid>

    </ion-content>
  </ion-page>
</template>

<style scoped>

</style>