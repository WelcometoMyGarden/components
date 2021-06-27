<nav>
  <slot name="brand" />

  <slot name="links" />
</nav>

<style>
  nav {
    display: flex;
    align-items: center;
    height: var(--height-nav);
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0 0 0 5rem;
    z-index: 100;
    background-color: var(--color-white);
    box-shadow: 0 0 3.3rem rgba(0, 0, 0, 0.1);
  }
  nav > :global(ul) {
    display: flex;
    align-items: center;
    height: 100%;
    padding-right: 5rem;
  }
  nav > :global(ul > li) {
    font-weight: 600;
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 8rem;
    text-align: center;
    margin-left: 4rem;
  }
  @media screen and (max-width: 1200px) {
    :global(body) {
      --height-nav: 5.5rem;
    }
    nav {
      padding-left: 3rem;
    }
    nav > :global(ul) {
      padding-right: 3rem;
    }
    nav > :global(ul > li) {
      margin-left: 2.8rem;
    }
  }
  @media screen and (max-width: 1100px) {
    nav {
      padding-left: 2rem;
    }
    nav > :global(ul) {
      padding-right: 2rem;
    }
  }
  @media screen and (max-width: 700px) {
    nav {
      display: none;
    }
  }
</style>
