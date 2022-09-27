<script>
  import Filetable from "./filetable.svelte";
  import UploadRow from "./uploadrow.svelte";
  import { getStorage, ref, getMetadata, listAll } from "firebase/storage";
  import { onMount } from "svelte";

  const storage = getStorage();
  const refs = ["work", "clients", "pictures", "misc"];
  $: files = {
    work: [],
    clients: [],
    pictures: [],
    misc: [],
  };

  function getFileData() {
    files = {
      work: [],
      clients: [],
      pictures: [],
      misc: [],
    };
    const user = localStorage.getItem("uid");
    refs.forEach((folder) => {
      let reference = ref(storage, `${user}/${folder}`);
      listAll(reference)
        .then((res) => {
          res.items.forEach((itemRef) => {
            getMetadata(itemRef).then((metaData) => {
              files[folder] = [...files[folder], metaData];
            });
          });
        })
        .catch((error) => {});
    });
  }

  onMount(() => {
    let user = "";
    getFileData();
  });
</script>

<div class="accordion accordion-flush" id="fileAccordion">
  <div class="accordion-item">
    <h5 class="accordion-header" id="flush-headingOne">Preset File</h5>
    <div
      id="flush-collapseOne"
      class="accordion-collapse collapse"
      aria-labelledby="flush-headingOne"
      data-bs-parent="#fileAccordion"
    >
      <div class="accordion-body">
        {#if files.work.length > 0}
          <Filetable
            data={files.work}
            folder="work"
            functionProp={() => getFileData()}
          />
        {/if}
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h5 class="accordion-header" id="flush-headingTwo">Client Files</h5>
    <div
      id="flush-collapseTwo"
      class="accordion-collapse collapse"
      aria-labelledby="flush-headingTwo"
      data-bs-parent="#fileAccordion"
    >
      <div class="accordion-body">
        <UploadRow folder="clients" functionProp={() => getFileData()} />
        {#if files.clients.length > 0}
          <Filetable
            data={files.clients}
            folder="clients"
            functionProp={() => getFileData()}
          />
        {/if}
      </div>
    </div>
  </div>
</div>

<style>
  .accordion {
    background-color: white;
    font-family: Georgia, "Times New Roman", Times, serif;
    color: #00393d;
    display: flex-box;
    top: 40px;
    align-items: center;
    text-align: center;
    padding: 20px;
  }
  .accordion-header {
    font-family: "Interstate Custom";
    font-size: 14px;
    color: #10686e;
  }
  .accordion-body {
    padding: 20px;
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
</style>
