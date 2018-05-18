<template>
  <div class="hello">
    <img src="../assets/logo.png" />
    <h1>{{ msg }}</h1>
    <div class="login-form">
      <div>
        <span><img src="../assets/user.svg"/></span>
        <input type="text" placeholder="Username"/>
      </div>
      <div>
        <span><img src="../assets/locked.svg"/></span>
        <input type="text" placeholder="Password"/>
      </div>
      <button >Login</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data () {
    return {
      msg: 'Welcome to My DashBoard'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login-form img{
  width: 14px;
}

.login-form span{
  position: absolute;
  z-index: 10;
  top: 8px;
  left: 6px;
}

.login-form{
  width: 300px;
  margin: auto;
}

.login-form button{
  width: 100%;
  padding: 7px 0px;
  color: #fff;
  background-color: #1890ff;
  border-color: #1890ff;
  border-radius: 4px;
  border: 1px solid #1890ff;
}

.login-form div{
  position: relative;
  margin: 20px auto;
}

.login-form div input{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  position: relative;
  display: inline-block;
  padding: 4px 25px;
  width: 100%;
  height: 32px;
  font-size: 14px;
  line-height: 1.5;
  color: rgba(0,0,0,.65);
  background-color: #fff;
  background-image: none;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  -webkit-transition: all .3s;
  transition: all .3s;
}

.hello{
  position: relative;
  text-align: center
}

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
