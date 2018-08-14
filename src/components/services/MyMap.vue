<!-- MyMap.vue -->
<template>
  <div>
    <h1>Map</h1>
    <map-loader
      :map-config="mapConfig"
      apiKey="AIzaSyAzAvj9bVC--HgD_f1VClOj0qZyOrqxfC0"
    >
      <template v-for="marker in markers">
        <child-marker :position="marker" :key="marker.id" />
      </template>
    </map-loader>
  </div>
</template>

<script>
import MapLoader from './MapLoader.vue'
import ChildMarker from './ChildMarker'

export default {
  props: {
    markers: Array
  },
  data () {
    return {
      mapConfig: {
        zoom: 12,
        center: this.markers[0]
      }
    }
  },
  components: {
    MapLoader,
    ChildMarker
  }
}
</script>
