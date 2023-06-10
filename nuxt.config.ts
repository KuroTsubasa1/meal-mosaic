// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    css: [
        '@ionic/core/css/core.css',
        '@ionic/core/css/normalize.css',
        '@ionic/core/css/structure.css',
        '@ionic/core/css/typography.css',
        '@ionic/core/css/ionic.bundle.css',
        '@ionic/core/css/flex-utils.css',
        '@ionic/core/css/display.css',
        '@ionic/core/css/float-elements.css',
        '@ionic/core/css/text-alignment.css',
        '@ionic/core/css/text-transformation.css',
        '@ionic/core/css/padding.css',
    ],
    ionic: {
        integrations: {
            //
        },
        css: {
            //
        },
        config: {
            //
        }
    },
    modules: [
        '@nuxtjs/ionic',
        '@vite-pwa/nuxt'
    ],

})
