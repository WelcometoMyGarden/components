<script>
  import { createEventDispatcher } from 'svelte';
  import { crossIcon } from '../images/icons';
  import Icon from './Icon.svelte';
  export let label;
  export let icon = null;
  export let closeButton = true;
  export let style;
  const dispatch = createEventDispatcher();
  const close = () => {
    dispatch('close');
  };
</script>

<div class="tag" {style} on:click>
  <span>
    {#if icon}
      <div class="icon">
        <Icon {icon} />
      </div>
    {/if}
    {label}
  </span>
  {#if closeButton}
    <button class="icon close" on:click={close}>
      <Icon icon={crossIcon} />
    </button>
  {/if}
</div>

<style>
  .tag {
    background-color: var(--color-white);
    padding: 0.5rem;
    border-radius: 14px;
    margin: 0.25rem;
    display: flex;
    align-items: center;
  }
  span {
    padding: 0 0.5rem 0 0.5rem;
    display: flex;
    align-items: center;
  }
  .icon {
    width: 2rem;
    height: 1.8rem;
    display: inline-block;
    margin: 0 0.5rem 0 0;
  }
  button.close {
    margin: 0;
    padding: 0;
    border: none;
    border-radius: 50%;
    background-color: var(--color-white);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button.close:hover {
    background-color: var(--color-green);
  }
  button.close:hover > :global(i > svg) {
    fill: var(--color-white);
  }
</style>
