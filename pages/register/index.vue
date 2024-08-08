<template>
    <AuthCard 
        title="Sign Up" 
        :providers="providers" 
        v-model="fields"
        action="register" 
        :loading="loading"
        @submit="onSubmit"
    />
</template>

<script setup lang="ts">

definePageMeta({
    name: 'Register',
    layout: 'auth',
    pageTransition: {
        name: 'fade',
        mode: 'out-in'
    },
})
import type { FormField, Provider } from '~/utils/types';
const username = ref('lordbaljeet');
const email = ref('lordbaljeet@gmail.com');
const password = ref('Katakuri24');
const confirmPassword = ref('Katakuri24');

const loading = ref(false);

const errors = ref<string[]>([]);

const providers: Provider[] = [
    {
        icon: 'mdi-google',
        label: 'Google'
    }, {
        icon: 'mdi-github',
        label: 'Github'
    },
    {
        icon: 'mdi-twitter',
        label: 'Twitter'
    }
];

const router = useRouter();

const fields = ref<FormField[]>([
    {
        label: 'Username',
        type: 'text',
        model: username,
        rules: [
            function usernameValidator(value: string) {
                const regex = new RegExp(/^[\w]{5,}$/)
                return regex.test(value) || "Invalid username"
            }
        ],
        password: false,
    },
    {
        label: 'Email',
        type: 'email',
        model: email,
        rules: [
            function emailValidator(value: string) {
                const regex = new RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/)
                return regex.test(value) || "Invalid email address"
            }
        ],
        password: false,
    },
    {
        label: 'Password',
        type: 'password',
        model: password,
        rules: [
            function passwordValidator(value: string) {
                const regex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)
                return regex.test(value) || "Password does not meet requirements"
            }
        ],
        password: true,
    },
    {
        label: 'Confirm Password',
        type: 'password',
        model: confirmPassword,
        rules: [
            function passwordMatch(value: string) {
                return password.value === value || "Passwords do not match"
            }
        ],
        password: true,
    },
])

async function onSubmit() {
    errors.value = []
    loading.value = true
    await useFetch('/api/auth/signup', {
        method: 'POST',
        body: {
            username: username.value,
            email: email.value,
            password: password.value,
        }
    }).then((response) => {
        const error = response.error.value
        if (error) {
            if (error.response) {
                for (const property in error.response._data) {
                    errors.value.push(`${property} : ${error.response._data[property]}`)
                }
                console.log('error response: ', JSON.stringify(error.response))
            } else if (error.message) {
                errors.value.push('Something went wrong! Please try again.')
            }
            loading.value = false
        }
        else {
            loading.value = false
            console.log(response.data.value);
            router.push({ path: '/login' })
        }

    }).catch((error) => {
        console.log(error)
        errors.value.push('Something went wrong! Please try again.')
        loading.value = false
    })
}

</script>