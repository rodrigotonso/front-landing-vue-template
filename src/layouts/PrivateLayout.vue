<template>
    <v-container
        class="pa-0 ma-0"
        fluid>
        <v-main>
            <slot></slot>
        </v-main>
    </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class PrivateLayout extends Vue {}
</script>

<style lang="scss" scoped>
.container {
    min-width: 100%;
    min-height: 100%;
}
</style>
