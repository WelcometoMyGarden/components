<script>
  export let selected;
  export let options; // of the form [{value: "", text: ""}]
</script>

<select bind:value={selected} on:input>
  {#each options as { value, text } (value)}
    <option {value}>{text}</option>
  {/each}
</select>

<style>
  select {
    background-color: transparent;
    border: 0;
    outline: 0;
    background-image: url(/images/icons/globe.svg), url(/images/icons/caret-down.svg);
    background-repeat: no-repeat;
    background-position: left center, right 0.7rem top 50%;
    background-size: 2rem auto, 0.65em auto, 100%;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    font-size: 1.6rem;
    padding: 0 2rem 0 2.5rem;
    cursor: pointer;
    text-align: left;
  }
  /* Hide default select arrow on IE11 and Edge */
  select::-ms-expand {
    display: none;
  }
  @media screen and (max-width: 700px) {
    select {
      font-size: 1.4rem;
    }
  }
</style>
