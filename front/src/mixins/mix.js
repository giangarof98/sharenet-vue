import axios from 'axios'

export const checkIfLogin = {
    data() {
        return {
            currentUser:'',
            userId:''
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
      }  
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

export const allSinglePosts = {
  data() {
    return {
        posts: [],
        username:'',
        // currentUser:'',
        // userId:'',
        
    }
  },
  async mounted(){
    this.fetchData()
  },
  methods:{
    async fetchData(){
      try{
          const res = await axios.get('/singlecontent/publications')
          this.posts = res.data

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