<script>
  import { clickOutside } from '@/directives';

  export let hamburger;
  export let drawerIsShown = false;
  export let toggleDrawer = () => (drawerIsShown = !drawerIsShown);

  const handleClickOutsideDrawer = (event) => {
    const { clickEvent } = event.detail;
    if (drawerIsShown && !hamburger.contains(clickEvent.target)) toggleDrawer();
  };
</script>

<div
  class="drawer"
  class:open={drawerIsShown}
  use:clickOutside
  on:click-outside={handleClickOutsideDrawer}>
  <slot />
</div>

<style>
  .drawer {
    background-color: var(--color-white);
    height: calc(calc(var(--vh, 1vh) * 100) - var(--height-nav));
    width: 25rem;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 100;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    -webkit-font-smoothing: antialiased;
    padding: 8rem 2.5rem 0 1.5rem;
    transition: transform 0.3s cubic-bezier(0.77, 0.2, 0.05, 1);
    transform-origin: 0% 0%;
    transform: translate(100%, 0);
  }
  .drawer.open {
    transform: scale(1, 1);
    opacity: 1;
  }
  .drawer :global(.item) {
    margin-top: 2rem;
  }
  .drawer :global(.item.separated) {
    margin-top: 3.5rem;
  }
  .drawer :global(a) {
    font-weight: 600;
    position: relative;
  }
</style>
