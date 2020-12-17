<template>
    <div>
        <h1>Books</h1>
        <hr/>

        <table class="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Genre</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="thisBook in books" :key="thisBook.BookPK">
                    <th>{{thisBook.Title}}</th>
                    <td>{{thisBook.Author}}</td>
                    <td>{{thisBook.GenreName}}</td>
                    <td>
                        <router-link :to="`/books/${thisBook.BookPK}`">
                            <button type="button" class="btn btn-primary">Details</button>
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    computed:{
        books(){return this.$store.state.books}
    }
}
</script>

<style scoped>

</style>