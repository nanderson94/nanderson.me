if (Meteor.isClient) {
  // Template.main.rendered = function() {
  //   $(document).foundation();
  // }
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
Router.configure({
  layoutTemplate: 'ApplicationLayout'
});
Router.route('/', function() {
  this.render('Home');
  $(document).foundation();
}, {
  data: function() {
    return {
      page: {
        home:true
      }
    }
  }
});
Router.route("/contact", function() {
  this.render("Contact");
  $(document).foundation();
}, {
  data: function() {
    return {
      page: {
        contact:true
      }
    }
  }
});
Router.route('/resume', function() {
  this.render("Resume");
}, {
  data: function() {
    return {
      page: {
        resume:true
      }
    }
  }
});
Router.route('/projects', function() {
  this.render("Projects");
}, {
  data: function() {
    return {
      page: {
        projects:true
      }
    }
  }
});
Router.route('/resume.pdf', function() {
  
}, {
  where:'server'
});
Router.onAfterAction(function () {
  if (Meteor.isClient) {
    Deps.afterFlush(function () {
      $(document).foundation();
    });
  }
}, {where:'client'});