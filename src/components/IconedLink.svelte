<script>
  import Icon from './Icon';
  export let href;
  export let active;
  export let icon;
  export let text;
</script>

<a {href} class:active>
  <Icon {icon} />
  {text}
</a>

<style>
  a {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    outline: 0;
    position: relative;
    font-weight: 600;
    font-size: 1.4rem;
  }

  a::after {
    content: '';
    position: absolute;
    bottom: -0.4rem;
    left: calc(50% - 0.25rem);
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: var(--color-orange);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  a.active:after {
    opacity: 1;
  }

  a :global(i) {
    width: 4.5rem;
    height: 3.5rem;
  }
</style>
