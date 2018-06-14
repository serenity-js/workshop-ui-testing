import { TableDefinition } from 'cucumber';

import { Click, Enter, Scroll, See, Text } from 'serenity-js/lib/screenplay-protractor';
import { TodoListWidget } from '../../test/todolist/ui/TodoListWidget';
import { hasItems } from '../../test/assertions';

export = function greeterSteps() {

    this.When(/^(?:he|she|they) adds '(.*?)' to (?:his|her|their) todo list$/, function(item: string) {
        return Promise.resolve('pending');
    });

    this.Then(/^(?:he|she|they) should see that (?:his|her|their) list contains:$/, function(items: TableDefinition) {
        // You can extract the values from a cucumber table like this:
        //   items.hashes().map(hash => hash['Item']))
        
        return Promise.resolve('pending');
    });
};
