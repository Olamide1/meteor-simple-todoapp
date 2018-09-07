import { Template } from 'meteor/templating';
import { Tasks } from '../api/task.js';

import './task.html';
Template.tasks.events({ 
    'click .toggle-checked': function() { 
         Tasks.update(this._id, {
             $set:{
             checked: ! this.checked
         }});
         
    } ,
    'click .delete'() {
        Tasks.remove(this._id);
    },
});