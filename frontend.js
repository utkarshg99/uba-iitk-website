var config = {
    apiKey: "AIzaSyA8EgDnBAxzf_9uYp0G81OBf0JJc0ZDcug",
    authDomain: "ubaiitksite.firebaseapp.com",
    databaseURL: "https://ubaiitksite.firebaseio.com",
    projectId: "ubaiitksite",
    storageBucket: "ubaiitksite.appspot.com",
    messagingSenderId: "41170240626"
  };
  firebase.initializeApp(config);
  var db = firebase.firestore();
  var carouselvue = new Vue({
    el: '#carousel-vue',
    data () {
      return {
        carcont: []
      }
    },
    mounted () {
      db.collection("central slider images").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.carcont.push(doc.data());
        });
      });
    }
  });
  var themevue = new Vue({
    el: '#themesvue',
    data () {
      return {
        theme: []
      }
    },
    mounted () {
      db.collection("themes").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.theme.push(doc.data());
        //   console.log(this.theme);
        });
      });
    }
  });
  var inspire = new Vue({
    el: '#inspiration-vue',
    data () {
      return {
        inspirations: []
      }
    },
    mounted () {
      db.collection("home page inspiration images").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.inspirations.push(doc.data());
        });
      });
    }
  });
  var news = new Vue({
    el: '#news-vue',
    data () {
      return {
        newscontent: []
      }
    },
    mounted () {
      db.collection("news").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.newscontent.push(doc.data());
        //   console.log(this.newscontent);
        });
      });
    }
  });