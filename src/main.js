import Vue from 'vue'
import App from './App.vue'
import moment from 'moment'

Vue.config.productionTip = false
// filters servers as helpers
Vue.filter('uppercase', function(value){
  if(!value){
    return ''
  }else {
    return value.toUpperCase()
  }
})

Vue.filter('formatted',function(timeStamp){
  if(!timeStamp){
    return ''
  }else{
    return moment(timeStamp).startOf('minute').fromNow()

  }
})
new Vue({
  render: h => h(App),
}).$mount('#app')
