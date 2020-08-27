<script>
  import { TopNav, NavLink, Brand } from '../components/';
  let selected = '/';

  const handleClick = (e, link) => {
    e.preventDefault();
    selected = link;
  };
</script>

<TopNav>
  <span slot="brand">
    <Brand
      name="Welcome To My Garden"
      logo="/logo.svg"
      href="/"
      on:click={(e) => handleClick(e, '/')} />
  </span>
  <ul slot="links">
    <li>
      <NavLink href="/" active={selected === '/'} on:click={(e) => handleClick(e, '/')}>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink href="/map" active={selected === '/map'} on:click={(e) => handleClick(e, '/map')}>
        Map
      </NavLink>
    </li>
    <li>
      <NavLink
        href="/rules"
        active={selected === '/rules'}
        on:click={(e) => handleClick(e, '/rules')}>
        Rules
      </NavLink>
    </li>
    <li>
      <NavLink href="/faq" active={selected === '/faq'} on:click={(e) => handleClick(e, '/faq')}>
        FAQ
      </NavLink>
    </li>
    <li>
      <NavLink
        href="/sign-in"
        active={selected === '/sign-in'}
        on:click={(e) => handleClick(e, '/sign-in')}>
        Sign in
      </NavLink>
    </li>
  </ul>
</TopNav>

<style>
  span {
    height: 100%;
  }
</style>
