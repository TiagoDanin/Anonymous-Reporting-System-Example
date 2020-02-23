<template>
	<div>
		<v-footer absolute color="primary lighten-1">
			<v-layout justify-center row wrap>
				<v-card flat tile width="100%" class="text-center" color="primary lighten-1">
					<v-btn v-for="(link, index) in links" :key="index" color="white" class="mx-3" text rounded
						:to="link.to">
						{{ link.title }}
					</v-btn>
					<v-divider class="divider" ></v-divider>
					<v-card-text class="white--text">
						&copy;{{ new Date().getFullYear() }} — <strong>Tiago Danin & Eduardo Mouta</strong>
					</v-card-text>
				</v-card>
			</v-layout>
		</v-footer>
	</div>
</template>

<script>
	export default {
		name: 'appfooter',
		data() {
			return {
				links: [{
						title: 'Página Principal',
						to: '/'
					},
					{
						title: 'Sobre',
						to: '/about'
					},
					{
						title: 'Painel de Controle',
						to: '/admin'
					}
				]
			}
		}
	}
</script>

<style scoped>
	.divider {
		margin: 5px;
	}
</style>