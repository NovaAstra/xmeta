<template>
    <div></div>
</template>

<script lang="ts" setup>
import { string } from '@xmeta/budd'
import { string as s } from 'yup'
import { string as z } from 'zod'

string()

try {
    // console.log(await s().validate(2, { strict: true, disableStackTrace: true }), 1)
    console.log(z().parse(2))
} catch (e) {
    console.log(e)
}
</script>