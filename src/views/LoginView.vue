<template>
    <div class="login-page">
        <transition name="fade">
            <div v-if="!registerActive" class="wallpaper-login"></div>
        </transition>
        <div class="wallpaper-register"></div>

        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
                    <div v-if="!registerActive" class="card login" v-bind:class="{ error: emptyFields }">
                        <h1>Sign In</h1>
                        <form class="form-group" @submit.prevent>
                            <input v-model="usernameLogin" type="text" class="form-control" placeholder="Username" required>
                            <input v-model="passwordLogin" type="password" class="form-control" placeholder="Password" required>
                            <input type="submit" class="btn btn-primary" @click="doLogin">
                            <!--
                            <p>Don't have an account? <a href="#" @click="registerActive = !registerActive, emptyFields = false">Sign up here</a>
                            </p>
                            <p><a href="#">Forgot your password?</a></p>
                            -->
                        </form>
                    </div>

                    <div v-else class="card register" v-bind:class="{ error: emptyFields }">
                        <h1>Sign Up</h1>
                        <form class="form-group">
                            <input v-model="usernameReg" type="text" class="form-control" placeholder="Username" required>
                            <input v-model="passwordReg" type="password" class="form-control" placeholder="Password" required>
                            <input v-model="confirmReg" type="password" class="form-control" placeholder="Confirm Password" required>
                            <input type="submit" class="btn btn-primary" @click="doRegister">
                            <p>Already have an account? <a href="#" @click="registerActive = !registerActive, emptyFields = false">Sign in here</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import dispatchConstants from '../common/dispatchConstants'

    export default {
        data() {
            return {
                registerActive: false,
                usernameLogin: "",
                passwordLogin: "",
                usernameReg: "",
                passwordReg: "",
                confirmReg: "",
                emptyFields: false
            }
        },
        methods: {
            doLogin() {
                if (this.usernameLogin === "" || this.passwordLogin === "") {
                    this.emptyFields = true;
                } else {
                    this.$store.dispatch(dispatchConstants.userLogin, {
                        username: this.usernameLogin,
                        password: this.passwordLogin
                    })
                }
            },
            doRegister() {
                if (this.usernameReg === "" || this.passwordReg === "" || this.confirmReg === "") {
                    this.emptyFields = true;
                } else {
                    alert("You are now registered");
                }
            }
        }
    }
</script>


<style lang="scss" scoped>
    p {
        line-height: 1rem;
    }

    .card {
        padding: 20px;
    }

    .form-group {
        input {
            margin-bottom: 20px;
        }
    }

    .login-page {
        align-items: center;
        display: flex;
        height: 60vh;

        h1 {
            margin-bottom: 1.5rem;
        }
    }

    .error {
        animation-name: errorShake;
        animation-duration: 0.3s;
    }

    @keyframes errorShake {
        0% {
            transform: translateX(-25px);
        }
        25% {
            transform: translateX(25px);
        }
        50% {
            transform: translateX(-25px);
        }
        75% {
            transform: translateX(25px);
        }
        100% {
            transform: translateX(0);
        }
    }
</style>
