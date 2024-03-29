import axios from 'axios'

// LogIn/SignIn functionality
export const signIn = {
  data(){
    return {
        user: {
            username:'',
            password:''
        },
        // successMessage:''
    }
  },
methods: {
    async signin(){
        try{
            const res = await axios.post('/user/signin', {
                username:  this.user.username,
                password:  this.user.password,
            });
            // console.log(res)
            // console.log(res.data.successMessage)
            this.$router.push('/content')
        } catch(err){
            console.log(err)
        }

    }
  }
}

// SignUp functionality
export const signUp = {
  data(){
    return {
        user: {
            firstName:'',
            lastName: '',
            username: '',
            email: '',
            password: '',
        },
    }
  },
  methods: {
    async validation(){
      if(!this.user.username){
        this.user.err = 'Username is required'
      }
    },
    async createUser(){
        try{
            const res = await axios.post('/user/signup', {
                firstName: this.user.firstName,
                lastName:  this.user.lastName,
                username:  this.user.username,
                email:  this.user.email,
                password:  this.user.password,
            });
            console.log(res)
            this.$router.push('/content')

        } catch(err){
            console.log(err)
        }

        // console.log(this.v$)

    },
  },
}

// Check if user is logged in
export const checkIfLogin = {
    data() {
        return {
          user: {
              isAuthenticated: false,
              username: ''
          },
            currentUser:'',
            userId:''
        }
    },
    async created(){
      try{
          const res = await axios.get(`/user/signin`);
          this.user = {isAuthenticated: true, username: res.data.session.passport.user}
          // console.log(res)  
      } catch(err){
          console.log('user is not signIn', err)
      }

  },
    methods: {
      async userIsLogin() {
        const user = await axios.get(`/user/signin`)
        this.currentUser = user.data.session.passport.user;
        this.userId = user.data.user._id
      }
    }
}

// fetch all contents
export const fetchPosts = {
  data() {
    return {
        posts: [],
        successMessage:'',
        username:''        
      }
  },
  async mounted(){
    this.fetchData()
  },
  // async created(){
  //   // From the CheckIfLogin()
  //   // calling the userIsLogin()
  //   // to display the heart and trah btns
  //   this.userIsLogin()
  // },
  methods:{
    async fetchData(){
        const res = await axios.get('/content')
        // console.log(res.data.successMessage)
        this.posts = res.data.contents;
        this.successMessage = res.data.successMessage;
        // console.log(res.data.successMessage)
      },  
      navigateToAllPublications(){
        this.$router.push({name: 'Home2'});
      },
      navigateToUserProfile(usern){
        this.$router.push({name: 'Profile', params: {username: usern}});
    },
  },
}

// Get user Profile, posts
export const getProfile = {
  data() {
    return {
        posts:[],
        // single:[],
        username: '',        
      }
  },
  async created(){
    this.getProfile(this.$route.params.username);
  },
  methods:{
    async getProfile(username){
      const res = await axios.get(`/user/profile/${username}`)
      this.username = res.data.user.username;
      this.posts = res.data.posts;
      // this.single = res.data.single;
      // console.log(res.data.single)
    },
    navigateToUserSettings(){
      this.$router.push({name: 'UserUpdateConfig', params: {username: this.username}});
    },
  }
}

// user config page
export const userConfigurationPage = {
  data(){
    return{
        user: {
            id:'',
            firstName:'',
            lastName:'',
            bio:'',
            username:'',
        },
        
    }
  },
  async created(){
    this.getProfile(this.$route.params.username)
  },
  methods: {
    async getProfile(username){
      try{
          const res = await axios.get(`/user/profile/${username}`)
          this.user.firstName = res.data.user.firstName;
          this.user.lastName = res.data.user.lastName;
          this.user.bio = res.data.user.bio;
          this.user.username = res.data.user.username;
          this.user.id = res.data.user._id
          //console.log(this.user.id)
      } catch(err){
          console.log(err)
      }
    },
    async updateProfile(){
      try{
          let form = new FormData();
          form.append('username', this.user.username);
          form.append('lastName', this.user.lastName);
          form.append('firstName', this.user.firstName);
          form.append('bio', this.user.bio);

          const res = await axios.put(`/user/profile/${this.user.username}`, this.user)
          console.log(res)
          this.$router.push(`/profile/${this.user.username}`)
      } catch(err){
          console.log(err)
      }
    },
    async deleteAccount(){
      try{
          const id = this.user.id
          const del = await axios.delete(`/user/users/${id}`)
          this.$router.push('/user/signup')
      } catch(err){
          console.log(err)
      }
    }
  }
}

