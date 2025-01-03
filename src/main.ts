/**
 * Project Main File
 * Create Vue App and then register all its plugins
 *
 */

import { createApp } from 'vue'

import App from './App.vue'
import { registerPlugins } from '@/plugins'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
