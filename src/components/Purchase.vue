<template>
    <div class="row justify-content-center">
        <div class="col-lg-10">
            <div class="card">
                <div class="card-body">
                    <h4>Purchase this Book</h4> 
                    <form id="review-form" @submit.prevent="submitPurchase">
                        <div class="form-group">
                            <label for="ratinginput">Quantity</label> 
                            <input type="number" id="quantityinput" name="quantity" min="1" max="100" required="required" class="form-control" v-model="quantity">
                        </div> 
                        <div class="form-group">
                            <label for="priceinput">Total Price</label> 
                            <textarea row="1" id="priceinput" name="totalprice" required="required" class="form-control" v-model="price"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Place Order</button> 
                        <button v-on:click="cancelReview" type="clear" class="btn btn-outline-danger">Cancel</button> 
                     <p v-if="errorMessage" class="form-text text-danger">{{errorMessage}}</p>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data(){
        return{
            quantity: null,
            price: "",
            errorMessage: null,
        }
    },
    methods:{
        submitPurchase(){
            const myPurchase={
                quantity: this.quatity,
                price: this.price,
                bookFK: this.$route.params.pk
            };
            //console.log("here is the purchase", myPurchase)

            const token = this.$store.state.token;
            axios.post("/purchases",myPurchase,{
                headers:{
                    Authorization:  `Bearer ${token}`
                }
            }).then(()=>{this.$router.replace('/account')})
            .catch(()=>{this.errorMessage = "Unable to execute the purchase. Please try again later"})
        },
        cancelReview(){
            this.$router.go(-1)
        }
    },
    computed:{
        formattedPrice(){
            return new Intl.NumberFormat("en-US",{
            style: 'currency',
            currency: 'USD',
            }).format(this.book.Price)
        },
    }
}
</script>

<style scoped>

</style>