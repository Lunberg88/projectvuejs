<template>
	<div class="row">
		<div class="col-md-offset-4 col-md-4">
			<div class="panel panel-default">
				<div class="panel-title">
					<h3>Login Form</h3>
				</div>
				<div class="panel-body">

					<div class="panel panel-info">
						<div class="panel-heading">Current User Info:</div>
						<div class="panel-body">
							<label class="label label-info">
								{{ isUser.id }}
							</label><br>
							<label class="label label-info">
								{{ isUser.name }}
							</label><br>
							<label class="label label-info">
								{{ isUser.email }}
							</label><br>
							<label class="label label-info">
								{{ isUser.created_at }}
							</label><br>
							<label class="label label-info">
								{{ isUser.updated_at }}
							</label>
						</div>
					</div>

					Only for auth's users!
					<!--<p v-show="auth">Only for auth's users!</p>-->
					<div>
						<form @submit.prevent="login">
							<div class="form-group">
								<label for="email" class="col-md-2 control-label">Email:</label>
								<div class="col-md-10">
									<input type="text" id="email" class="form-control"
									v-model="user.email"
									placeholder="email@example.com">
								</div>
							</div>
							<div class="form-group">
								<label for="password" class="col-md-2 control-label">Password:</label>
								<div class="col-md-10">
									<input type="password" id="password" class="form-control"
									v-model="user.password"
									placeholder="******">
								</div>
							</div>
							<div class="form-group">
								<div class="col-md-offset-2 col-md-10">
									<button class="btn btn-primary">Login
									</button>
									<button @click="getUserAuth" class="btn btn-warning">isUser</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import axios from 'axios'
//import store from '../store'
import Auth from '../store/auth'
	export default {
		data() {
			return {
				user: {
					email: '',
					password: ''
				},
				isUser: []
			}
		},
		
		methods: {
			login() {
				let data = {
					client_id: 2,
					client_secret: 'DHXDZnrTflfTZFVRs8PMLUAAazzEhUUEXfu8mOD0',
					grant_type: 'password',
					username: this.user.email,
					password: this.user.password
				}
				axios.post('http://localhost:8000/oauth/token', data)
				.then(response => {
					if(response.data) {
						Auth.set(response.data.access_token, response.data.expires_in + Date.now())
					}
					console.log(response.data /*Object.keys(response.data)*/)
					console.log(response)
					this.$router.push('/')
				}).catch(e => {
					console.log('Erros: ' + e);
				})
			},
			getUserAuth() {
				axios.get('http://localhost:8000/api/user')
				.then(response => {
					this.isUser = response.data
					console.log(response.data)
				})
				.catch(e => {
					console.log('Login ? ' + e.request)
				})
			}
		}
		
		/*
		computed: {
			auth() {
				return store.state.auth
			}
		},
		methods: {
			check(user) {
				if(!this.auth) {
					return this.$router.push('/static')
				}
			}
		},
		created() {
			this.check()
		},
		beforeUpdate() {
			this.check()
		}
		*/
	}
</script>
<style>
	.panel-default {
		margin-top: 20%;
	}
</style>