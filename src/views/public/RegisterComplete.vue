<template>
	<div class="home">
		<cover />
		<register-finish />
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Cover from '@/components/HomeComponents/Cover.vue'
import RegisterFinish from '@/components/HomeComponents/RegisterFinish.vue'

@Component({
	components: {
		Cover,
		RegisterFinish
	}
})
export default class RegisterComplete extends Vue {}
</script>

<style scoped>
.home {
  background-color: #2f2f2f;
  width: 100%;
  height: 100%;
  font-family: Rubik;
}
</style>
