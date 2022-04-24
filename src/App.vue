<template>
	<v-app>
		<view-loading
			:loading="loadingTheme"></view-loading>
		<div
			v-if="!loadingTheme"
			class="layout">
			<component
				:is="layout">
				<router-view></router-view>
			</component>
		</div>
		<SnackbarHandler />
	</v-app>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import moment from 'moment-timezone'
import SnackbarHandler from '@/components/SnackbarsHandler.vue'
import PublicLayout from '@/layouts/PublicLayout.vue'
import PrivateLayout from '@/layouts/PrivateLayout.vue'
import ViewLoading from '@/components/ViewLoading.vue'

@Component({
	components: {
		SnackbarHandler,
		PublicLayout,
		PrivateLayout,
		ViewLoading
	}
})
export default class App extends Vue {
	isAuth = false
	loading = false

	get layout (): string {
		let result = 'div'
		switch (this.$route.meta?.auth) {
		case 'general':
			result = this.isAuth ? 'PrivateLayout' : 'PublicLayout'
			break
		case 'public':
			result = 'PublicLayout'
			break
		case 'private':
			result = 'PrivateLayout'
			break
		}
		return result
	}

	get loadingTheme (): boolean {
		return this.$store.state.ThemesStore.loadingTheme
	}

	@Watch('forceCheckAuth')
	async onForceCheckAuthChange (value: boolean): Promise<void> {
		if (value) {
			this.$store.commit('updateForceCheckAuth', false)
			this.isAuth = await this.checkAuth()
		}
	}

	@Watch('$route')
	async onRouteChange (): Promise<void> {
		const DIFF_MINUTES = 10
		if (Math.abs(moment(this.dateValidationToken).diff(moment(), 'minutes')) >= DIFF_MINUTES) {
			//
		}
	}

	async mounted (): Promise<void> {
		await this.$store.dispatch('setTheme', 'Default')
	}

	async validateToken (): Promise<boolean> {
		let result = false
		try {
			this.loading = true
			const resp = await this.$store.dispatch('validateToken')
			if (resp?.status === 200) {
				result = true
			}
			this.loading = false
		} catch (err) {
			console.log(err)
		}
		return result
	}

	updateForceResetPassword (): void {
		const localStorageForceResetPassword = localStorage.getItem('updateForceResetPassword')
		if (localStorageForceResetPassword && localStorageForceResetPassword !== 'undefined') {
			this.$store.commit('updateForceResetPassword', true)
		}
	}
}
</script>

<style lang="scss">
.layout {
	min-width: 100%;
	min-height: 100%;
}
</style>
