<template>
    <div id="login">
        <b-form @submit="login" @reset="reset">
            <b-form-group
                    id="input-group-1"
                    label="Email address:"
                    label-for="input-1"
                    description="We'll never share your email with anyone else."
            >
                <b-form-input
                        id="input-1"
                        v-model="loginForm.email"
                        type="email"
                        placeholder="Enter email"
                        required
                ></b-form-input>
            </b-form-group>
            <b-form-group
                    id="input-group-2"
                    label="Password:"
                    label-for="input-2"
                    description="We'll never share your password with anyone else."
            >
                <b-form-input
                        id="input-2"
                        v-model="loginForm.password"
                        type="password"
                        placeholder="Enter password"
                        required
                ></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                loginForm: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            login() {
                this.$store.dispatch('login', {
                    email: this.loginForm.email,
                    password: this.loginForm.password
                })
            },
            reset() {
            }
        }
    }
</script>
