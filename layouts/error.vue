<template>
	<div>
		<section class="container">
			<h1>
				Problema de código: {{ error.statusCode }}
			</h1>
			<p>
				Informação para Nerds: {{error.message}}
			</p>
		</section>
	</div>
</template>

<script>
	export default {
		props: ['error']
	}
</script>

<style scoped>
</style>