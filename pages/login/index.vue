<template>
	<AuthCard
		title="Login"
		:providers="providers"
		v-model="fields"
		action="login"
		:loading="loading"
		@submit="onSubmit"
	/>
</template>

<script setup lang="ts">
import type { FormField, Provider } from '~/utils/types';
definePageMeta({
	name: 'Login',
	layout: 'auth',
	pageTransition: {
		name: 'fade',
		mode: 'out-in',
	},
});

const $q = useQuasar();
const email = ref('lordbaljeet@gmail.com');
const password = ref('Katakuri24');

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
]);

const auth = useFirebaseAuth()!;

async function onSubmit() {
	errors.value = [];
	loading.value = true;

	const { login } = useAuth();
	try {
		const { data: user, message } = await login(auth, email.value, password.value);
		loading.value = false;
		$q.notify({
			position: 'bottom-right',
			message: message,
			type: 'positive',
			timeout: 1000,
			progress: true,
		});
		router.push({ path: '/' });
	} catch (error: any) {
		$q.notify({
			position: 'bottom-right',
			message: error.message,
			type: 'negative',
			timeout: 2000,
			progress: true,
		});
		loading.value = false;
	}
}
</script>