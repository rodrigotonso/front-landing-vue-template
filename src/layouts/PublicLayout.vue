<template>
    <v-container
        class="pa-0 ma-0"
        fluid>
        <v-main
            class="container">
            <slot></slot>
        </v-main>
    </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class PublicLayout extends Vue {}
</script>

<style lang="scss" scoped>
.container {
    height: 100%;
    width: 100%;
}
</style>
