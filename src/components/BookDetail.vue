<template>
    <div>
        <div class="card">
            <div class="card-body">
                <h2 class="text-primary">{{book.Title}}</h2>
                <br/>
                <p>Author: <br/> <strong>{{book.Author}}</strong></p>
                <p>Genre: <br/> <strong>{{book.GenreName}}</strong></p>
                <p>Price: <br/> <strong>{{formattedPrice}}</strong></p>
                <p>Publisher: <br/> <strong>{{book.Publisher}}</strong></p>
                <p>ISBN: <br/> <strong>{{book.ISBN}}</strong></p>
            </div>
        </div>
        <br/>
        <router-link v-if="auth" :to="`/books/${this.$route.params.pk}/purchase`">
        <button type="button" class="bth btn-success">Purchase this Book</button>
        </router-link>
        <router-link v-else :to="`/login`">
        <button type="button" class="bth btn-outline-success">Log In to Purchase</button>
        </router-link>
        <br/>
        <br/>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    computed:{
        book(){
            var books = this.$store.state.books;
            var thisBook = books.find((aBook)=> aBook.BookPK == this.$route.params.pk)

            //console.log("here is the book you want", thisBook);
            return thisBook
        },
        formattedPrice(){
            return new Intl.NumberFormat("en-US",{
            style: 'currency',
            currency: 'USD',
            }).format(this.book.Price)
        },
        auth(){return this.$store.state.token}
    }
}
</script>

<style scoped>

</style>