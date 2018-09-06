import { Template } from 'meteor/templating';

import './body.html';

Template.body.helpers({
    tasks: [
        { text: 'Task todo 1'},
        { text: 'Task todo 2'},
    ],
});
Template.placeholder.helpers({
    show () {
        var Title = 'Todo List';
        return Title;
    }
});