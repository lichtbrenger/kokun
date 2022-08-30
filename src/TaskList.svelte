<script>
  import {Task} from './Task.js';
  import './ArrayExtensions.js';
  import {tasks} from './Tasks.js'

  function switchLanguage(task){
    task.translate();
  }

  function reserveItem(task) {
    task.reserved = !task.reserved;
  }

</script>

<style>
  ul {
    list-style: none;
  }
  .available {
    background-color: #ffffff;
    min-width: 400px;
    border-radius: 12px;
  }
  .available:hover {
    background-color: #ed2939;
    color: white;
  }

  .reserved {
    background-color: #000000;
    min-width: 400px;
    border-radius: 12px;
  }
</style>

{#if tasks.length === 0}
  <p>This wish list is empty</p>
{:else}
  <ul>
    {#each tasks as task}
      <li>
        <button on:click={() => reserveItem(task)} class={task.reserved == true ? 'reserved' : 'available'} >{task.japanese} | {task.dutch}</button>
      </li>
    {/each}
  </ul>
{/if}
