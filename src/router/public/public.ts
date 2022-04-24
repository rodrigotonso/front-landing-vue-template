
import Home from '@/views/public/Home.vue'
import TeamRegister from '@/views/public/TeamRegister.vue'
import TeamMembersRegister from '@/views/public/TeamMembersRegister.vue'
import RegisterComplete from '@/views/public/RegisterComplete.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		meta: { auth: 'public' },
		component: Home
	},
	{
		path: '/team-register',
		name: 'TeamRegister',
		meta: { auth: 'public' },
		component: TeamRegister
	},
	{
		path: '/team-members-register',
		name: 'TeamMembersRegister',
		meta: { auth: 'public' },
		component: TeamMembersRegister
	},
	{
		path: '/register-complete',
		name: 'RegisterComplete',
		meta: { auth: 'public' },
		component: RegisterComplete
	}
]

export default routes
