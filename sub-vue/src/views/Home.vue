<template>
  <div class="home">
    <div>
      {{info && info.user && info.user.phone}}
    </div>
    <div @click="handleClick"> 点击发送请求</div>
  </div>
</template>

<script>
import service from '@/api'
export default {
  name: 'Home',
  data () {
    return {
      info: {
      }
    }
  },
  methods: {
    handleClick () {
      const params = {
        id: 11111,
        name: 'xxxx'
      }
      service('/mock/floors', params).then((res) => {
        console.log(res?.data?.data?.ent?.clue_info)
        const tag = res?.data?.data?.ent?.clue_info
        this.info = { ...tag }
      })
    }
  }
}
</script>

<style scoped>
 .home {
   border: 1px solid red;
 }
</style>
