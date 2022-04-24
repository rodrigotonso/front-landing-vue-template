<template>
    <div class="text-center">
        <v-snackbar
            v-if="localSnackbar"
            v-model="showSnackbar"
            :top="localSnackbar.positionY === 'top'"
            :bottom="localSnackbar.positionY === 'bottom'"
            :left="localSnackbar.positionX === 'left'"
            :right="localSnackbar.positionX === 'right'"
            :color="localSnackbar.color"
            :multi-line="localSnackbar.mode === 'multi-line'"
            :timeout="localSnackbar.timeout"
            :vertical="localSnackbar.mode === 'vertical'"
            ref="snackb"
            @hide="showSnackbar = false">
            {{ localSnackbar.message }}
            <v-btn
                v-if="!localSnackbar.timeout"
                dark
                text
                @click="showSnackbar = false">
                Close
            </v-btn>
        </v-snackbar>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import Snackbar from '../models/snackbar.model'
@Component
export default class SnackbarsHandler extends Vue {
    localSnackbar: Snackbar|null = null
    showSnackbar = false
    get snackbars () {
        return this.$store.state.SnackbarsStore.snackbars
    }

    @Watch('snackbars')
    async onNewSnackbars () {
        this.localSnackbar = this.snackbars[0]
        this.showSnackbar = true
    }

    @Watch('showSnackbar')
    updateSnackbarsQueue () {
        if (this.showSnackbar === false) {
            setTimeout(() => {
                this.$store.commit('removeLastMessage')
            }, 100)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
