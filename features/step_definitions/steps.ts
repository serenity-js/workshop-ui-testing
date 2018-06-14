import { protractor, by } from 'protractor';
import { Actor, BrowseTheWeb, Open, See, Target, Text } from 'serenity-js/lib/screenplay-protractor';
import { expect } from '../../test/expect';

export = function steps() {

    this.Given(/^(.*) wants to interact with AngularJS apps$/, function(actorName: string) {
        return Promise.resolve('pending');
    });

    this.Then(/(?:he|she|they) should have access to the (.*) playground/, function(epxectedPlaygroundName: string) {
        return Promise.resolve('pending');
    });
};
