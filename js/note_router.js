"use strict";

window.APP = window.APP || {};
APP.NoteRouter = Backbone.Router.extend({
  routes: {
    "note/new": "create",
    "notes/index": "index",
    "note/:id/edit": "edit",
    "note/:id/delete": "delete"
  },

  $container: $('#primary-content'),

  initialize: function () {
    this.collection = new APP.NoteCollection();
    this.collection.fetch({ajaxSync: false});
    this.hashCollection = new APP.HashCollection();
    this.hashCollection.fetch({ajaxSync: false});

    var firstModel = localStorage;
    console.log(firstModel);
    APP.helpers.debug(this.collection);
    this.index();
    // start backbone watching url changes
    Backbone.history.start();
  },

  create: function () {
    var view = new APP.NoteNewView({
      collection: this.collection,
      model: new APP.NoteModel(),
    });
    this.$container.html(view.render().el);
  },
  hash: function () {
    var view = new APP.NoteNewView({
      collection: this.hashCollection,
      model: new APP.HashModel()
    });
    this.$container.html(view.render().el);
  },

  delete: function (id) {
    var note = this.collection.get(id);
    note.destroy();
    Backbone.history.navigate("notes/index", {trigger: true});
  },

  edit: function (id) {
    var view = new APP.NoteEditView({model: this.collection.get(id)});
    this.$container.html(view.render().el);
  },

  index: function () {
    var view = new APP.NoteIndexView({collection: this.collection});
    this.$container.html(view.render().el);
  }
});