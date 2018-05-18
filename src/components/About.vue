<template>
  <div class="about">
      <div class="chat-app">
        <transition name="fade">
          <div class="chat-box" v-if="show">
            <div class="chat-box-title">
              <p>Send a message</p>
              <span><img style="left:24px" src="https://d33v4339jhl8k0.cloudfront.net/users/62733.19909.jpg" /></span>
              <span><img style="left:12px" src="https://2.gravatar.com/avatar/e9ab2152721b81bb292ba048f12028d9" /></span>
              <span><img src="https://d33v4339jhl8k0.cloudfront.net/users/183651.102724.png" /></span>
              <span><img style="right:12px" src="https://d33v4339jhl8k0.cloudfront.net/users/141026.49479.png" /></span>
              <span><img style="right:24px" src="https://d33v4339jhl8k0.cloudfront.net/users/55123.78368.jpg" /></span>
              <p>Our support team is here to help!<br>
                We usually respond in a few hours</p>
            </div>
            <div class="input-chat"> 
              <input style="margin-bottom: 5px" type="text" placeholder="Subject"/>
              <input type="text" placeholder="Your email"/>
              <textarea placeholder="How can we help?"></textarea>
              <button style="cursor: pointer">Send message</button>
            </div>
          </div>
      </transition>
    <div class="icon-open" v-on:click="show = !show">
      <img style="width: 50px; cursor: pointer" src="../assets/help.svg" />
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data: function() {
    return {
      show: true
    };
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.input-chat {
  padding: 15px;
  background-color: #f9fafa;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
}
.input-chat textarea::-moz-placeholder {
  font-size: 14px;
  line-height: 1.5;
}
.input-chat textarea {
  margin: 7px 0px;
  width: 328px;
  height: 200px;
  padding: 7px 20px;
  resize: none;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
}

.chat-box {
  border-radius: 7px;
  -webkit-box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.75);
}

.chat-box-title p {
  font-size: 13px;
  line-height: 1.5;
  color: #fff;
  margin: 5px 0px;
}

.chat-box-title {
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  padding: 15px;
  background-color: #51b983;
}
.chat-box img {
  width: 42px;
  border-radius: 50%;
  position: relative;
}

.chat-app {
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  position: fixed;
  right: 10px;
  bottom: 0px;
  width: 400px;
}
.chat-box input {
  margin-bottom: 5px;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  position: relative;
  display: inline-block;
  padding: 7px 20px;
  width: 100%;
  height: 40px;
  font-size: 14px;
  line-height: 1.5;
  color: black;
  background-color: #fff;
  background-image: none;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

.input-chat button {
  width: 100%;
  padding: 7px 0px;
  color: #fff;
  background-color: #51b983;
  border-radius: 4px;
  border: 1px solid #51b983;
}

.icon-open {
  margin-top: 15px;
  text-align: right;
  margin-right: 10px;
  margin-bottom: 15px;
}
</style>