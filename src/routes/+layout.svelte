<!-- The slot allows us to render that page's specific content -->
<script>
  // Initialize firebase from fb.js
  import App from "./fb";
  import Navbar from "$lib/components/layout/navbar.svelte";
  import Header from "$lib/components/layout/header.svelte";
</script>

<!-- The layout file allows you to set a layout that renders on every page  -->
<!-- Presumably, this is how to perform functions on every page, like auth -->

<Navbar />
<Header text="Welcome to the File Portal" />
<slot />

<style>
  :global(body) {
    position: absolute;
    width: 100%;
    top: 0px;
    left: 0px;
    padding: 0px;
    margin: 0px;
    background-color: #00393d;
  }
  :global(a:link) {
    text-decoration: none;
  }
</style>
