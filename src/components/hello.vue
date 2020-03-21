<template>
    <div>
        <h2>统计总数：{{$store.getters.totals}}</h2>
    </div>
</template>
<script>
    export default{
        methods:{
            changeCount(){
                this.$store.commit('updateCount',{
                 add:20
                })   
            }
        }
    }
</script>
<style>
</style>