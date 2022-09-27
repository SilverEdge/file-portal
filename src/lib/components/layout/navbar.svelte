<script>
  import { goto } from "$app/navigation";
  import { getAuth, signOut } from "firebase/auth";
  import { isLoggedIn } from "../../../routes/stores/authStore";

  const auth = getAuth();

  function logout() {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("uid");
        goto("/login");
      })
      .catch((error) => {
        console.error(error);
      });
  }
</script>

<div class="nav">
  <!-- <a class="nav-link" href="/">Home</a> -->
  {#if $isLoggedIn}
    <div class="nav-inner">
      <a class="nav-link" on:click|preventDefault={logout} href="/">Sign Out</a>
    </div>
  {:else}
    <!-- <a class="nav-link" href="/login">login</a> -->
  {/if}
</div>

<style>
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
  /* georgia, times new roman, serif */
  .nav {
    height: 48px;
    background-color: #00393d;
    display: flex;
    top: 0px;
    padding: 0px;
    font-size: 14px;
    line-height: 14px;
    text-align: center;
    font-weight: 500;
    align-items: right;
    font-family: "Interstate Custom", Helvetica, Arial, Lucida, sans-serif;
    cursor: pointer;
  }
  .nav-inner:hover {
    background-color: rgb(255, 117, 112);
  }
  .nav-inner {
    background-color: rgb(236, 105, 101);
    right: 0px;
    position: absolute;
    width: 150px;
    height: 48px;
    line-height: 45px;
  }
  a:link,
  a:visited,
  a:hover,
  a:active {
    text-decoration: none;
    color: white;
  }
</style>
