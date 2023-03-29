<script lang="ts">

  let x = 2;
  let y = 2;
  let calcResult: number | undefined;

  $: x, y, calcResult = undefined; // reset calcResult if parameters change

  const calc = async () => {
    const body = JSON.stringify({ x, y });
    const response = await fetch('/api/calc', { body, method: 'POST' });
    const { result } = await response.json();
    calcResult = result;
  };

</script>

<svelte:head>
	<title>Server-side Endpoints</title>
	<meta name="description" content="Svelte demo app: server-side endpoints" />
</svelte:head>

<section>
  <h1>Server-side Endpoint Example</h1>
  <div class="container">
    <div class="equation">
      <input type="number" placeholder="x" bind:value={x}>
      <span class="symbol">+</span>
      <input type="number" placeholder="y" bind:value={y}>
      <span class="symbol">=</span>
      <span class="result">{calcResult ?? "?"}</span>
    </div>
    <button on:click={() => calc().catch(console.error)}>Calculate</button>
  </div>
</section>

<style>
  section {
    margin: 0 auto;
    max-width: 600px;
  }

  .container {
    padding: 1rem;
    border-radius: 1rem;
    background-color: var(--color-bg-1);
  }

  .equation {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .equation > input {
    max-width: 6rem;
  }

  .equation > .result {
    font-weight: bold;
    font-size: large;
  }

  span.symbol {
    font-size: large;
    font-weight: bold;
  }
</style>