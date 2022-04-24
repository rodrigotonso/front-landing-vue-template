<template>
	<v-row
		id="register"
		class="d-flex flex-column align-center justify-center">
		<v-col
			:cols="$vuetify.breakpoint.lgAndUp ? '6' : '12'">
			<div
				class="d-flex flex-column align-center justify-center my-10">
				<div
					class="titles">
					LIGA DE JUEGOS
				</div>
				<div
					class="titles2 mt-1">
					Preparate para triunfar!
				</div>
			</div>
			<div class="d-flex align-center justify-center">
				<iframe
					class="presentation-video"
					src="https://www.youtube.com/embed/yoypcGJVjq4"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen>
				</iframe>
			</div>
			<div
				class="d-flex align-center justify-center my-10">
				<v-btn
					rounded
					class="register-button"
					@click="$router.push({ name: 'TeamRegister' })">
					Registrate ahora
				</v-btn>
			</div>
		</v-col>
	</v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Register extends Vue {
	goModal (modal: string) {
		this.$emit('chooseModal', modal)
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
	height: 406px;
	width: 725px;
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
	.presentation-video {
		height: 168px;
		width: 300px;
	}
  }
</style>
