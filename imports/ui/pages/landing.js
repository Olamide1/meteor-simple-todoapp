import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-var';
import { Tasks } from '../api/tasks.js';
import './task.js';
import './landing.html';

Template.helpers.onCreated(function bodyOnCreated() {
    this.state = new ReactiveDict();
    Meteor.subscribe('tasks');
})

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

         Meteor.call('tasks.insert', text);

         target.text.value = '';
    }, 
});
