<script>
  import {Task} from './Task.js';
  import './ArrayExtensions.js';
  import {tasks} from './Tasks.js'

  let activeLanguage = "Nederlands";

  function reserveItem(task) {
    task.reserved = !task.reserved;
    console.log(task.reserved);
  }

  function changeLanguage() {
    for (let i = 0; i < tasks.length; i++) {
      tasks[i].active = !tasks[i].active;
    }

    if (activeLanguage == "Nederlands") {
      activeLanguage = "日本語";
    }
    else {
      activeLanguage = "Nederlands";
    }
  }

</script>

<style>
  ul {
    list-style: none;
  }
  .available {
    background-color: #ffffff;
    width: 400px;
    height: 50px;
    border-radius: 12px;
  }
  .available:hover {
    background-color: #ed2939;
    color: white;
  }

  .reserved {
    background-color: #009911;
    min-width: 400px;
    border-radius: 12px;
  }
  
  .languageButton {
    background-color: #ed2939;
    color: white;
    font-size: 30px;
    width: 400px;
    height: 100px;
    margin: 10px;
    border-radius: 12px;
  }

  .languageButton:hover {
    background-color: #ffffff;
    color: #000000;
  }
</style>

<ul>
  <button on:click={() => changeLanguage()} class="languageButton">{activeLanguage}</button>
  {#each tasks as task}
    <li>
      <button on:click={() => reserveItem(task)} class={task.reserved == true ? 'reserved' : 'available'} >{task.active == true ? task.japanese : task.dutch}</button>
    </li>
  {/each}
</ul>
