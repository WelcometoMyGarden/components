<script>
  import { Badge } from '../components';
  export let isSkeleton = false;
  export let icon = showerIcon;
  export let content;
</script>

<Badge {icon} {isSkeleton}>
  {#if content}{content}{/if}
</Badge>
