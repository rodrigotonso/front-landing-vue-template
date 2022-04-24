<template>
	<v-row
		id="register"
		class="d-flex flex-column align-center justify-center">
		<v-col
			:cols="$vuetify.breakpoint.lgAndUp ? '6' : '12'">
			<v-form
				ref="form"
				v-model="formValid">
				<div
					class="d-flex flex-column align-center justify-center my-10">
					<div
						class="titles2 mt-1">
						Completa la información del equipo para competir.
					</div>
				</div>
				<div
					class="d-flex align-center justify-center">
					<v-text-field
						class="text-fields-form"
						v-model="formData.email"
						label="Email"
						placeholder="Examplename@example.com"
						:rules="formRules.email"
						rounded
						outlined>
					</v-text-field>
				</div>
				<div class="d-flex align-center justify-center">
					<v-text-field
						class="text-fields-form"
						v-model="formData.teamName"
						label="Nombre de equipo"
						placeholder="Team Blue"
						:rules="formRules.teamName"
						rounded
						outlined>
					</v-text-field>
				</div>
				<div class="d-flex align-center justify-center">
					<v-text-field
						class="text-fields-form"
						v-model="formData.teamTag"
						label="Tag del equipo"
						placeholder="BLUE"
						:rules="formRules.teamTag"
						rounded
						outlined>
					</v-text-field>
				</div>
				<div class="d-flex align-center justify-center">
					<v-text-field
						class="text-fields-form"
						v-model="phoneNumber"
						label="Número de contacto"
						placeholder="123456789"
						prefix="+54"
						:rules="formRules.phone"
						rounded
						outlined>
					</v-text-field>
				</div>
				<div
					class="d-flex align-center justify-center mb-10">
					<v-btn
						rounded
						class="register-button"
						@click="saveTeamData">
						CONTINUAR
					</v-btn>
				</div>
			</v-form>
		</v-col>
	</v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Register extends Vue {
	phoneNumber = null
	formData = {
		email: null,
		teamName: null,
		teamTag: null,
		phone: ''
	}

	formValid = false

	get formRules () {
		return {
			email: [
				(v: string) => !!v || 'Email required',
				(v: string) => {
					const pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
					return pattern.test(v) || 'Email is wrong'
				}
			],
			teamName: [
				(v: string) => !!v || 'Team name is required'
			],
			teamTag: [
				(v: string) => !!v || 'Team tag is required'
			],
			phone: [
				(v: string) => !!v || 'Phone is required',
				(v: string) => {
					const pattern = /^[0-9]+$/i
					return pattern.test(v) || 'Phone can only contain numbers'
				},
				(v: string) => {
					if (v && v.length < 2) return true
					const pattern = /^[84|85]{2}/i
					return pattern.test(v) || 'Phone only for Vodacom'
				}
			]
		}
	}

	async saveTeamData () {
		await (this.$refs.form as Vue & { validate: () => boolean }).validate()
		if (!this.formValid) return

		this.formData.phone = '+54' + this.phoneNumber

		this.$store.dispatch('setTeamForm', this.formData)

		this.$router.push({ name: 'TeamMembersRegister' })
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

  .text-fields-form {
	max-width: 300px;
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
