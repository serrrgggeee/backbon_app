"use strict";

APP.NoteModel = Backbone.Model.extend({
  // you can set any defaults you would like here
  defaults: {
    title: "",
    description: "",
    author: "",
    id: _.random(0, 10000)
  },

  validate: function (attrs) {
    var errors = {};
    if (!attrs.title) errors.title = "Hey! Give this thing a title.";
    if (!attrs.description) errors.description = "You gotta write a description, duh!";
    if (!attrs.author) errors.author = "Put your name in dumb dumb...";
    if (!_.isEmpty(errors)) return errors;
  }
});

APP.HashModel = Backbone.Model.extend({
  defaults: {
    title: ""
  }
});

APP.NoteCollection = Backbone.Collection.extend({
  // Reference to this collection's model.
  localStorage: new Backbone.LocalStorage("NoteCollection"),
  model: APP.NoteModel
});

APP.HashCollection = Backbone.Collection.extend({
  // Reference to this collection's model.
  localStorage: new Backbone.LocalStorage("HashStorage"),
  model: APP.HashModel
});