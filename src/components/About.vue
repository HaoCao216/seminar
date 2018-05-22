<<template>
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
              <textarea v-model="newComment" placeholder="How can we help?"></textarea>
              <button @click="addComment()" style="cursor: pointer" v-on:click="show2 = true">Send message</button>
            </div>
            <div class="show-chat" v-if="show2">
              <div class="user-chat-box">
                <div class="chat-side">
                  <div v-for="item in anArray">
                    <div class="chat friend">
                      <div class="chat-message">
                        <p v-if="item.Id === 'User'" style="color: green; text-align:left">You:</p>
                        <p v-else style="color: red; text-align:right">
                          Admin:
                        </p>
                        <div class="message-box" v-bind:class=" (item.Id === 'User') ? 'user-css' : 'ad-css' ">
                          <p>{{item.message}} </p>
                          <p class="chat-time">
                            <span class="chat-time"> {{item.timestamp | formatDate}}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="send-message-box">
                  <input type="text" v-model="newComment" />
                  <button @click="addComment" >Send message</button>
                </div>
              </div>
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
/*eslint-disable*/
import firebase, {
  chatRef
, get,
getId} from '../firebase/index'
import Vue from 'vue'
import Vuefire from 'vuefire'
import dateFilter from '../utils/filter.js';
import moment from 'moment'

Vue.use(Vuefire);
export default {
  name: 'chat',
  data() {
    return {
      comment: '',
      newComment: '',
      loading: true,
      show: false,
      show2: false
    };
  },

  mounted() {
      this.scrollToEnd();
		},
  updated() {
    this.scrollToEnd();
  },
   
  firebase: {
    // can bind to either a direct Firebase reference or a query
   
    anArray: chatRef,
    
    // optionally provide the cancelCallback
    cancelCallback: function () {
       
    },
    // this is called once the data has been retrieved from firebase
    readyCallback: function () {
     
    }
  },
  filters: {
    dateFilter
  },
  methods: {
    scrollToEnd () {
      var container = document.querySelector(".chat-side");
      var scrollHeight = container.scrollHeight;
      container.scrollTop = scrollHeight;
    },
    logOut() {
      firebase.auth().signOut()
    },
    addComment () {
      var userId = get
      if (this.newComment !== '') {
        this.comment = this.newComment.trim();
        chatRef.push({
          message: this.comment,
          Id: "User",
          channel: userId,
          timestamp: moment().unix()
        });
        this.newComment = "";
      }
    }
  }
}
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
.user-chat-box{
  position: absolute;
  width: 380px;
  height: 514px;
  margin: 10px;
  top: 0;
  border-radius: 7px;
  background-color: #fff;
}
.chat-message p{
  margin: 0px;
}
.chat-message p:last-child{
  font-size: 10px;
}
.message-box{
  color: black;
  background: rgba(57, 73, 86, 0.19);
  border-radius: 10px;
  padding: 5px 10px;
  max-width: 230px;
}

.message-box p:first-child{
  font-size: 14px;
}

.user-css{
  text-align: left;
}

.ad-css{
  margin-left: 113px;
  text-align: left;
}

.chat-time{
  text-align: right;
}

.chat-side{
  overflow-y: scroll;
  height: 440px;
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 10px;
  padding-bottom: 5px;
}

.send-message-box {
  margin-top: 10px;
}

.send-message-box input{
  vertical-align: bottom;
  padding-left: 10px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  height: 41px;
  width: 75%;
}

.send-message-box button{
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
  height: 40px;
  width: 20%;
  color: #fff;
  background-color: #51b983;
  border-radius: 4px;
  border: 1px solid #51b983;
}

.chat-side::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: transparent;
   opacity: 0.5;
}

.chat-side::-webkit-scrollbar
{
	width: 6px;
	background-color: transparent;
   opacity: 0.5;
}

.chat-side::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #51b983;
  opacity: 0.5;
}
.show-chat{
  position: absolute;
  height: 533px;
  width: 100%;
  top: 0px;
  background: #0000008c;
  transition: all 0.3s;
}
</style>