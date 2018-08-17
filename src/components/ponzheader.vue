<template>
  <div id="container">
    <ol>
      <li :class="{'on' : isActive(item.title)}" v-for="(item, index) in items" :key=index>
         <router-link :to=item.path>
            {{ item.title }}
         </router-link>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'myheader',
  data () {
    return {
      items: [
        { title: 'Discography', path: '/discography' },
        { title: 'Ponzliquid', path: '/' },
        { title: 'Patronage', path: '/patronage' }
      ]
    }
  },
  methods: {
    isActive: function (name) {
      return this.$route.name === name
    }
  }
}
</script>

<style scoped>
#container{
  height: 80px;
  opacity: 0.9;
}

ol {
  position: fixed;
  height: 80px;
  margin-left: -10px;
  margin-top: -40px;
  width: 100%;
  display:flex;
  justify-content: center;
  padding: 0;
  list-style: none;
  background-color: #000000;
}

li {
  width: 80px;
  height: 25px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 45px;
  font-size: 12px;
  background-color: #000000;
  border-radius: 5px;
  position: relative;
}

li:hover {
  background-color: #FED766;
  color: #272727;
  opacity: 1.0;
}

.on {
  background-color: #272727;
}

a {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  text-decoration: none;
  line-height: 25px;
  color: #EFF1F3;
}

a:hover {
  border-radius: 5px;
  background-color: #FED766;
  color: #272727;
  opacity: 1.0;
}

</style>
