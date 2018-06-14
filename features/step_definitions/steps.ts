import { protractor } from 'protractor';
import { Actor, BrowseTheWeb, Open, See, Target, Text } from 'serenity-js/lib/screenplay-protractor';

export = function greeterSteps() {

    this.Given(/^(.*) wants to interact with AngularJS apps$/, function(actor: string) {
        return Promise.resolve('pending');
    });

    this.Then(/(?:he|she|they) should have access to the (.*) playground/, function(playgroundName: string) {
        return Promise.resolve('pending');
    });
};
