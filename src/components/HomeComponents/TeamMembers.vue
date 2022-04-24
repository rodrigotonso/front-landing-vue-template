<template>
	<v-row
		id="register"
		class="d-flex flex-column align-center justify-center">
		<v-col
			:cols="$vuetify.breakpoint.lgAndUp ? '6' : '12'">
			<div
				class="d-flex flex-column align-center justify-center mt-10">
				<div
					class="titles2 mt-1">
					Completa la información de los jugadores a competir.
				</div>
			</div>
			<v-form
				ref="form"
				v-model="formValid">
				<v-row
					class="d-flex flex-column align-center justify-center">
					<v-col
						class="d-flex flex-column align-center justify-center"
						:cols="$vuetify.breakpoint.lgAndUp ? '4' : '12'">
						<div
							:class="$vuetify.breakpoint.lgAndUp ? '' : 'ml-5'"
							class="subtitles mt-3 mb-2">
							Jugador
						</div>
						<v-card
							:class="$vuetify.breakpoint.lgAndUp ? 'px-3' : 'mx-5'"
							class="card-content mt-1 py-6">
							<div
								class="d-flex align-center justify-center">
								<v-text-field
									class="text-fields-form"
									v-model="formData.player.nickname"
									label="Free Fire Nickname"
									placeholder="Example Name"
									:rules="formRules.nickname"
									rounded
									outlined>
								</v-text-field>
							</div>
							<div class="d-flex align-center justify-center">
								<v-text-field
									class="text-fields-form"
									v-model="formData.player.freeFireId"
									label="Free Fire ID"
									placeholder="12345678910"
									:rules="formRules.freeFireId"
									rounded
									outlined>
								</v-text-field>
							</div>
							<div class="d-flex align-center justify-center">
								<v-text-field
									class="text-fields-form"
									v-model="formData.player.name"
									label="Nome"
									placeholder="Example Name"
									:rules="formRules.name"
									rounded
									outlined>
								</v-text-field>
							</div>
						</v-card>
					</v-col>

					<v-col
						class="d-flex flex-column align-center justify-center"
						:cols="$vuetify.breakpoint.lgAndUp ? '4' : '12'">
						<div class="d-flex align-center justify-center">
							<v-checkbox
								v-model="formData.termsAndConditions"
								label=""
								:rules="formRules.termsAndConditions">
								<template v-slot:label>
									<div>
										Acepto los
										<v-tooltip bottom>
											<template v-slot:activator="{ on }">
												<a
													style="color: black"
													target="_blank"
													href="#"
													@click.stop
													v-on="on">
													Terminos y condiciones
												</a>
											</template>
											Ver los terminos y condiciones
										</v-tooltip>
									</div>
								</template>
							</v-checkbox>
						</div>
						<div class="d-flex align-center justify-center">
							<v-checkbox
								v-model="formData.policyPrivacy"
								label="Aceito a politica de privacidade"
								:rules="formRules.policyPrivacy">
								<template v-slot:label>
									<div>
										Acepto la
										<v-tooltip bottom>
											<template v-slot:activator="{ on }">
												<a
													style="color: black"
													target="_blank"
													href="#"
													@click.stop
													v-on="on">
													politica de privacidad
												</a>
											</template>
											Ver la politica de privacidad
										</v-tooltip>
									</div>
								</template>
							</v-checkbox>
						</div>
					</v-col>
				</v-row>
				<div
					class="d-flex align-center justify-center mb-10">
					<v-btn
						rounded
						class="register-button"
						@click="saveTeamMembersData">
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
export default class TeamMembers extends Vue {
	formData = {
		player: {
			nickname: null,
			freeFireId: null,
			name: null
		},
		termsAndConditions: false,
		policyPrivacy: false
	}

	formValid = false

	get formRules () {
		return {
			nickname: [(v: string) => !!v || 'Nickname is required'],
			freeFireId: [
				(v: string) => !!v || 'Free Fire ID is required',
				(v: string) => {
					const pattern = /^[0-9]+$/i
					return pattern.test(v) || 'Free Fire ID can only contain numbers'
				}
			],
			name: [(v: string) => !!v || 'Name is required'],
			termsAndConditions: [(v: boolean) => !!v || 'You need agree'],
			policyPrivacy: [(v: boolean) => !!v || 'You need agree']
		}
	}

	mounted () {
		if (!this.$store.state.RegistrationStore.teamForm?.teamName) {
			this.$router.push({ name: 'TeamRegister' })
		}
	}

	async saveTeamMembersData () {
		await (this.$refs.form as Vue & { validate: () => boolean }).validate()
		if (!this.formValid) return

		this.$store.commit('membersForm', this.formData)

		try {
			this.sendData()
		} catch (error) {
			console.log(error)
		}

		this.$router.push({ name: 'RegisterComplete' })
	}

	sendData () {
		// Send Function
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

.subtitles {
  height: 18px;
  width: 72px;
  left: 30px;
  top: 387px;
  border-radius: nullpx;
  white-space: nowrap;
}

.card-content {
  border: 1px solid black;
}

.text-fields-form {
  max-width: 300px;
}

.register-button {
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
  background: #e60000 !important;
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
