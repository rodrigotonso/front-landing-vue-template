import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import RegistrationStore from './modules/registration.store'
import SnackbarsStore from './modules/snackbars.store'
import ThemesStore from './modules/themes.store'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		RegistrationStore,
		SnackbarsStore,
		ThemesStore
	}
})

export default store
