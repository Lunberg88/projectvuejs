<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <h3>News...</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4" v-for="(art, index) in news" :key="index">
        <div class="card">
          <img class="card-img-top" width="160" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg" alt="Card image cap">
          <div class="card-block">
            <h4 class="card-title">{{art.title}} #{{art.id}}</h4>
            <p class="card-text">{{art.content}}</p>
            <a href="http://v4-alpha.getbootstrap.com/components/card/" class="btn btn-success">Learn More</a>
            <a @click="deleteNews(art.id)" class="btn btn-danger">Delete</a>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12"><br></div>
    </div>
    <div class="row">
      <div class="col-md-offset-2 col-md-6">
        <div class="form-group">
          <label for="title" class="label-control col-md-2">Title</label>
          <div class="col-md-10">
            <input type="text" id="title" v-model="newsTitle" class="form-control" placeholder="Title..." required>
          </div>
        </div>
        <div class="form-group">
          <label for="description" class="label-control col-md-2">Description</label>
          <div class="col-md-10">
            <input type="text" id="description" v-model="newsDesc" class="form-control" placeholder="Description" required>
          </div>
        </div>
        <div class="form-group">
          <label for="content" class="label-control col-md-2">Content</label>
          <div class="col-md-10">
            <input type="text" id="content" v-model="newsContent" class="form-control" placeholder="Content" required>
          </div>
        </div>
        <div class="form-group">
          <label for="user_id" class="label-control col-md-2">User_id</label>
          <div class="col-md-10">
            <input type="text" id="user_id" v-model="newsUserId" class="form-control" placeholder="user_id" required>
          </div>
        </div>
        <div class="form-group">
          <div class="col-md-offset-2 col-md-4">
            <button id="send" @click="sendNews" class="btn btn-success">Add news</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';

  export default {
    name: 'News',
      data() {
        return {
          news: [],
          errors: [],
          newsTitle: '',
          newsDesc: '',
          newsContent: '',
          newsUserId: ''
        }
      },
      methods: {
       fetchData() {
         axios.get('http://lv.api/api/news')
           .then(response => {
             this.news = response.data})
           .catch(e => {
             this.errors.push(e)
           })
        },
        deleteNews(index) {
          axios.delete('http://lv.api/api/news/delete/' + index)
            .then(response => {
              this.fetchData(),
              console.log(response.data)})
            .catch(e => {
              console.log(e)
          })
        },
        sendNews() {
         axios.post('http://lv.api/api/news/create', {
           title: this.newsTitle,
           description: this.newsDesc,
           content: this.newsContent,
           user_id: this.newsUserId})
           .then(response => {
             this.newsTitle = '',
             this.newsDesc = '',
             this.newsContent = '',
             this.newsUserId = '',
               this.fetchData()
           })
           .catch(e => this.errors.push(e));
         }
      },
      created() {
        this.fetchData()
      }
  }
</script>
<style>
  .card {
    margin: 35px auto 0;
  }
</style>
