<<template>
  <div>
    <div style="display:inline-block" v-for="(item) in Data">
      <div class="box-receive">
        <span class="close-btn">Close x</span>
        <div class="send-mes">
          <div class="box-receive-chat">
            <div class="fixed" v-for="items in item">
              <div class="chat friend">
                <div class="chat-message">
                  <p v-if="items.Id === 'User'" style="color: green">User:</p>
                  <p v-else style="color: red; text-align:right">
                    Admin:
                  </p>
                  <div class="message-box" v-bind:class=" (items.Id === 'User') ? 'user-css' : 'ad-css' ">
                    <p>{{items.message}} </p>
                    <p class="chat-time">
                      <span class="chat-time"> {{items.timestamp | formatDate}}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <input type="text" v-model="newComment" />
          <button @click="addComment(item['.key'].valueOf())" >Send message</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/*eslint-disable*/
import firebase, {
get} from '../firebase/index'
import Vue from 'vue'
import Vuefire from 'vuefire'
import dateFilter from '../utils/filter.js'
import moment from 'moment'

Vue.use(Vuefire);
export default {
  name: 'chat',
  data() {
    return {
      comment: '',
      newComment: '',
      loading: true
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
    Data : firebase.database().ref('Chat'),
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
      var container = document.querySelector(".box-receive-chat");
      var scrollHeight = container.scrollHeight;
      container.scrollTop = scrollHeight;
    },
    logOut() {
      firebase.auth().signOut()
    },
    addComment (index) {
      if (this.newComment !== '') {
        this.comment = this.newComment.trim();
        firebase.database().ref('Chat').child(index).push({
          message: this.comment,
          Id: "Admin",
          timestamp: moment().unix()
        });
        this.newComment = "";
      }
    }
  }
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

  .send-mes input{
    vertical-align: bottom;
    padding-left: 10px;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    height: 36px;
    width: 70%;
  }
  
  .box-receive .close-btn{
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

  .box-receive .close-btn:hover {
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
    min-height: 420px;
    border-radius: 4px;
  }
  nav{
    position: fixed;
    top: 0px;
    text-align: right;
    width: 100%;
    right: 0px;
    z-index: 99;
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

  .box-receive-chat{
    height: 352px;
    text-align: left;
    overflow-y: scroll;
    padding: 0px 15px 10px 15px;
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

  .ad-css{
    margin-left: 75px;
  }

  .chat-time{
    text-align: right;
  }

  .fixed:last-child{
    display: none !important;
  }
</style>