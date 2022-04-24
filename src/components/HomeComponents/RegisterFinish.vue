<template>
	<v-row
		id="register"
		class="d-flex flex-column align-center justify-center">
		<v-col
			:cols="$vuetify.breakpoint.lgAndUp ? '6' : '12'">
			<div
				class="d-flex flex-column align-center justify-center my-10">
				<div
					class="titles">Gracias por registrarse!</div>
			</div>
		</v-col>
	</v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class RegisterFinish extends Vue {
	goModal () {
		return true
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.titles {
		font-family: Roboto;
		font-size: 20px;
		font-style: normal;
		font-weight: 700;
		line-height: 24px;
		letter-spacing: 0em;
		text-align: center;
	}

	.titles2 {
		font-family: Roboto;
		font-size: 20px;
		font-style: normal;
		font-weight: 400;
		line-height: 24px;
		letter-spacing: 0em;
		text-align: center;
	}

	.presentation-video {
		width: 300px;
	}

	.register-button{
		height: 46px !important;
		width: 300px;
		font-family: Rubik;
		font-size: 20px;
		font-style: normal;
		font-weight: 700;
		line-height: 26px;
		letter-spacing: 0em;
		text-align: center;
		color: #ffffff;
	}

	#register >>> .v-btn {
		padding: 11px 90px;
		color: white;
		font-family: Roboto;
		font-size: 16px;
		font-style: normal;
		font-weight: 700;
		line-height: 19px;
		letter-spacing: 0em;
		text-align: center;
		background: #E60000 !important;
	}

	@media (max-width: 768px) {
		.titles2 {
			max-width: 300px;
			font-family: Roboto;
			font-size: 20px;
			font-style: normal;
			font-weight: 400;
			line-height: 24px;
			letter-spacing: 0em;
			text-align: center;
		}
	}
</style>
