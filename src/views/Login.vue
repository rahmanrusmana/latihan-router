<template>
    <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
    <form @submit.prevent="login">
        <h3>Login Here</h3>
        <label for="username" >Username</label>
        <input type="text" placeholder="Email or Phone" id="username" v-model="username" required>
        <label for="password">Password</label>
        <input type="password"  placeholder="Password" id="password" v-model="password" required>
        <button type="submit">Log In</button>
    </form>
</template>
 <script>
    import { users } from '../assets/User';

export default {
    data() {
        return {
            username: '',
            password: '',
            isLoggedIn: true

        };
    },
    methods: {
        login() {
            const foundUser = users.find(user => user.username == this.username && user.password == this.password && user.isLoggedin == true);
            if (foundUser) {
                alert('Login berhasil!');
                this.$router.push('/produk');
            } else {
                alert('Username atau password salah');
            }
        },
    },
};

</script>

<style>

/* body{
    background-color: #080710;
} */
    /* .background{
    width: 430px;
    height: 300px;
    position: absolute;
    transform: translate(-50%,-50%);
    left: 50%;
    top: 50%;
}
.background .shape{
    height: 150px;
    width: 150px;
    position: absolute;
    border-radius: 50%;
}
.shape:first-child{
    background: linear-gradient(
        #1845ad,
        #23a2f6
    );
    left: -10px;
    top: -80px;
}
.shape:last-child{
    background: linear-gradient(
        to right,
        #ff512f,
        #f09819
    );
    right: -0px;
    bottom: -80px;
}
form{
    height: 370px;
    width: 200px;
    background-color: rgba(255,255,255,0.13);
    position: absolute;
    transform: translate(-50%,-50%);
    top: 50%;
    left: 50%;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(10, 10, 10, 0.1);
    box-shadow: 0 0 40px rgba(8,7,16,0.6);
    padding: 50px 35px;
}
form *{
    font-family: 'Poppins',sans-serif;
    color: #030303;
    letter-spacing: 0.5px;
    outline: none;
    border: none;
}
form h3{
    font-size: 32px;
    font-weight: 500;
    line-height: 42px;
    text-align: center;
}

label{
    display: block;
    margin-top: 30px;
    font-size: 16px;
    font-weight: 500;
}
input{
    display: block;
    height: 50px;
    width: 100%;
    background-color: #505050;
    border-radius: 3px;
    padding: 0 10px;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 300;
}
::placeholder{
    color: #ffffff;
}
button{
    margin-top: 50px;
    width: 100%;
    background-color: #4CAF50;
    color: #080710;
    padding: 15px 0;
    font-size: 18px;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
} */

</style>
    