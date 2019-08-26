<template>
  <div id="app">
    <ul v-for="item in admin.items">
      <li>
        商品名称: {{item.good_name}} 商品ID: {{item.good_id}}
        <br />
        姓名: {{item.real_name}} 电话号码: {{item.phone_number}}
        <br />
        地址: {{item.address}}
        <br />
        拓展信息: {{item.ext_info}}
        <br />
        购买数量: {{item.buy_count}} 付款金额: {{item.buy_price}}
        <br />
        <el-button type="primary" @click.native="viewmap(item)">查看地图</el-button>
        <el-button type="primary" @click.native="confirm(item.id)">确认发货</el-button>
      </li>
    </ul>

    <el-pagination
            background
            @current-change="handleCurrentChange"
            :page-size="4"
            layout="prev, pager, next"
            :pager-count="5"
            :total="total">
    </el-pagination>
  </div>
</template>

<script>
import * as order from './api/order'

export default {
  name: 'app',
  data() {
    return {
      admin: [],
      start: 0,
      limit: 3,
      total: 0,
    };
  },
  methods: {
    load() {
      order.getNonPubishOrder(this.limit, this.start).then((res) => {
        this.admin = res.data.data;
        this.total = res.data.data.total;
      })
    },
    handleCurrentChange(val) {
      this.start = this.limit * (val - 1); // val 页面
      this.load();
    },
    confirm(id) {
      order.publishOrder(id)
      this.load()
    },
    viewmap(item) {
      window.location = 'http://efront.cross.echosite.cn/map.html?addr='+encodeURIComponent(item.address)
    }
  },
  beforeMount() {
    this.load();
    setInterval(this.load, 10000)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