// Fetch all single posts
export const allSinglePosts = {
  data() {
    return {
        posts: [],
        successMessage:''
    }
  },
  async created() {
    this.fetchSingleData()
    this.userIsLogin()
  },
  methods:{
    async fetchSingleData(){
      try{
          const res = await axios.get('/singlecontent/publications')
          console.log(res.data)
          this.posts = res.data.contents;
          this.successMessage = res.data.successMessage;
          // console.log(res)
      } catch(err){
          console.log(err)
      }
    },
    async deleteContent(id){
      try{
          const res = await axios.delete(`/singlecontent/delete/${id}`)
          this.$router.go(0)
      } catch(err){
          console.log(err)
      }

    },
    async likeContent(postId){
      const res = await axios.post(`/singlecontent/like/${postId}`)
      this.$router.go(0)
      console.log(res)
    },
    navigateToAllPosts(){
      this.$router.push({name: 'Home'});
   },
  }
}

// fetch publication by ID with images
export const fetchContentById = {
  data(){
    return {
        post:[],
        imageUrl: '',
        username: '',
        currentUser: '',
        userId:'',
        liked: [],
        successMessage:''
        
    }
  },
  async created(){
    this.fetchData(this.$route.params.id);
  },
  methods:{
    async fetchData(id){
      const likeHearth = document.getElementById('icon-heart');
      // const user = await axios.get(`/user/signin`);
      // const res = await axios.get(`/content/${id}`);
      // console.log(res, user)
      try {
          const res = await axios.get(`/content/${id}`);
          this.successMessage = res.data.successMessage;
          this.post = res.data.post
          this.imageUrl = this.post.image[0].url;
          this.username = this.post.author.username;
          this.liked = this.post.likes;
          // console.log(res.data)
          
          const like = Object.values(this.liked)
      } catch (error) {
          console.log(error);
      }

    },
    async likePost(){    
      try{
          const id = this.$route.params.id
          const response = await axios.post(`/content/${id}/like`);
          this.$router.go(0)
      } catch(err){
          console.log(err)
      }
    },
    async deleteContent(id){
      try{
          const res = await axios.delete(`/content/${id}`)
          this.$router.push('/content')
      } catch(err){
          console.log(err)
      }

    },
    async navigateToUserProfile(){
      this.$router.push({name: 'Profile', params: {username: this.username}});
    }

  }
}

// All signle posts/thoughts by user
export const allSinglePostsByUser = {
  data(){
    return{
        description:[],
        single:[],
        username:'',
    }
  },
  async created(){
    this.getProfile(this.$route.params.username);
  },
  methods: {
    async getProfile(username){
      const res = await axios.get(`/user/profile/${username}`)
      console.log(res.data.description)
      this.username = res.data.user.username;
      // this.description = res.data.description;
      this.single = res.data.single;
      
    },
    async deleteContent(id){
      try{
          const res = await axios.delete(`/singlecontent/delete/${id}`)
          this.$router.push('/content')
      } catch(err){
          console.log(err)
      }

    },
    navigateToUserSettings(){
      this.$router.push({name: 'UserUpdateConfig', params: {username: this.username}});
    },
    navigateToUserProfile(){
      this.$router.push({name: 'Profile', params: {username: this.username}});
    },
    async likeContent(postId){
      const res = await axios.post(`/singlecontent/like/${postId}`)
      this.$router.go(0)
      // console.log(res)
},
  }
}

// Create Post with image
export const createPostWithImage = {
  data(){
    return {
        post:{
            description:'',
            image: '',
          },
        };
    },
    methods: {
      async navigateToSinglePost(){
        this.$router.push({name: 'CreateSingle'});
      },
      selectFile(){
        this.post.image = this.$refs.photo.files[0];
        // console.log(this.$refs.photo.files[0])
      },
      async upload(){
        try{
            const formData = new FormData();
            formData.append('images', this.post.image);
            formData.append('description', this.post.description);
            const res = await axios.post('/content', formData);
            this.$router.push('/content')
            console.log(res)

        } catch(err){
            console.log(err)
        }
    },
    }

}

// Create Post with no image, form
export const createPostWithoutImage = {
  data(){
    return {
        singleDescription:'',
        username:''

    };
  },
  methods:{
    async navigateToPost(){
      this.$router.push({name: 'Create'});
    },
    async upload(){
      try{
          const description = {
              description: this.singleDescription
          }
          const res = await axios.post('/singlecontent', description);
          this.$router.push({name: 'Home2'});
          console.log(res)

      } catch(err){
          console.log(err)
      }
    },
  }
}

