<template>
    <div></div>
</template>

<script lang="ts" setup>
import { string } from '@xmeta/budd'
import {string as s} from 'yup'

string()

try{
    console.log(await s().validate(2,{strict:true}))
}catch(e){
    console.log(e)
}
</script>