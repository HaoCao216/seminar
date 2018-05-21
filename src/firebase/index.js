import firebase from 'firebase'

export const config = {
  apiKey: 'AIzaSyDuHvrYoXpTTeDrJhoQCMtniT7tsn6DN9s',
  authDomain: 'vue-chat-ad7b9.firebaseapp.com',
  databaseURL: 'https://vue-chat-ad7b9.firebaseio.com',
  projectId: 'vue-chat-ad7b9',
  storageBucket: 'vue-chat-ad7b9.appspot.com',
  messagingSenderId: '524227800946'
}

firebase.initializeApp(config)

export function getId () {
  var userId = window.sessionStorage.getItem('userId')
  if (!userId) {
    userId = Math.floor(Math.random() * 100)
    window.sessionStorage.setItem('userId', userId)
  }
  return userId
}

var firebaseRef = firebase.database().ref('Chat')
export default firebase
export var chatRef = firebaseRef.child(getId())
export var get = getId()
