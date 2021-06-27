<script>
  export let logo = null;
  export let name;
  export let href;

  export let hideName = false;
  export let hideNameSmallerScreen = true;
</script>

<a {href} class:logo={!!logo} style={logo ? `background-image: url(${logo})` : null} on:click>
  <h1 class:hide-name={hideName} class:hide-name-smaller-screen={hideNameSmallerScreen}>{name}</h1>
</a>

<style>
  a {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .logo {
    background-repeat: no-repeat;
    background-position: left 40%;
    background-size: 7rem auto;
    height: 100%;
  }

  h1 {
    padding-left: 8.5rem;
    font-size: 2.3rem;
    font-weight: 900;
  }

  a:not(.logo) h1 {
    padding-left: 2rem;
  }

  .hide-name {
    display: none;
  }

  @media screen and (max-width: 1200px) {
    h1 {
      font-size: 2rem;
      padding-left: 2rem;
    }
    .logo {
      background-position: left 50%;
      background-size: 6rem auto;
      padding-left: 6rem;
    }
  }

  @media screen and (max-width: 1100px) {
    h1.hide-name-smaller-screen {
      display: none;
    }
  }
</style>
