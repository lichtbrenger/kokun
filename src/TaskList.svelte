<script>
  import {Task} from './Task.js';
  import './ArrayExtensions.js';
  let tasks = [
    new Task("抱っこひも","babydraagzak"),
    new Task("おくるみ","inbakeren"),
    new Task("長肌着","lange onderbroek(wool?)"),
  ];

  function switchLanguage(task){
    task.active = task.dutch;
  }
</script>

<style>
  ul {
    list-style: none;
  }
  .description {
    background-color: #ffffff;
    min-width: 400px;
    border-radius: 12px;
  }
  .description:hover {
    background-color: #ed2939;
    color: white;
  }
</style>

{#if tasks.length === 0}
  <p>This wish list is empty</p>
{:else}
  <ul>
    {#each tasks as task}
      <li>
        <button on:click={() => switchLanguage(task)} class="description" type="text" >{task.active}</button>
      </li>
    {/each}
  </ul>
{/if}
