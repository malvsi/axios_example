<template>
  <div>
    <h2>一起学习axios</h2>
    <p>{{ obj }}</p>
    <p>{{ a }}</p>
  </div>
</template>

<script>
import xhr from '../../config/axios.config' // axios的配置文件
import axios from 'axios'

let source = axios.CancelToken.source()

export default {
  name: 'HelloWorld',
  data () {
    return {
      obj: {},
      a: 'ss'
    }
  },
  created () {
    // 第一种方式
    /* axios.get('https://easy-mock.com/mock/5d6f61f957a3b74a8c350aad/example/get_person', {
      params: {
        name: 'lijunjian'
      }
    })
      .then((rs) => {
        if (rs.status === 200) {
          console.dir(rs)
          this.obj = rs.data.data
        }
      }) */

    /* axios({
      method: 'post',
      url: 'https://easy-mock.com/mock/5d6f61f957a3b74a8c350aad/example/post_person',
      data: {
        name: 'lijunjian'
      }
    })
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data)
          this.obj = response.data.data
        }
      }) */

    // 第二种方式
    /* axios({
      method: 'get',
      url: 'https://easy-mock.com/mock/5d6f61f957a3b74a8c350aad/example/post_person',
      parmas: {
        ss: 'lijunjian'
      }
    })
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data)
          this.obj = response.data.data
        }
      })
      .catch((error) => {
        console.log(error
        )
      }) */

    xhr({
      method: 'post',
      url: 'post_person',
      data: {
        sex: 'male'
      },
      params: {
        statusText: 'no'
      }
    })
      .then((re) => {
        if (re.status === 200) {
          console.log(re)
          this.obj = re.data.data
        }
      })
      .catch((error) => {
        if (axios.isCancel(error)) {
          console.log(error.message)
        } else {
          console.log(error)
        }
      })

    source.cancel('请求被用户取消了')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
