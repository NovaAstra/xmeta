<template>
    <div></div>
</template>

<script lang="ts" setup>
// import { string } from '@xmeta/budd'
import * as y from 'yup'
import * as z from 'zod'



try {
    console.log(await y.string().validate('asd', { strict: true, disableStackTrace: true }), 1)
    console.log(z.string({description:'asdas'}).parse('2'))
} catch (e) {
    console.log(e)
}
</script>