<script>
     export let todos;

     let text = '';
     function addTodo(text) {
    // Create an ID that's 1 more than the current largest
    const id = Math.max(...todos.map(({ id }) => id)) + 1;
    todos = [...todos, { id, text, completed: false }];
  }
  </script>
  <style>
      ul{
        list-style-type: none;
      }
      .completed {
      text-decoration: line-through;
    }
  </style>
  <ul>
    {#each todos as todo (todo.id)}
    <li class:completed="{todo.completed}">
      <label>
        <input type="checkbox" bind:checked="{todo.completed}" />
        {todo.text}
      </label>
    </li>
    {/each}
  
    <div>
      <form
        on:submit={(e) => {
          e.preventDefault();
          if (text.trim() !== 0) {
            addTodo(text);
            text = "";
          }
        }}
      >
        <label for="new-todo">New Todo Item:</label><br />
        <input id="new-todo" bind:value={text} /><br />
        <button>Add Todo</button>
      </form>
    </div>
  </ul>
