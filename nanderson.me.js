if (Meteor.isClient) {
  // Quick fix to force offcanvas event rebinding.
  // Github Issue: https://github.com/ewall/meteor-foundation/issues/11
  $(function() {
    $(document).foundation('offcanvas', 'events');
    $(document).foundation({
      offcanvas : {
        // Sets method in which offcanvas opens.
        // [ move | overlap_single | overlap ]
        open_method: 'move', 
        // Should the menu close when a menu link is clicked?
        // [ true | false ]
        close_on_click : true
      }
    });
    $(document).foundation({
      "magellan-expedition": {
        active_class: 'active', // specify the class used for active sections
        threshold: 50, // how many pixels until the magellan bar sticks, 0 = auto
        destination_threshold: 0, // pixels from the top of destination for it to be considered active
        fixed_top: 0, // top distance in pixels assigned to the fixed element on scroll
      }
    });
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}