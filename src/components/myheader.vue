<template>
  <div>
  <div class="spacer">
  <!-- <div class="header"> -->
    <ol>
      <li :class="{'on' : isActive(item.title)}" v-for="(item, index) in items" :key=index>
         <router-link :to=item.path>
            {{ item.title }}
         </router-link>
      </li>
    </ol>
  <!-- </div> -->
  </div>
  </div>
</template>

<script>
export default {
  name: 'myheader',
  data () {
    return {
      items: [
        { title: 'Discography', path: '/discography' },
        { title: 'HelloWorld', path: '/' },
        { title: 'Patronage', path: '/patronage' }
      ]
    }
  },
  methods: {
    isActive: function (name) {
      if (name === this.$route.name) {
        console.log('ONAJI')
      }
      return this.$route.name === name
    }
  }
}
</script>

<style scoped>

/*モニター全体に広げるヘッダー*/
.spacer{
  /* width: 100%; */
  height: 80px;
  /* padding: 0; */
  /* position: fixed; */
  /* background-color: #000000; */
  opacity: 0.7;
}

ol {
  position: fixed;
  height: 50px;
  margin-left: -10px;
  margin-top: -10px;
  width: 100%;
  display:flex;
  justify-content: center;
  padding: 0;
  /* margin: 10px; */
  list-style: none;
  background-color: #000000;
  /* opacity: 0.8; */

  /* margin: auto; */
  /* text-align: center; */
  /* max-width: 400px; */
  /* padding: 10px; */
}

li {
  width: 80px;
  height: 25px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 15px;
  font-size: 12px;
  background-color: #000000;
  border-radius: 5px;
  position: relative;
  /* opacity: 0.8; */

  /* margin: auto; */
  /* text-align: center; */
  /* max-width: 800px; */
  /* padding: 10px; */

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
