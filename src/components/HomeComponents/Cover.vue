<template>
	<div
		id="cover"
		class="cover-container">
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Cover extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cover-container {
	height: 255px;
}

.background-photo {
	height: 255px;
	position: relative;
	display: inline-block;
	text-align: center;
}

.logo-photo {
	height: 193px;
	width: 287px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

.cover-container >>> .v-btn {
	padding: 11px 90px;
	background: linear-gradient(to bottom, #f38b00 0%, #ff6600 100%) !important;
}

@media (max-width: 768px) {
	.cover-container {
		height: 255px;
	}

	.background-photo {
		height: 255px;
		position: relative;
		display: inline-block;
		text-align: center;
	}

	.logo-photo {
		height: 193px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
}
</style>
