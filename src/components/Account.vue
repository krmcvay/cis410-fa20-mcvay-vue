<template>
    <div>
        <h1>Account</h1>
        <hr/>
        <h3>{{firstName}}'s Purchases</h3>

    <p v-if="accountError" class="form-text text-danger">Can not get your account information. Please try again later.</p>
        <table v-if="purchasesByCustomer" class="table">
            <thead>
                <th>Book PK</th>
                <th>Date Purchased</th>
                <th>Quantity Purchased</th>
            </thead>
            <tbody>
                <tr v-for="thisPurchase in purchasesByCustomer" :key="thisPurchase.PurchasePK">
                    <th><router-link :to="`/books/${thisPurchase.BookFK}`">{{thisPurchase.Title}}</router-link></th>
                    <th>{{thisPurchase.DatePurchased}}</th>
                    <th>{{thisPurchase.QuantityPurchased}}</th>
                </tr>
            </tbody>   
        </table>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return {
            purchasesByCustomer: null,
            accountError: false
        }
    },
    computed:{
        firstName(){
            console.log(this.$store.state)
            return this.$store.state.user.FirstName
        },
        created(){
            axios.get("/purchases/me", {
                headers: {
                    Authorization: `Bearer ${this.$store.state.token}`
                }
            })
            .then((response)=>{
                console.log("here is the purchases/me response:", response)
                this.purchasesByCustomer = response.data
            }).catch(()=>{
                this.accountError = true
            })
        }
    }
}
</script>

<style scoped>

</style>