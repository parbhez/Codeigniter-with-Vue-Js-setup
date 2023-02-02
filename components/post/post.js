app.component('post-component', {

    template:
    /*HTML*/
        `
         <p>{{ heading }} {{ base_url }}{{ msg}} </p>
         
         <table class="table table-bordered">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Body</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, key) in posts" :key="key" v-if="posts.length">
                    <td>{{ row.id }}</td>
                    <td>{{ row.title }}</td>
                    <td>{{ row.body }}</td>
                    <td>
                    <a href="base_url + row.id" class="btn btn-success btn-sm">Edit</a>
                    </td>
                </tr>
               
                
            </tbody>
            </table>
    `,

    props: {
        msg: {
            type: String
        }
    },

    data() {
        return {
            heading: 'Manage Post',
            posts: [],
        }
    },

    mounted() {
        this.get_all_posts();
        document
    },

    computed: {
        base_url() {
            return $("#base_url").val();
        }
    },
    methods: {
        async get_all_posts() {
            await axios.get('https://jsonplaceholder.typicode.com/posts')
                .then((response) => {
                    if (response.data) {
                        this.posts = response.data;
                    } else {
                        console.log('Data not found')
                    }
                    // console.log(this.posts);
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    }

});