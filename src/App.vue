<template>
  <div id="app">
    <div>{{ variable1 }}</div>
    <div>{{ variable2 }}</div>
    <pre>{{ config }}</pre>
  </div>
</template>
<script>
import config from '@/config'
export default {
  name: 'App',
  data() {
    return {
      variable1: config.var1,
      variable2: config.var2,
      config
    }
  }
}
</script>