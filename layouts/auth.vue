<template>
	{{ $auth }}
	<NuxtLoadingIndicator />
	<main class="grid grid-cols-4">
		<section id="form-section" class="col-span-2">
			<slot />
		</section>
		<section id="logo-section" class="column q-gutter-xl col-start-4">
			<q-avatar size="200px">
				<img src="/gumball.jpg" />
			</q-avatar>
			<div class="column items-center">
				<span class="text-subtitle1">Welcome To</span>
				<span class="text-h2">Kanye</span>
			</div>
		</section>
	</main>
</template>

<script setup>
const { $auth } = useNuxtApp();
</script>

<style scoped>
	main {
		background-image: url('/wave-4.svg');
		background-repeat: no-repeat;
		height: 100vh;
		width: 100vw;
		background-size: cover;
	}

	section {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