// Edit Post form
export const editPost = {
  data(){
    return{
      id: '',
      post:[],
      imageUrl: ''
    }
  },
  async created(){
    this.fetchData(this.$route.params.id)
 }, 
  methods:{
    async fetchData(id){
      const res = await axios.get(`/content/${id}`)
      this.post = res.data.post;
      this.imageUrl = this.post.image[0].url;
      this.id = this.post._id;
      // console.log(this.id)
      console.log(res)
    },
    async updatePost(){
      let form = new FormData();
      form.append('description', this.post.description);
      form.append('image', this.post.image);
      
      const res = await axios.put(this.$route.params.id, this.post);
      // this.$router.push('/content')
      this.$router.push({name: 'Content', params: {id: this.id}});
    },

  }
}

// Header profile; display user info
export const headerProfile = {
  data(){
    return{
        firstName:'',
        lastName:'',
        bio:'',
    }
  },
  async created(){
    this.getProfile(this.$route.params.username);
    this.userIsLogin()
    
  },
  methods: {
    async getProfile(username){
      const res = await axios.get(`/user/profile/${username}`)
      this.username = res.data.user.username;
      this.firstName = res.data.user.firstName;
      this.lastName = res.data.user.lastName;
      this.bio = res.data.user.bio;
      // this.posts = res.data.posts;
    },
    navigateToUserSettings(){
      this.$router.push({name: 'UserUpdateConfig', params: {username: this.username}});
    },
    navigateToUserProfile(){
      this.$router.push({name: 'SinglePostsByUser', params: {username: this.username}});
    }
  }
}

// Navbar 
export const navbar = {
  data(){
    return{
      // user: {
      //   isAuthenticated: false,
      //   username: ''
      // }
    }
  },
  methods: {
    async logout(){
        const res = await axios.get(`/user/logout`)
        this.$router.push({name: 'SignInForm'});
    },
    dropdown(){
        const btn = document.getElementById('btn-menu');
        const menu = document.getElementById('menu');

        btn.addEventListener('click', () => {
            btn.classList.toggle('open');
            menu.classList.toggle('flex');
            menu.classList.toggle('hidden');
        })

    }
}
}

// Profile Page
export const profileUser = {
  data(){
    return{
      successMessage:'',
      username:'',
    }
  },
  async created(){
    this.getProfile(this.$route.params.username);
  },
  methods:{
    async getProfile(username){
      const res = await axios.get(`/user/profile/${username}`)
      this.username = res.data.user.username;
      this.successMessage = res.data.successMessage;

      // console.log(res.data)
    },
    navigateToUserProfile(){
      this.$router.push({name: 'SinglePostsByUser', params: {username: this.username}});
    },
    navigateToUserSettings(){
      this.$router.push({name: 'UserUpdateConfig', params: {username: this.username}});
    },
  }
}

// create review functionality
export const createReview = {
  data(){
    return {
      review:{
        body:''
      }
    }
  },
  methods: {
    upload(){
        this.createReview()
    },
    async createReview(){
        try{
            const id = this.$route.params.id;
            const res = await axios.post(`/content/${id}/reviews`, {
                body: this.review.body
            });
            console.log(res);
            this.$router.go(0)

        } catch(err){
            console.log(err)
        }

    }
}
}

// Display Reviews
export const displayReviews = {
  data(){
    return{
      successMessage:'',
        review:{
            username: '',
            reviewId:''
        },
        currentUser: '',
        liked: []
    }
  },
  methods:{
    async likeContent(reviewId){
        const id = this.$route.params.id
        const response = await axios.post(`/content/${id}/like/${reviewId}`);
        this.$router.go(0)
    
    },
    async fetchData(){
        const id = this.$route.params.id
        const res = await axios.get(`/content/${id}/reviews`)
        this.review = res.data.post
        this.liked = res.data.likes
        this.username = res.data.author
        this.successMessage = res.data.successMessage;
        console.log(res.data)
    },
    async deleteReview(id){
        try{
            const idContent = this.$route.params.id
            const deleteReview = await axios.delete(`/content/${idContent}/reviews/${id}`)
            this.$router.go(0)

        } catch(err){
            console.log(err)
        }
    }
  }
}

// SearchBox functionality
export const searchBox = {
  data(){
    return{
      users:[],
      searchTerm:'',
      matchingUser:null,
      username:''
    }
  },
  async created(){
    const res = await axios.get(`/user/`)
    this.users = res.data
  },
  computed:{
    match(){
        return this.users.find((user => user.username === this.searchTerm))
    }
  },
  methods: {
    searchUsers(){
        this.matchingUser = this.match;
    },
    goToProfile(username){
        console.log(username)
        this.$router.push({name: 'Profile',  params: {username: this.matchingUser.username}})
    }
}

}