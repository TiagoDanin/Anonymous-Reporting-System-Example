<template>
	<div>
		<v-toolbar dark color="primary">
			<v-btn icon class="hidden-xs-only" v-on:click="goBack">
				<v-icon>arrow_back</v-icon>
			</v-btn>
			<v-toolbar-title class="white--text">SDA - Sistema de Denúncias</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-btn icon to="/">
				<v-icon>apps</v-icon>
			</v-btn>
			<v-btn icon v-on:click="refresh">
				<v-icon>refresh</v-icon>
			</v-btn>
		</v-toolbar>
	</div>
</template>

<script>
	export default {
		name: 'appheader',
		methods: {
			goBack: function (event) {
				window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
			},
			refresh: function () {
				this.$router.go(this.$router.currentRoute)
			}
		}
	}
</script>

<style scoped>

</style>
