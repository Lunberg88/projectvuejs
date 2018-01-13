<template>
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-default">
                <div class="panel-title"><h3>Breadcrumbs:</h3> <u>{{ $route.params.username }}</u></div>
                <div class="panel-body">
                    <router-link to="/user/root" class="btn btn-success">Info</router-link>
                    <router-link to="/user/root/profile" class="btn btn-success">Profile</router-link>
                    <hr>
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

