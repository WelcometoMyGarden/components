<script>
  import Brand from '../components/Brand.svelte';
</script>

<div>
  <Brand {...$$restProps} />
</div>

<style>
  div {
    height: var(--height-nav);
  }
</style>
