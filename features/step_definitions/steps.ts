import { protractor, by } from 'protractor';
import { Actor, BrowseTheWeb, Open, See, Target, Text } from 'serenity-js/lib/screenplay-protractor';
import { expect } from '../../test/expect';
import { equals } from '../../test/assertions';

export = function steps() {

    const Website = {
        Title: Target.the('Website title').located(by.css('.hero h2')),
    };

    this.Given(/^(.*) wants to interact with AngularJS apps$/, function(actorName: string) {
        return this.stage.theActorCalled(actorName).attemptsTo(
            Open.browserOn('https://angularjs.org'),
        );
    });

    this.Then(/(?:he|she|they) should have access to the (.*) playground/, function(expectedPlaygroundName: string) {

        return this.stage.theActorInTheSpotlight().attemptsTo(
            See.if(
                Text.of(Website.Title),
                text => expect(text).to.eventually.equal(expectedPlaygroundName),
            ),
        );
    });
};
