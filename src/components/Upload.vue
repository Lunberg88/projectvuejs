<template>
    <form method="post" enctype="multipart/form-data">
      <input type="file" id="cvUpload" @change="onFileChange">
      <label for="cvUpload">
        <i aria-hidden="true" class="icon ico-nav material-icons">attach_file</i>
      </label>
      <input type="text" id="file_text" readonly disabled placeholder="select cvs...">
      <v-btn color="info" small @click="uploadFile" v-show="inputFileValue != ''">
        <v-icon class="pr-2">cloud_upload</v-icon> Upload
      </v-btn>
      <v-btn color="secondary" flat v-if="deleteFileValue != ''" small @click="deleteFile">
        <v-icon>delete</v-icon> Delete
      </v-btn>
    </form>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'Upload',
    data() {
      return {
        val: '',
        del: ''
      }
    },
    computed: {
      inputFileValue() {
        return this.val
      },
      deleteFileValue() {
        return this.del
      }
    },
    methods: {
      uploadFile() {
        let filesCvs = new FormData();
            filesCvs.set('cvs', this.val);
        axios({
          method: 'post',
          url: 'http://ajax-lv/api/candidates/cvsUpload',
          data: filesCvs,
          headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('access_token')
          }
        })
          .then(res => {
            if(res.data.fileName) {
              this.del = res.data.fileName;
              this.$emit('file-uploaded', this.del)
            }
            this.val =  '';
          })
          .catch(e => {
            console.log('Error: ' + e)
          })
      },
      deleteFile() {
        axios({
          method: 'delete',
          url: 'http://ajax-lv/api/candidates/delete/cvsUpload',
          data: {'delFile': this.del},
          headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('access_token')
          }
        })
          .then(res => {
            if(res.data.message) {
              this.del = '';
              this.$emit('file-removed');
            }
            this.val = '';
          })
          .catch(e => {
            console.log('Error: ' + e.error)
          })
      },
      onFileChange(e) {
        let files = e.target.files[0];
        this.val = '';
        this.val = files;
        document.getElementById('file_text').value = files.name;
      }
    }
  }
</script>

<style>
  #cvUpload {
    display: none;
  }
  label[for="cvUpload"] {
    border-radius: 50%;
    padding: 10px 7px;
    background: #2196F3;
    color: white;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
  }
  label[for="cvUpload"] > i {
    margin: 0 !important;
    color: white !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  input#file_text {
    border: 0;
    width: 180px;
    text-align: center;
    color: gray;
    border-bottom: 2px solid #d2d2d2;
  }
  input#file_text:focus {
    outline: 0 !important;
  }
  input#file_text::placeholder {
    color: #c3c3c3;
  }
</style>
