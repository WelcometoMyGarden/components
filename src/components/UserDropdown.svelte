<script>
  export let name;
  import { clickOutside } from '@/directives';

  export let isOpen = false;
  const toggleOpen = () => (isOpen = !isOpen);
  const handleClickOutsideDropdown = () => {
    if (isOpen) toggleOpen();
  };
</script>

<span class="user" use:clickOutside on:click-outside={handleClickOutsideDropdown}>
  <button class="button-container user-button" on:click={toggleOpen}>
    <div class="user-avatar">{name.charAt(0).toUpperCase()}</div>
    <span>{name}</span>
  </button>
  {#if isOpen}
    <slot name="dropdown" class="user-dropdown" {toggleOpen} />
  {/if}
</span>

<style>
  .user {
    --dropdown-shadow: 0px 0px 3.3rem rgba(0, 0, 0, 0.1);
    min-width: 10rem;
    height: 4.5rem;
    box-shadow: var(--dropdown-shadow);
    font-weight: 600;
    background-color: var(--color-white);
    border-radius: 3rem;
    position: relative;
    margin-left: 4rem;
    display: inline-block;
  }
  .user-button {
    border: 1px solid transparent;
    transition: border 300ms ease-out;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2rem;
  }
  .user-button:hover,
  .user-button:focus,
  .user-button:active {
    border: 1px solid var(--color-green);
  }
  .user-avatar {
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-white);
    background-color: var(--color-green);
    border-radius: 50%;
    margin-right: 1rem;
    font-weight: bold;
  }
  .user-dropdown {
    position: absolute;
    z-index: 110;
    top: calc(var(--height-nav) - 1.5rem);
    right: 0;
    width: 21rem;
    padding: 2.4rem 1rem;
    background-color: var(--color-white);
    box-shadow: var(--dropdown-shadow);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    border-radius: 0.6rem;
  }
  .user-dropdown :global(li) {
    width: 100%;
    text-align: left;
    padding-left: 2rem;
    margin-bottom: 2rem;
  }
  .user-dropdown :global(li a) {
    display: flex;
    align-items: center;
  }
  .user-dropdown :global(li i) {
    margin-right: 1rem;
    width: 2.4rem;
    display: flex;
    align-items: center;
  }
  .user-dropdown :global(.separated) {
    padding-top: 1.5rem;
    border-top: 1px solid var(--color-green);
    margin-bottom: 0;
  }
  @media screen and (max-width: 1200px) {
    .user-button {
      padding: 0 1rem;
    }
    .user-avatar {
      width: 2.5rem;
      height: 2.5rem;
      font-size: 1.4rem;
    }
    .user {
      height: 3.5rem;
      margin-left: 2.8rem;
    }
  }
</style>
