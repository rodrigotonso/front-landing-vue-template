import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import store from '..'

@Module
export default class RegistrationStore extends VuexModule {
	teamForm = {
		email: null,
		teamName: null,
		teamTag: null,
		phone: null
	}

	membersForm = {
		player: {
			nickname: null,
			freeFireId: null,
			name: null
		},
		termsAndConditions: false,
		policyPrivacy: false
	}

	@Action
	setTeamForm (newTeamForm: any) {
		store.commit('setNewTeamForm', newTeamForm)
	}

	@Action
	setMembersForm (newMembersForm: any) {
		store.commit('setNewMembersForm', newMembersForm)
	}

	@Mutation
	setNewTeamForm (newTeamForm: any) {
		this.teamForm = newTeamForm
	}

	@Mutation
	setNewMembersForm (newMembersForm: any) {
		this.membersForm = newMembersForm
	}
}
