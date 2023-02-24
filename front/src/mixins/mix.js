import axios from 'axios'

export const signIn = {
  data(){
    return {
        user: {
            username:'',
            password:''
        },
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
            this.$router.push('/content')

        } catch(err){
            console.log(err)
        }

    }
  }
}

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
        // console.log(user)
        // this.currentUser = (await axios.get(`/user/signin`)).data.session.passport.user;
        // console.log(this.currentUser)
      }
    }
}

export const fetchPosts = {
  data() {
    return {
        posts: [],        
      }
  },
  async mounted(){
    this.fetchData()
  },
  methods:{
    async fetchData(){
        const res = await axios.get('/content')
        this.posts = res.data
      },  
    //   navigateToAllPublications(){
    //     this.$router.push({name: 'Home2'});
    // }
  },
}

export const getProfile = {
  data() {
    return {
        posts:[],
        username: '',        
      }
  },
  async created(){
    this.getProfile(this.$route.params.username);
    // this.currentUser = (await axios.get(`/user/signin`)).data.session.passport.user;
    // this.userIsLogin()
    
  },
  methods:{
    async getProfile(username){
      const res = await axios.get(`/user/profile/${username}`)
      this.username = res.data.user.username;
      // this.firstName = res.data.user.firstName;
      // this.lastName = res.data.user.lastName;
      // this.bio = res.data.user.bio;
      this.posts = res.data.posts;
      // console.log(res)
  },
  }
}

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

export const allSinglePosts = {
  data() {
    return {
        posts: [],
        // username:'',
        currentUser:'',
        userId:'',
        
    }
  },
  // async mounted(){
  //   this.fetchData()
  // },
  methods:{
    async fetchData(){
      try{
          const res = await axios.get('/singlecontent/publications')
          this.posts = res.data
          // console.log(res)

      } catch(err){
          console.log(err)
      }
    },
    async deleteContent(id){
      try{
          const res = await axios.delete(`/singlecontent/delete/${id}`)
          this.$router.push('/content')
      } catch(err){
          console.log(err)
      }

    },
    async likeContent(postId){
      const res = await axios.post(`/singlecontent/like/${postId}`)
      this.$router.go(0)
      console.log(res)
    },
  }
}

export const fetchSinglePost = {
  data(){
    return {
        post: [],
        posts:[],
        imageUrl: '',
        username: '',
        currentUser: '',
        userId:'',
        liked: []
        
    }
  },
  methods:{
    async fetchData(id){
      const likeHearth = document.getElementById('icon-heart')
      try {
          const user = await axios.get(`/user/signin`)
          const res = await axios.get(`/content/${id}`);
          this.post = res.data
          this.userId = user.data.user._id
          this.imageUrl = this.post.image[0].url;
          this.username = res.data.author.username;
          this.liked = res.data.likes
          
          const like = Object.values(this.liked)
          console.log(like)
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

  }
}

export const allSinglePostsByUser = {
  data(){
    return{
        description:[],
        username:'',
        // currentUser:'',
    }
  },
  methods: {
    async getProfile(username){
      const res = await axios.get(`/user/profile/${username}`)
      this.username = res.data.user.username;
      this.description = res.data.description;
      
    },
    async deleteContent(id){
      try{
          const res = await axios.delete(`/singlecontent/delete/${id}`)
          this.$router.push('/content')
      } catch(err){
          console.log(err)
      }

  },
  }
}

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

export const createPostWithoutImage = {
  data(){
    return {
        singleDescription:'',
        username:''

    };
  },
  methods:{
    async upload(){
      try{
          const description = {
              description: this.singleDescription
          }
          const res = await axios.post('/singlecontent', description);
          this.$router.push({name: 'Home'})
          console.log(res)

      } catch(err){
          console.log(err)
      }
    },
  }
}

export const editPost = {
  data(){
    return{
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
      this.post = res.data;
      this.imageUrl = this.post.image[0].url;
      // console.log(res.data)
    },
    async updatePost(){
      let form = new FormData();
      form.append('description', this.post.description);
      form.append('image', this.post.image);
      
      const res = await axios.put(this.$route.params.id, this.post);
      this.$router.push('/content')
  }
  }
}

export const headerProfile = {
  data(){
    return{
        // posts:[],
        username:'',
        firstName:'',
        lastName:'',
        bio:'',
        // currentUser:''
    }
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
  }
}

export const navbar = {
  data(){
    return{
      user: {
        isAuthenticated: false,
        username: ''
      }

    }
  },
  methods: {
    async logout(){
        const res = await axios.get(`/user/logout`)
        this.$router.go(0)
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

export const profileUser = {
  data(){
    return{
      username:'',
      // firstName:'',
      // lastName:'',
      // bio:'',
    }
  },
  async created(){
    this.getProfile(this.$route.params.username);
  },
  methods:{
    async getProfile(username){
      const res = await axios.get(`/user/profile/${username}`)
      this.username = res.data.user.username;
      // this.firstName = res.data.user.firstName;
      // this.lastName = res.data.user.lastName;
      // this.bio = res.data.user.bio;
      // this.posts = res.data.posts;
    },
    navigateToUserProfile(){
      this.$router.push({name: 'SinglePostsByUser', params: {username: this.username}});
  }
  }
}

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

export const displayReviews = {
  data(){
    return{
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
        this.review = res.data
        this.liked = res.data.likes
        //this.username = res.data.author
        //console.log(res.data)
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