<script>
  export let text;
</script>

<div class="header">
  <p>{text}</p>
  <div style="position:absolute;left:20px">
    <img
      loading="lazy"
      width="310px"
      height="82px"
      src="https://the-alliance.org/wp-content/uploads/2021/10/MicrosoftTeams-image-19.png"
    />
  </div>
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
  .header {
    height: 82px;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: white;
  }
  .header > p {
    text-align: center;
    width: 100%;
    font-family: "Interstate Bold Custom", Helvetica, Arial, Lucida, sans-serif;
    font-size: 34px;
    color: #10686e;
  }
</style>
