<template>
  <span>
    <Timeline :id="'TOMO70878254'" :sourceType="'profile'" :options="{ tweetLimit: '3' }"/>
  </span>
</template>

<script>
// import Vue from 'vue'
import Timeline from 'vue-tweet-embed/timeline'

export default {
  name: 'Emb',
  data () {
    return {
    }
  },
  components: {
    // component-view is available in the parents scope
    'Timeline': Timeline
  },
  methods: {

  }
}
</script>
