import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks';

import './body.html';

Template.body.helpers({
    tasks() {
        return Tasks.find({}, { sort: { createdAt: -1}});
    },
});
Template.placeholder.helpers({
    show () {
        var Title = 'Todo List';
        return Title;
    },
});

Template.body.events({ 
    'submit .new-task'(event) { 
         event.preventDefault();

         const target = event.target;
         const text = target.text.value;

         Tasks.insert({
             text, 
             createdAt: new Date(),
         });

         target.text.value = '';
    }, 
});
