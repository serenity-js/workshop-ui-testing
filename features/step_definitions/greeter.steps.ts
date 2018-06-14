import { Enter, Scroll, See, Task, Text } from 'serenity-js/lib/screenplay-protractor';
import { GreeterWidget } from '../../test/greeter/ui/GreeterWidget';
import { equals } from '../../test/assertions';

import { CheckIfGreeterMessage, EnterName } from '../../test/greeter';

export = function greeterSteps() {

    this.When(/^(?:he|she|they) introduces? (?:himself|herself|themselves) as (.*)$/, function(name: string) {
        return Promise.resolve('pending');
    });

    this.Then(/^he should be greeted with "([^"]*)"$/, function(expectedMessage: string) {
        return Promise.resolve('pending');
    });
};
