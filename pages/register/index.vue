<template>
	<AuthCard
		title="Sign Up"
		:providers="providers"
		v-model="fields"
		action="register"
		:loading="loading"
		@submit="onSubmit"
		@provider="(provider) => onProviderClick(provider)"
	/>
</template>

<script setup lang="ts">
import type { FormField, Provider } from '~/utils/types';
const {} = useNuxtApp()
definePageMeta({
	name: 'Register',
	layout: 'auth',
	pageTransition: {
		name: 'fade',
		mode: 'out-in',
	},
});

const $q = useQuasar();
const username = ref('lordbaljeet');
const email = ref('lordbaljeet@gmail.com');
const password = ref('Katakuri24');
const confirmPassword = ref('Katakuri24');

const loading = ref(false);

const errors = ref<string[]>([]);

const providers: Provider[] = [
	{
		icon: 'mdi-google',
		label: 'Google',
		name: 'google',
	},
	{
		icon: 'mdi-github',
		label: 'Github',
		name: 'github',
	},
	{
		icon: 'mdi-twitter',
		label: 'Twitter',
		name: 'twitter',
	},
];

const router = useRouter();

const fields = ref<FormField[]>([
	{
		label: 'Username',
		type: 'text',
		model: username,
		rules: [
			function usernameValidator(value: string) {
				const regex = new RegExp(/^[\w]{5,}$/);
				return regex.test(value) || 'Invalid username';
			},
		],
		password: false,
	},
	{
		label: 'Email',
		type: 'email',
		model: email,
		rules: [
			function emailValidator(value: string) {
				const regex = new RegExp(
					/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/
				);
				return regex.test(value) || 'Invalid email address';
			},
		],
		password: false,
	},
	{
		label: 'Password',
		type: 'password',
		model: password,
		rules: [
			function passwordValidator(value: string) {
				const regex = new RegExp(
					/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
				);
				return regex.test(value) || 'Password does not meet requirements';
			},
		],
		password: true,
	},
	{
		label: 'Confirm Password',
		type: 'password',
		model: confirmPassword,
		rules: [
			function passwordMatch(value: string) {
				return password.value === value || 'Passwords do not match';
			},
		],
		password: true,
	},
]);

const auth = useFirebaseAuth()!;

async function onSubmit() {
	errors.value = [];
	loading.value = true;
	const { signUpWithEmail } = useAuth();
	try {
		const { data, message } = await signUpWithEmail(
			auth,
			username.value,
			email.value,
			password.value
		);
		loading.value = false;
		$q.notify({
			position: 'bottom-right',
			message: message,
			type: 'positive',
			timeout: 1000,
			progress: true,
		});
		router.push({ path: '/login' });
	} catch (error: any) {
		loading.value = false;
		$q.notify({
			position: 'bottom-right',
			message: error.message,
			type: 'negative',
			timeout: 2000,
			progress: true,
		});
	}
	// await useFetch('/api/auth/signup/email', {
	// 	method: 'POST',
	// 	body: {
	// 		username: username.value,
	// 		email: email.value,
	// 		password: password.value,
	// 	},
	// })
	// 	.then((response) => {
	// 		const error = response.error.value;
	// 		if (error) {
	// 			$q.notify({
	// 				position: 'bottom-right',
	// 				message: error.statusMessage,
	// 				type: 'negative',
	// 				timeout: 2000,
	// 				progress: true,
	// 			});
	// 			loading.value = false;
	// 		} else {
	// 			loading.value = false;
	// 			$q.notify({
	// 				position: 'bottom-right',
	// 				message: response.data.value?.message,
	// 				type: 'positive',
	// 				timeout: 1000,
	// 				progress: true,
	// 			});
	// 			router.push({ path: '/login' });
	// 		}
	// 	})
	// 	.catch((error) => {
	// 		$q.notify({
	// 			position: 'bottom-right',
	// 			message: error.message,
	// 			type: 'negative',
	// 			timeout: 2000,
	// 			progress: true,
	// 		});
	// 		loading.value = false;
	// 	});
}

async function onProviderClick(provider: string) {
	debugger;
	await useFetch(`/api/auth/signup/${provider}`, {
		method: 'POST',
	})
		.then((response) => {
			const error = response.error.value;
			if (error) {
				$q.notify({
					position: 'bottom-right',
					message: error.statusMessage,
					type: 'negative',
					timeout: 2000,
					progress: true,
				});
			} else {
				$q.notify({
					position: 'bottom-right',
					message: response.data.value?.message,
					type: 'positive',
					timeout: 1000,
					progress: true,
				});
				router.push({ path: '/' });
			}
		})
		.catch((error) => {
			$q.notify({
				position: 'bottom-right',
				message: error.message,
				type: 'negative',
				timeout: 2000,
				progress: true,
			});
		});
}
</script>
