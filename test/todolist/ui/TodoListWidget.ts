import { by } from 'protractor';
import { Target } from 'serenity-js/lib/screenplay-protractor';

export const TodoListWidget = {

    Items:        Target.the('TodoList items').located(by.repeater('todo in todoList.todos')),
    New_Todo:     Target.the('new todo input box').located(by.model('todoList.todoText')),
    Add_Button:   Target.the('add item button').located(by.css('div[module="todoApp"] input.btn-primary')),
    Archive_Link: Target.the('archive done link').located(by.linkText('archive')),
};
