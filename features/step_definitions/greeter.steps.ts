import { Enter, Scroll, See, Task, Text } from 'serenity-js/lib/screenplay-protractor';
import { GreeterWidget } from '../../test/greeter/ui/GreeterWidget';
import { equals } from '../../test/assertions';

import { CheckIfGreeterMessage, EnterName } from '../../test/greeter';
import { expect } from '../../test/expect';

export = function greeterSteps() {

    this.When(/^(?:he|she|they) introduces? (?:himself|herself|themselves) as (.*)$/, function(name: string) {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            Enter.theValue(name).into(GreeterWidget.Name_Field),
        );
    });

    this.Then(/^he should be greeted with "([^"]*)"$/, function(expectedMessage: string) {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            See.if(
                Text.of(GreeterWidget.Message),
                equals(expectedMessage),
            ),
        )
    });
};
