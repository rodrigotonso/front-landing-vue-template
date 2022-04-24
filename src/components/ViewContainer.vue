<template>
    <div
        class="view-container"
        :style="cssVars">
        <v-container
            class="pa-0 ma-0"
            fluid>
            <slot></slot>
        </v-container>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class ViewContainer extends Vue {
    @Prop({ default: '#030E1E' }) bgColor!: string

    get cssVars (): object {
        return {
            '--bg-color': this.bgColor
        }
    }
}
</script>

<style lang="scss" scoped>
.view-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: var(--bg-color);
}
</style>
