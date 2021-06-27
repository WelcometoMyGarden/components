<script>
  export let show = false;
</script>

<div class:shown={show} />

<style>
  div {
    width: 100%;
    height: calc(calc(var(--vh, 1vh) * 100) - var(--height-nav));
    position: fixed;
    top: 0;
    bottom: 0;
    right: 200%;
    left: -100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 100;
    overflow: hidden;
    text-align: center;
    transition: top 0.3s, right 0.3s, bottom 0.3s, left 0.3s;
  }

  div.shown {
    right: 0;
    left: 0;
  }
</style>
