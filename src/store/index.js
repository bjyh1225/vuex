import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

//mock数组
const shopList = [
    {
        id:123,
        count:2
    },
    {
        id:456,
        count:3
    }
]

let store = new Vuex.Store({
    state:{
        shopList
    },
    getters:{
        totals(state){
            return state.shopList.reduce((n,item)=>n+item.count,0)
        }
    },
    mutations:{
        updateCountById(state,payload){
            //1秒之后改变数值
            // setTimeout(() => {
            //     let item = state.shopList.find(item => item.id == payload.id)
            //     item.count += 1;
            // },3000);
            let item = state.shopList.find(item => item.id == payload.id)
            item.count += 1;
        }
    },
    actions:{
        updateCountAction(store,parmas){
            //异步操作
            setTimeout(() => {
                store.commit('updateCountById',parmas)
            },3000)
        }
    }

})
export default store
