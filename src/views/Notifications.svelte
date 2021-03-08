<script>
  import { onMount } from 'svelte';
  import { Notifications } from '../components';
  import types, { notification } from '../stores/notification';

  onMount(() => {
    types.danger('This is danger');
    types.info('This is info');
    types.success('This is success');
    types.warning('This is warning');
  });
</script>

<Notifications {notification} />
