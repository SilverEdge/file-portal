<script>
  // Import the necessary modules from Sveltekit
  import { goto } from "$app/navigation";
  // Import the necessary node modules from firebase
  import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
  } from "firebase/auth";
  import { prevent_default } from "svelte/internal";

  // Export our title property
  export let title;

  const auth = getAuth();

  function login() {
    let email = document.getElementById("emailInput").value;
    let password = document.getElementById("passInput").value;
    if (title == "Login") {
      signInWithEmailAndPassword(auth, email, password)
        .then(
          //userCredential is returned if signin is successful
          (userCredential) => {
            const user = userCredential.user;
            //Using localstorage instead of Sveltekit stores for now
            localStorage.setItem("uid", user.uid);
            goto("/");
          }
        )
        .catch((error) => {
          alert("Hello! Email or Password is incorrect; please try again!");
          console.log(error);
        });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then(
          //userCredential is returned if signin is successful
          (userCredential) => {
            const user = userCredential.user;
            //Using localstorage instead of Sveltekit stores for now
            localStorage.setItem("uid", user.uid);
            goto("/");
          }
        )
        .catch((error) => {
          console.log(error);
        });
    }
  }
</script>

<div
  style="background-image:url('https://the-alliance.org/wp-content/uploads/2021/06/illustration-lines-green@2x.png');background-repeat:repeat;background-size: cover;position:absolute;overflow:hidden; height:70vh; width:100%"
/>
<div
  class="login"
  style="display:flex;text-align:center;position:absolute;width:100%;height:60vh;font-family:Interstate Bold Custom;font-size:30px;color:white;font-weight:700;"
>
  <div class="card">
    <div class="form">
      <form on:submit|preventDefault={login}>
        <div>
          <p>Email address</p>
          <input
            type="email"
            class="form-control"
            id="emailInput"
            placeholder="Email Address"
          />
        </div>
        <div>
          <p>Password</p>
          <input
            type="password"
            class="form-control"
            id="passInput"
            placeholder="Password"
          />
        </div>
        <button type="submit" class="btn">Submit</button>
      </form>
    </div>
  </div>
</div>
<div
  style="width:100%;height:3px;background-color:#999999;position:absolute;top:calc(70vh + 130px);left:0px;"
/>

<style>
  .card {
    position: absolute;
    top: 00px;
    margin-top: 0px;
    background-color: #10686e;
    width: 50vw;
    height: calc(70vh - 0px);
    margin-left: 0;
    left: 25vw;
  }
  @font-face {
    font-family: "Interstate Bold Custom";
    font-display: swap;
    src: url("https://the-alliance.org/wp-content/uploads/et-fonts/INTBD___.ttf")
      format("truetype");
  }
  @font-face {
    font-family: "Interstate Custom";
    font-display: swap;
    src: url("https://the-alliance.org/wp-content/uploads/et-fonts/INTR____.ttf")
      format("truetype");
  }
  button {
    background-color: rgb(236, 105, 101);
    border-radius: 50px;
    font-size: 17px;
    font-weight: 500;
    height: 41px;
    line-height: 20.5px;
    margin-top: 40px;
    cursor: pointer;
    border: none;
    color: white;
    font-family: Interstate Custom;
    padding-left: 30px;
    padding-right: 30px;
  }
  button:hover {
    background-color: rgb(255, 117, 112);
  }
  button:active {
    background-color: rgb(255, 117, 112);
  }
  input {
    border: 2px solid white;
    border-radius: 4px;
    height: 20px;
    padding: 10px;
    opacity: 0.9;
  }
  input:focus {
    opacity: 1;
  }
  input:hover {
    opacity: 1;
  }
</style>
