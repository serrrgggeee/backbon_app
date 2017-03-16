"use strict";

APP.NoteNewView = Backbone.View.extend({
  events: {
    "click button.save": "save",
    "keyup input": "validate",
    "keyup textarea": "validate"
  },
  template: _.template($('#formTemplate').html()),
  initialize: function (options) {
    this.render()
    //this.model.bind('invalid', APP.helpers.showErrors, APP.helpers);
    //this.hash_model.bind('invalid', APP.helpers.showErrors, APP.helpers);
  },

  save: function (event) {
    event.stopPropagation();
    event.preventDefault();
    var data = {
      title: this.$el.find('input[name=title]').val(),
      author: this.$el.find('input[name=author]').val(),
      description: this.$el.find('textarea[name=description]').val()
    };
    var hash_data = {
      hash: this.$el.find('textarea[name=description]').val()
    };
    this.model.set(data);
    //this.model.set(hash_data);
    if (this.model.isValid()) {
      // save it
      this.collection.add(this.model);
      this.model.save();
      //this.collection2.add(this.model2);
      //this.model2.save();

      Backbone.history.navigate("notes/index", {trigger: true});
    }
  },

  // populate the html to the dom
  render: function () {
    this.$el.html(
    	this.template(this.model.toJSON())
    );
    return this;
  }
});