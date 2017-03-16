
"use strict";
APP.NoteIndexView = Backbone.View.extend({
  events: {
    "change input": "test",
     "click button.save": "test"
  },
  test: function() {
    console.log('before');
    this.render();
    console.log('after');
  },
  template: _.template($('#formTemplate').html()),
  el: 'body',
  render: function () {
    this.$el.html(
    	this.template({notes: this.collection.toJSON()})
    );
    return this;
  }


});



var config = {
    apiKey: "AIzaSyCeTA8c0Bed4Rv5fiQmBjKLXOfKYKVP6YE",
    authDomain: "volsor-90487.firebaseapp.com",
    databaseURL: "https://volsor-90487.firebaseio.com",
    storageBucket: "volsor-90487.appspot.com",
    messagingSenderId: "63838668798"
};
var data = {};


        firebase.initializeApp(config);
        var database = firebase.database();
        var ref = database.ref('scores');
        ref.update({
            "-fhffh": {
                name: "ddvcvcvcvd"

            },
            "-jfjfjk": {
                name: "sssss"
            }
        });
        ref.push(data);  // id:resent.key
        ref.on('value', gotData);
        function gotData(data) {
            APP.data =data.val();
        }
        console.log('APP.data', 'hir');
