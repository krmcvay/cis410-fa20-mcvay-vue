<template>
    <div>
        <h1>Sign Up</h1>
        <form @submit.prevent="onSubmit">
            <div class="form-group">
                <label for="fname-input">First name</label> 
                <input type="text" id="fname-input" required="required" placeholder="First name" class="form-control" v-model="firstName">
            </div> 

            <div class="form-group">
                <label for="lname-input">Last name</label> 
                <input type="text" id="lname-input" required="required" placeholder="Last name" class="form-control" v-model="lastName">
            </div> 

            <div class="form-group">
                <label for="phone-input">Phone number</label> 
                <input type="text" id="phone-input" placeholder="(555) 555-5555" required="required"  class="form-control" v-model="phoneNumber">
            </div> 

            <div class="form-group">
                <label for="email-input">Email address</label> 
                <input type="email" id="email-input" required="required" placeholder="Enter email" class="form-control" v-model="email"> 
                <small v-if="dubEmail" class="form=text text-danger">Please choose a different email.</small>
            </div> 
            
            <div class="form-group">
                <label for="password-input">Password</label> 
                <input type="password" id="password-input" placeholder="Password" required="required" value="asdfasdf" class="form-control" v-model="password">
            </div> 
            <button type="submit" class="btn btn-primary">Submit</button> 
            <p id="error-signup" class="text-danger" >{{errorMessage}}</p>
            </form>
    </div>
</template>

<script>
import axios from 'axios'
export default {

    data(){
        return{
            firstName:'',
            lastName:'',
            phoneNumber:'',
            email:'',
            password:'',
            errorMessage:'',
            dupEmail: false
            }
        },
    methods:{
        onSubmit(){

            const myFormData = {
                firstName: this.firstName,
                lastName: this.lastName,
                phoneNumber: this.phoneNumber,
                email: this.email,
                password: this.password
            }
            console.log(myFormData)

            axios.post("/customers", myFormData)
            .then((myResponse)=>{
                // console.log(myResponse)
                this.$router.replace("/login?signupsuccess=true")
                })
                .catch((myError)=>{
                    if(myError.response.status === 409){
                        this.dupEmail = true}
                     else{
                        this.errorMessage = "Cannont sign you up. Please try again later."
                     }
                })
        }
    }
}
</script>

<style scoped>

</style>