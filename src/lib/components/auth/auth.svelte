<script>
  // onMount is a lifecycle method that allows us to do things after all components mount on the page do x,y,z
  import { onMount, beforeUpdate } from "svelte";
  import { getAuth, onAuthStateChanged } from "firebase/auth";
  // This goto is built-in sveltekit functionality that allows us to redirect our page
  import { goto } from "$app/navigation";

  import { isLoggedIn } from "../../../routes/stores/authStore";

  onMount(() => {
    console.log("hello");
    // This gets the current auth from firebase
    const auth = getAuth();
    // Pass in this auth to onAuthStateChanged
    // Also pass in arrow function with argument of user whichgives us access to user while this function is being executed
    onAuthStateChanged(auth, (user) => {
      //If there is a user, log it
      if (user) {
        console.log("Welcome to the file portal");
        isLoggedIn.update(() => true);
      } else {
        isLoggedIn.update(() => false);
        // so if auth state changes and there is no user logged in, go to login
        goto("/login");
      }
    });
  });
</script>
