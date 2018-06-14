import { Open } from 'serenity-js/lib/screenplay-protractor';

import { CheckIfGreeterMessage, EnterName } from '../../test/greeter';

export = function greeterSteps() {

    this.When(/^(?:he|she|they) introduces? (?:himself|herself|themselves) as (.*)$/, function(name: string) {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            EnterName.of(name),
        );
    });

    this.Then(/^he should be greeted with "([^"]*)"$/, function(message: string) {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            CheckIfGreeterMessage.reads(message),
        );
    });
};
