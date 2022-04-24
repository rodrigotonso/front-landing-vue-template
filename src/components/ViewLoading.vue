<template>
    <div
        v-if="loading"
        class="view-loading">
        <v-progress-circular
            indeterminate
            class="mb-4" />
        Loading...
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class ViewLoading extends Vue {
    @Prop({ default: false }) loading: boolean
}
</script>

<style lang="scss" scoped>
.view-loading {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #030E1E;
}
</style>
