
const firebaseConfig = {
    apiKey: "AIzaSyD3-HGZP_5l4nl_t548P6wNclFLxV6E5nE",
    authDomain: "projeto-login-389d2.firebaseapp.com",
    projectId: "projeto-login-389d2",
    storageBucket: "projeto-login-389d2.appspot.com",
    messagingSenderId: "218713309890",
    appId: "1:218713309890:web:9ff44e918016e945caf15b"
  };
  
  const app = initializeApp(firebaseConfig);

  firebase.initializeApp(firebaseConfig);


  function cadastrar() {
      var auth = null;
      // função de cadastro do firebase com email e senha 
      firebase.auth().createUserWithEmailAndPassword(document.getElementById("email").value, document.getElementById("senha").value)
          .then(function (user) {
              alert("seus dados foi cadastrado com sucesso");
              auth = user;
              //para atualizar o navegador
              document.getElementById('email').value = ''
              document.getElementById('senha').value = ''
          }).catch(function (error) {
              alert("falhar ao cadastrar");
          });
  }