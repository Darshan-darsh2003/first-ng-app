import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../components/models/todo.type';

@Pipe({
  name: 'filterTodos',
  standalone: true,
})
export class FilterTodosPipe implements PipeTransform {
  transform(todos: Array<Todo>, searchTerm: string): Array<Todo> {
    if (!searchTerm) {
      return todos;
    }

    const text = searchTerm.toLowerCase();
    return todos.filter((todo) => {
      return todo.title.toLowerCase().includes(text);
    });
  }
}
