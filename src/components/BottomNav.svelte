<script>
  export let hideOnLarge = true;
  let hamburger;
  let drawerIsShown = false;
  const toggleDrawer = () => (drawerIsShown = !drawerIsShown);
  const handleClickOutsideDrawer = (event) => {
    const { clickEvent } = event.detail;
    if (drawerIsShown && !hamburger.contains(clickEvent.target)) toggleDrawer();
  };
</script>

<nav class:hide-on-large={hideOnLarge}>
  <slot />
</nav>

<style>
  @media screen and (min-width: 700px) {
    .hide-on-large {
      display: none;
    }
  }
  :global(body) {
    --height-nav: 9rem;
  }
  nav {
    width: 100%;
    height: var(--height-nav);
    position: fixed;
    bottom: 0;
    left: 0;
    box-shadow: 0px 0px 3.3rem rgba(0, 0, 0, 0.1);
    background-color: var(--color-white);
    font-size: 1.4rem;
    z-index: 120;
    padding: 0.8rem 0;
  }
  nav :global(.main) {
    display: flex;
  }
  nav :global(.main) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
  }
  nav :global(.main .item:not(.hamburger)) {
    height: 100%;
  }
</style>
