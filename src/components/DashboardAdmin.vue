<template>
  <div class="admin-page">
    <nav>
      <button>Logout</button>
    </nav>
    <div class="receive-chat-user">
      <div class="box-receive">
        <span>Close x</span>
        <div class="send-mes">
          <input type="text" />
          <button>Send message</button>
        </div>
      </div>
      <div class="box-receive">
        <span>Close x</span>
        <div class="send-mes">
          <input type="text" />
          <button>Send message</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style>
  .receive-chat-user{
    padding-top: 50px;
  }

  .send-mes{
    position: absolute;
    bottom: 0px;
    width: 100%;
    margin: 8px 0px;
  }

  .send-mes button{
    font-size: 12px;
    font-weight: bold;
    height: 40px;
    width: 20%;
    color: #fff;
    background-color: #51b983;
    border-radius: 4px;
    border: 1px solid #51b983;
  }

  .send-mes input{
    vertical-align: bottom;
    padding-left: 10px;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    height: 36px;
    width: 70%;
  }
  
  .box-receive span{
    position: absolute;
    right: 0px;
    top: -30px;
    background-color: rgba(57,73,86,0.5);
    border: none;
    border-radius: 20px;
    color: #FFF;
    cursor: pointer;
    font-size: 12px;
    line-height: 13px;
    outline: none;
    padding: 6px 12px 6px 12px;
    transition: background-color 200ms ease-in;
  }

  .box-receive span:hover {
    background-color: rgba(57,73,86,1);
  }

  .box-receive{
    position: relative;
    display: inline-block;
    -webkit-box-shadow: 0px 0px 15px -1px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 15px -1px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 15px -1px rgba(0,0,0,0.75);
    margin: 15px;
    width: 360px;
    min-height: 400px;
    border-radius: 4px;
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