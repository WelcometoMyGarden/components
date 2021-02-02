<script>
  export let name;
  import { UserDropdown } from '../components/';
  import { signOutIcon, userIcon } from '@/images/icons';

  import chatIcon from '@/images/icons/chat.svg';

  console.log(chatIcon);

  export let logout = () => console.log("You're now logged out!");
</script>

<div>
  <UserDropdown let:class={className} {name} let:toggleOpen>
    <ul slot="dropdown" class={className}>
      <li>
        <a href="https://welcometomygarden.org/chat" on:click={toggleOpen}>
          <i>
            {@html chatIcon}
          </i>
          Chat
        </a>
      </li>
      <li>
        <a href="https://welcometomygarden.org/account" on:click={toggleOpen}>
          <i>
            {@html userIcon}
          </i>
          Account
        </a>
      </li>
      <li class="separated">
        <a
          href="/"
          on:click|preventDefault={async () => {
            toggleOpen();
            await logout();
            window.location = '#';
          }}>
          <i>
            {@html signOutIcon}
          </i>
          Logout
        </a>
      </li>
    </ul>
  </UserDropdown>
</div>

<style>
  div {
    display: flex;
    justify-content: center;
  }
</style>
