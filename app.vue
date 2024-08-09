<template>
	<NuxtLoadingIndicator />
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<script setup>
const router = useRouter();
const route = useRoute();
const user = useCurrentUser();

onMounted(() => {
	watch(user, (user, prevUser) => {
		if (prevUser && !user) {
			router.push('/login');
		} else if (user && typeof route.query.redirect === 'string') {
			router.push(route.query.redirect);
		}
	});
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

body {
	font-family: 'Inter', sans-serif;
}

.page-enter-active,
.page-leave-active {
	transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
	opacity: 0;
	filter: blur(1rem);
}
</style>