<script>
  import NavLink from '../components/NavLink.svelte';

  export let text;
</script>

<ul>
  <li>
    <NavLink {...$$restProps} on:click>{text}</NavLink>
  </li>
</ul>

<style>
  ul {
    list-style: none;
    height: var(--height-nav);
    display: flex;
    align-items: center;
  }

  li {
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
</style>
