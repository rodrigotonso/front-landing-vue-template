<template>
	<div class="home">
		<cover />
		<team-info />
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Cover from '@/components/HomeComponents/Cover.vue'
import TeamInfo from '@/components/HomeComponents/TeamInfo.vue'

@Component({
	components: {
		Cover,
		TeamInfo
	}
})
export default class TeamRegister extends Vue {

}
</script>

<style scoped>
.home {
  background-color: #2f2f2f;
  width: 100%;
  height: 100%;
  font-family: Rubik;
}
</style>
