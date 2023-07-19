var app = new Framework7({
    // App root element
    el: '#app',
    // App Name
    name: 'My App',
    // Enable swipe panel
    panel: {
      swipe:true,
    },
    // Add default routes
    routes: [
      {
        name: 'about',
        path: '/about/',
        url: './pages/to-do.html',
      },
    ],
    // ... other parameters
  });
  
  var mainView = app.views.create('.view-main');