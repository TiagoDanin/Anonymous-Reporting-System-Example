<template>
	<div>
		<v-carousel :cycle="true" height="400" interval="3000" hide-delimiter-background show-arrows-on-hover>
			<v-carousel-item v-for="(slide, i) in slides" :key="i">
				<v-sheet :color="colors[i]" height="100%">
					<v-row class="fill-height" align="center" justify="center">
						<div class="display-3">{{ slide }}!</div>
					</v-row>
				</v-sheet>
			</v-carousel-item>
		</v-carousel>

		<v-container fluid>
			<v-card class="mx-auto">
				<v-card-title class="headline">Não fique calado denuncie!</v-card-title>
				<v-card-subtitle>Para fazer uma denúncia é necessário reunir a maior quantidade de informações possíveis para que possa identificar e apurar os fatos. Se você já reuniu o que precisa, acesse o nosso formulário eletrônico.</v-card-subtitle>
			</v-card>
			<v-row>
				<v-col v-for="(link, index) in options" :key="index">
					<v-btn block tile outlined color="success" :to="link.to">
						<v-icon left v-text="link.icon" /> {{ link.title }}
					</v-btn>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				colors: [
					'indigo',
					'warning',
					'red lighten-1',
				],
				slides: [
					'Simples',
					'Fácil',
					'Moderno'
				],
				options: [{
						title: 'Denunciar (Normal)',
						to: '/',
						icon: 'mdi-plus-box'
					},
					{
						title: 'Denunciar (Modo Anônimo)',
						to: '/',
						icon: 'mdi-plus-circle'
					},
					{
						title: 'Acompanhar',
						to: '/',
						icon: 'mdi-shield-check'
					}
				]
			}
		},
	}
</script>

<style scoped>
</style>