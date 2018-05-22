<template>
  <div class="admin-page">
    <nav>
      <router-link to="/login"><button>Logout</button></router-link>
    </nav>
    <router-view></router-view>
    <div class="receive-chat-user">
      <ReceiveChat />
    </div>
  </div>
</template>

<script>
import ReceiveChat from './ReceiveChat'

export default {
  name: 'admin-page',
  components: {
    ReceiveChat
  }
}
</script>

<style>
  .receive-chat-user{
    padding-top: 50px;
  }

  nav{
    position: fixed;
    top: 0px;
    text-align: right;
    width: 100%;
    right: 0px;
    padding: 20px 10px;
    background-color: #51b983;
  }

  nav button{
    padding: 10px 15px;
    color: #fff;
    background-color: #51b983;
    border-radius: 4px;
    border: 1px solid #fff;
    transition: all 0.2s;
  }

  nav button:hover{
    background-color: #fff;
    color: #51b983;
  }
</style>