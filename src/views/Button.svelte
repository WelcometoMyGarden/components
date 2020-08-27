<script>
  import { Button } from '../components';
  export let label = '';
</script>

<Button {...$$restProps} on:click>{label}</Button>
