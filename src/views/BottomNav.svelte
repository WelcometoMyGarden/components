<script>
  import {
    BottomNav,
    IconedLink,
    Overlay,
    NavDrawer,
    NavLink,
    Selector,
    Hamburger
  } from '../components';
  import Socials from './Socials';
  import { tentIcon, mapIcon, chatIcon, signInIcon, userIcon } from '@/images/icons';

  export let loggedIn = false;
  export let hideOnLarge = true;
  export let selected = '/index';

  let showDrawer = false;
  let hamburger;
  let routes = {
    HOME: '/',
    MAP: '/map',
    CHAT: '/chat',
    ACCOUNT: '/account',
    SIGN_IN: '/signin'
  };

  $: linksInDrawer = [
    { route: routes.RULES, name: 'Rules' },
    { route: routes.FAQ, name: 'Frequently asked questions' },
    { route: routes.COOKIE_POLICY, name: 'Cookie policy' },
    { route: routes.PRIVACY_POLICY, name: 'Privacy policy' },
    { route: routes.TERMS_OF_USE, name: 'Terms of use' }
  ];

  const isActive = (route) => selected === route;
  const toggleDrawer = () => (showDrawer = !showDrawer);
</script>

<BottomNav {hideOnLarge}>
  <ul class="main">
    <li class="item">
      <IconedLink href={routes.HOME} active={isActive('/index')} icon={tentIcon} text="Home" />
    </li>
    <li class="item">
      <IconedLink href={routes.MAP} active={isActive(routes.MAP)} text="Map" icon={mapIcon} />
    </li>
    {#if loggedIn}
      <li class="item">
        <IconedLink href={routes.CHAT} active={isActive(routes.CHAT)} text="Chat" icon={chatIcon} />
      </li>
      <li class="item">
        <IconedLink
          href={routes.ACCOUNT}
          active={isActive(routes.ACCOUNT)}
          text="Account"
          icon={userIcon} />
      </li>
    {:else}
      <li class="item">
        <IconedLink
          href={routes.SIGN_IN}
          active={isActive(routes.SIGN_IN)}
          text="Sign in"
          icon={signInIcon} />
      </li>
    {/if}
    <li class="item hamburger">
      <Hamburger bind:hamburger on:click={toggleDrawer} isOpen={showDrawer} />
    </li>
  </ul>
  <Overlay show={showDrawer} />
  <NavDrawer drawerIsShown={showDrawer} {toggleDrawer} {hamburger}>
    <ul>
      {#each linksInDrawer as { route, name } (route)}
        <li class="item">
          <NavLink href={route} on:click={toggleDrawer} active={isActive(route)}>{name}</NavLink>
        </li>
      {/each}
      <li class="item">
        <Selector
          options={[{ value: 'en', text: 'English' }, { value: 'fr', text: 'Français' }, { value: 'nl', text: 'Nederlands' }]} />
      </li>
      {#if loggedIn}
        <li class="item separated sign-out">
          <a
            href="/"
            on:click|preventDefault={async () => {
              toggleDrawer();
            }}>
            Sign out
          </a>
        </li>
      {/if}
      <li class="socials">
        <Socials small />
      </li>
    </ul>
  </NavDrawer>
</BottomNav>

<style>
  .sign-out {
    color: var(--color-orange);
  }
  .socials {
    width: 100%;
    position: absolute;
    top: 1.5rem;
    right: 0;
  }
</style>
