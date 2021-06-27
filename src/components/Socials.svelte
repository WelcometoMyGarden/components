<script>
  export let medium = true;
  export let small = false;
  export let socials; // of the form: [{name: "Social", url: "social.com", icon: "images/icon/social"}]
</script>

<ul class="socials" class:medium class:small>
  {#each socials as { name, url, icon } (name)}
    <li>
      <a href={url} target="_blank">
        <img src={icon} alt={name} />
      </a>
    </li>
  {/each}
</ul>

<style>
  .socials {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
  }
  .socials li {
    display: flex;
  }
  .socials.medium li a {
    height: 2.5rem;
    width: 2.5rem;
  }
  .socials.small li a {
    height: 2rem;
    width: 2rem;
  }
  .socials li img {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .socials li:last-child {
    margin-right: 0;
  }
</style>
