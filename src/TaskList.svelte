<script>
  import {Task} from './Task.js';
  import './ArrayExtensions.js';
  import {tasks} from './Tasks.js'

  function switchLanguage(task){
    task.translate()
  }

</script>

<style>
  ul {
    list-style: none;
  }
  .category {
    background-color: #ffffff;
    min-width: 400px;
    border-radius: 12px;
  }
  .category:hover {
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
        <button on:click={() => switchLanguage(task)} class="category">{task.japanese} | {task.dutch}</button>
      </li>
    {/each}
  </ul>
{/if}
