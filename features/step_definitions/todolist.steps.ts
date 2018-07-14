import { TableDefinition } from 'cucumber';

import { Click, Enter, Scroll, See, Task, Text } from 'serenity-js/lib/screenplay-protractor';
import { TodoListWidget } from '../../test/todolist/ui/TodoListWidget';
import { hasItems } from '../../test/assertions';

export = function greeterSteps() {

    const AddAnItemCalled = (name: string) => Task.where(`#actor adds ${ name } to their list`,
        Enter.theValue(name).into(TodoListWidget.New_Todo),
        Click.on(TodoListWidget.Add_Button),
    );

    this.When(/^(?:he|she|they) adds '(.*?)' to (?:his|her|their) todo list$/, function(name: string) {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            AddAnItemCalled(name),
        );
    });

    this.Then(/^(?:he|she|they) should see that (?:his|her|their) list contains:$/, function(items: TableDefinition) {
        // You can extract the values from a cucumber table like this:
        //   items.hashes().map(hash => hash['Item']))

        const expectedValues = items.hashes().map(hash => hash.Item);
        
        return this.stage.theActorInTheSpotlight().attemptsTo(
            See.if(
                Text.ofAll(TodoListWidget.Items),
                hasItems(expectedValues),
            ),
        );
    });
};
