<template>
  <div>
    <ol>
      <li v-for="(item, index) in items" :key=index>
         <router-link v-bind:to=item.path>
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
  }
}
</script>

<style scoped>

ol {
  margin-left: auto;
  /* width: 480px; */
  display:flex;
  justify-content: center;
  padding: 0;
  list-style: none;
}

li {
  width: 100px;
  height: 30px;
  margin-left:10px;
  margin-right:10px;
  font-size: 14px;
  background-color: #EFF1F3;
  border-radius: 10px;
  position: relative;
  opacity: 0.7;
}

li:hover {
  background-color: #FED766;
  opacity: 1.0;
}

a {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  text-decoration: none;
  line-height: 25px;
  color: #272727;
}

</style>
