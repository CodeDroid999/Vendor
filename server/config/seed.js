/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Table = require('../api/table/table.model');
var Bill = require('../api/bill/bill.model');
var Order = require('../api/order/order.model');
var Meal = require('../api/meal/meal.model');
var Menu = require('../api/menu/menu.model');


Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

Table.find({}).remove(function() {
  Table.create ({
    num : 1,
    x : 0,
    y : 0,
    unit_height : 1,
    unit_width : 1,
    seats : 2,
    status : 'available'
  }, {
    num : 2,
    x : 120,
    y : 0,
    unit_height : 1,
    unit_width : 1,
    seats : 2,
    status : 'occupied'
  }, {
    num : 3,
    x : 240,
    y : 0,
    unit_height : 1,
    unit_width : 2,
    seats : 4,
    status : 'reserved'
  }, {
    num : 4,
    x : 0,
    y : 120,
    unit_height : 1,
    unit_width : 1,
    seats : 4,
    status : 'disabled'
  });
});

Meal.find({}).remove(function() {
  Meal.create ( 
    {
      desc : 'New England Clam Chowder',
      category : 'This-N-That',
      status : 'active',
      mealoptions: [
        {
          desc: 'Size',
          choices: ['Small Bowl','Large Bowl']
        }
      ],
      mealaddons: []
    },{
      desc : 'Soup of the Day',
      category : 'This-N-That',
      status : 'active',
      mealoptions: [
        {
          desc: 'Size',
          choices: ['Small Bowl','Large Bowl']
        }
      ],
      mealaddons: []
    },{
      desc : 'Seared Ahi Tuna',
      category : 'This-N-That',
      status : 'active',
      mealoptions: [],
      mealaddons: []
    },{
      desc : 'Softies',
      category : 'This-N-That',
      status : 'active',
      mealoptions: [],
      mealaddons: [
        {
          desc: 'Honey Dijon Mustard',
          state: true
        }
      ]
    },{
      desc : 'Engine #11 Firehouse Wings',
      category : 'This-N-That',
      status : 'active',
      mealoptions: [
        {
          desc: 'Size',
          choices: ['Half Order','Full Order']
        }
      ],
      mealaddons: []
    },{
      desc : 'Maine Crab Dip',
      category : 'This-N-That',
      status : 'active',
      mealoptions: [],
      mealaddons: []
    },{
      desc : 'Creamed Spinach & Artichoke Dip',
      category : 'This-N-That',
      status : 'active',
      mealoptions: [],
      mealaddons: []
    },{
      desc : 'Fried Mooz',
      category : 'This-N-That',
      status : 'active',
      mealoptions: [],
      mealaddons: [
        {
          desc: 'Whole Milk Mozzarella',
          state: true
        },
        {
          desc: 'Marinara Sauce',
          state: true
        }
      ]
    },{
      desc : 'Calamari',
      category : 'This-N-That',
      status : 'active',
      mealoptions: [],
      mealaddons: [
        {
          desc: 'Chipotle Aioli',
          state: true
        }
      ]
    },{
      desc : 'Tap Room Fries',
      category : 'This-N-That',
      status : 'active',
      mealoptions: [],
      mealaddons: [
        {
          desc: 'Sugar Maple Icing',
          state: true
        },
        {
          desc: 'Honey Dijon Dipping Sauce',
          state: true
        }
      ]
    },{
      desc : 'Hummus Plate',
      category : 'This-N-That',
      status : 'active',
      mealoptions: [],
      mealaddons: [
        {
          desc: 'Crisp Carrots',
          state: true
        },
        {
          desc: 'Celery',
          state: true
        },
        {
          desc: 'Kalamata Olives',
          state: true
        },
        {
          desc: 'Fresh Tomatoes',
          state: true
        },
        {
          desc: 'Red Onions',
          state: true
        }
      ]
    },{
      desc : 'Monster Nachos',
      category : 'This-N-That',
      status : 'active',
      mealoptions: [
        {
          desc: 'Size',
          choices: ['Half Order','Full Order']
        },
        {
          desc: 'Meat',
          choices: ['Chicken', 'Beef']
        }
      ],
      mealaddons: [
        {
          desc: 'Cheese',
          state: true
        },
        {
          desc: 'Sour Cream',
          state: true
        },
        {
          desc: 'Diced Tomatoes',
          state: true
        },
        {
          desc: 'Jalapenos',
          state: true
        },
        {
          desc: 'Black Beans',
          state: true
        },
        {
          desc: 'Shredded Lettuce',
          state: true
        },
        {
          desc: 'Salsa',
          state: true
        }
      ]
    },{
      desc : 'Chicken Tenders',
      category : 'This-N-That',
      status : 'active',
      mealoptions: [],
      mealaddons: [
        {
          desc: 'Bun',
          state: true
        },
        {
          desc: 'Lettuce',
          state: false
        },
        {
          desc: 'Tomatoes',
          state: false
        }
      ]
    },{
      desc : 'Chicken Quesadilla',
      category : 'This-N-That',
      status : 'active',
      mealoptions: [
        {
          desc: 'Size',
          choices: ['Small Bowl','Large Bowl']
        }
      ],
      mealaddons: [
        {
          desc: 'Bun',
          state: true
        },
        {
          desc: 'Lettuce',
          state: false
        },
        {
          desc: 'Tomatoes',
          state: false
        }
      ]
    }
  );
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});