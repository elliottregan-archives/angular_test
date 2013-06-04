appmodule.factory('tempObjects', function() {

  var buildCampaign = undefined;

  var factory = {};
  factory.getBuildCampaign = function() {
    return buildCampaign;
  };
  factory.updateBuildCampaign = function(incoming_campaign) {
    buildCampaign = incoming_campaign;
  };
  
  
  return factory;

});

appmodule.factory('campaignData', function() {
  
  var handleList = ["crepesandthings", "crepesandthings_tea"];
  
  var campaignList = {
    camp0: {
      id: 'camp0',
      handle: handleList[0],
      description: 'Our main feedback portal.',
      title: 'Crepes & Things',
      local: false,
      location: '',
      discoverable: false,
      questionsList: [
        {
          id: 'asdf',
          type: 'multipleChoice',
          text: "How was your service today?",
          answers: [
            {
              id: 0,
              text: "poor"
            },
            {
              id: 2,
              text: "fair"
            },
            {
              id: 3,
              text: "good"
            },
            {
              id: 4,
              text: "great"
            },
          ]
        }
      ],
      reward:
        {
          title: 'Free espresso!',
          description: 'Come back for a free espresso any time you want.',
          terms: "Just show us your code, and we'll hand you a free espresso drink.",
          exp: "01-02-2014"
        },
      permissions: 
        { accepted: [
            { first: 'Bubbles',
              last: '',
              email: 'yup@ahdoughno.com',
              date_sent: '',
              level: []
            }
          ],
          pending: []
        },
      instances : {
        msg0: {
          id: 'msg0',
          author: "Franz Ferdinand",
          time: "2013-02-13T01:15-05:00",
          text: "This is the main text of the feedback instance",
          heard: "false",
          comments: [
            { commentId: 'fdsahy',
              author: "You", 
              time: "2013-02-13T01:15-05:00",
              text: "This might be a response to the feedback.",
              heard: "false"
            },
            { commentId: 'asdfgtr',
              author: "Franz Ferdinand", 
              time: "2013-02-13T01:15-05:00",
              text: "This might be you reply",
              heard: "false"
            }
          ]
        },
        msg1: {
          id: 'msg1',
          author: "Chad Grecko",
          time: "2013-02-13T01:15-05:00",
          text: "This is the main text of the feedback instance",
          heard: "false",
          comments: [
            { commentId: 'asdf',
              author: "You", 
              time: "2013-02-13T01:15-05:00",
              text: "Glad to hear from you. Anything else we can do for you?",
              heard: "false"
            },
            { commentId: 'fdsaf',
              author: "Chad Grecko", 
              time: "2013-02-13T01:15-05:00",
              text: "The text on the menus is too small. Can you make it bigger?",
              heard: "false"
            },
            { commentId: 'fdsaf',
              author: "You", 
              time: "2013-02-13T01:15-05:00",
              text: "Sure. Not a problem. I'll let you know when we reprint our menus, some time next month.",
              heard: "false"
            },
            { commentId: 'fdsaf',
              author: "Chad Grecko", 
              time: "2013-02-13T01:15-05:00",
              text: "Ok, thanks! You guys are the best.",
              heard: "false"
            }
          ]
        }
      }
    },
    camp1: {
      id: 'camp1',
      handle: handleList[1],
      title: 'Which tea?',
      description: "Asking our customers if they like our green tea or white tea better.",
      local: true,
      location: '',
      discoverable: false,
      questionsList: [
        {
          id: 'asdf',
          type: 'multipleChoice',
          text: "How was your service today?",
          answers: [
            {
              id: 0,
              text: "ass"
            },
            {
              id: 2,
              text: "mehhhhh..."
            },
            {
              id: 3,
              text: "better than not"
            },
            {
              id: 4,
              text: "fabul-fucking-tastic!"
            }
          ]
        },
        {
          id: 'asdf2',
          type: 'binary',
          text: "Yes or no?",
          answers: [
            {
              id: 50,
              text: "yes"
            },
            {
              id: 52,
              text: "no"
            }
          ]
        },
        {
          id: 'asdf3',
          type: 'freeText',
          text: "Tell us about something you like.",
          answers: []
        },
        {
          id: 'asdf4',
          type: 'number',
          text: "How old are you?",
          answers: []
        },
        {
          id: 'asdf5',
          type: 'rating',
          text: "Rate your overall experience.",
          answers: [
            {
              id: 30,
              text: "poor"
            },
            {
              id: 32,
              text: "fair"
            },
            {
              id: 33,
              text: "good"
            },
            {
              id: 34,
              text: "great"
            },
          ]
        }
      ],
      reward:
        {
          title: 'Free rocket ball',
          description: 'What is a rocket ball?',
          terms: 'Guess correctly, and you get it for free!',
          exp: "01-02-2014"
        },
      permissions: 
        {
          accepted: [],
          pending: [
            {
              first: 'Elliott',
              last: 'Regan',
              email: 'regan.elliott@gmail.com',
              date_sent: '10/2/2013',
              level: 'view'
            }
          ]
        },
      instances : {
        msg0 : {
          id: 'msg0',
          author: "Hans Lipman",
          time: "2013-02-13T01:15-05:00",
          text: "This is the main text of the feedback instance",
          heard: "false",
          comments: [
            { commentId: 'fdsahy',
              author: "You", 
              time: "2013-02-13T01:15-05:00",
              text: "This might be a response to the feedback.",
              heard: "false"
            },
            { commentId: 'asdfgtr',
              author: "Hans Lipman", 
              time: "2013-02-13T01:15-05:00",
              text: "This might be you reply",
              heard: "false"
            }
          ]
        },
        msg1 : {
          id: 'msg0',
          author: "Becky Johnson",
          time: "2013-02-13T01:15-05:00",
          text: "This is the main text of the feedback instance",
          heard: "false",
          comments: [
            { commentId: 'asdf',
              author: "You", 
              time: "2013-02-13T01:15-05:00",
              text: "Glad to hear from you. Anything else we can do for you?",
              heard: "false"
            },
            { commentId: 'fdsaf',
              author: "Becky Johnson", 
              time: "2013-02-13T01:15-05:00",
              text: "The text on the menus is too small. Can you make it bigger?",
              heard: "false"
            },
            { commentId: 'fdsaf',
              author: "You", 
              time: "2013-02-13T01:15-05:00",
              text: "Sure. Not a problem. I'll let you know when we reprint our menus, some time next month.",
              heard: "false"
            },
            { commentId: 'fdsaf',
              author: "Becky Johnson", 
              time: "2013-02-13T01:15-05:00",
              text: "Ok, thanks! You guys are the best.",
              heard: "false"
            }
          ]
        }
      }
    }
  };
  
  var rewardsList = {
    open : {
      rwd0 : {
        id: "rwd0",
        title: 'Free Coffee!',
        description: 'This is an offer for a free coffee.',
        creator: "Crepes & Things",
        terms: "This would be a long, possibly very long paragraph of terms. It may even have more than one paragraph, although this one does not.",
        exp_date: "4/1/2014",
        date_claimed: false,
        verified: false,
        owner: "Elliott Regan",
        instanceId: "msg0",
        passphrase: "oceantree",
        date_issued: "1/2/1013",
        shared_with: ["Joe", "Mark", "Ruby"]
      },
      rwd1 : {
        id: "rwd1",
        title: 'Half off a burrito!',
        description: 'Trade this in for 50% off a burrito.',
        creator: "Long Live Guac",
        terms: "May not be used in Missouri. Sorry.",
        exp_date: "2/28/1993",
        date_claimed: false,
        verified: false,
        owner: "Elliott Regan",
        instanceId: "msg0",
        passphrase: "applegoat",
        date_issued: "1/2/1013",
        shared_with: ["Joe", "Mark", "Ruby"]
      }
    },
    closed : {
      rwd2 : {
        id: "rwd2",
        title: 'Free Burrito!',
        description: 'This is an offer for a free coffee.',
        creator: "Crepes & Things",
        terms: "This would be a long, possibly very long paragraph of terms. It may even have more than one paragraph, although this one does not.",
        exp_date: "4/1/2014",
        date_claimed: "4/12/2013",
        verified: "Me",
        owner: "Forrest Regan",
        instanceId: "msg0",
        passphrase: "starseed",
        date_issued: "1/2/1013",
        shared_with: ["Joe", "Mark", "Ruby"]
      },
      rwd3 : {
        id: "rwd3",
        title: 'City Key!',
        description: 'Trade this in for 50% off a burrito.',
        creator: "Long Live Guac",
        terms: "May not be used in Missouri. Sorry.",
        exp_date: "2/28/1993",
        date_claimed: "4/1/2014",
        verified: "Me",
        owner: "Kieran Regan",
        instanceId: "msg0",
        passphrase: "freshspoon",
        date_issued: "1/2/1013",
        shared_with: ["Joe", "Mark", "Ruby"]
      },
      rwd4 : {
        id: "rwd4",
        title: 'Ticket to France!',
        description: 'Trade this in for 50% off a burrito.',
        creator: "Long Live Guac",
        terms: "May not be used in Missouri. Sorry.",
        exp_date: "2/28/1993",
        date_claimed: "4/1/2014",
        verified: "Me",
        owner: "Craig Regan",
        instanceId: "msg0",
        passphrase: "richzing",
        date_issued: "1/2/1013",
        shared_with: ["Joe", "Mark", "Ruby"]
      }
    }
  };
  
  var factory = {};
  factory.getCampaigns = function() {
    return campaignList;
  };
  factory.getRewardsList = function() {
    return rewardsList;
  };
  factory.getHandles = function() {
    return handleList;
  };
  factory.addCampaign = function(campaign_id, campaign) {
    campaignList[campaign_id] = campaign;
  };
  factory.getCampaign = function(campaign_id) {
    return campaignList[campaign_id];
  };
  
  return factory;
  
});

appmodule.factory('userData', function() {
  
  var userDetails = {
    name: "Elliott Regan",
    email: "oatmealsnap@gmail.com",
    city: "Brooklyn, NY",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."    
  };
  
  var instances = {
    msg0: {
      id: 'msg0',
      author: "You",
      to_name: "Crepes & Things",
      to_handle: '@crepesandthings',
      time: "2013-02-13T01:15-05:00",
      text: "This is the main text of the feedback instance",
      heard: "false",
      reward: "free coffee",
      comments: [
        { commentId: 'fdsahy',
          author: "Crepes & Things", 
          time: "2013-02-13T01:15-05:00",
          text: "This might be a response to the feedback.",
          heard: "false"
        },
        { commentId: 'asdfgtr',
          author: "You", 
          time: "2013-02-13T01:15-05:00",
          text: "This might be your reply",
          heard: "false"
        }
      ]
    },
    msg1: {
      id: 'msg1',
      author: "You",
      time: "2013-02-13T01:15-05:00",
      text: "This is the main text of the feedback instance",
      heard: "false",
      comments: [
        { commentId: 'asdf',
          author: "Crepes & Things", 
          time: "2013-02-13T01:15-05:00",
          text: "Glad to hear from you. Anything else we can do for you?",
          heard: "false"
        },
        { commentId: 'fdsaf',
          author: "You", 
          time: "2013-02-13T01:15-05:00",
          text: "The text on the menus is too small. Can you make it bigger?",
          heard: "false"
        },
        { commentId: 'fdsaf',
          author: "Crepes & Things", 
          time: "2013-02-13T01:15-05:00",
          text: "Sure. Not a problem. I'll let you know when we reprint our menus, some time next month.",
          heard: "false"
        },
        { commentId: 'fdsaf',
          author: "You", 
          time: "2013-02-13T01:15-05:00",
          text: "Ok, thanks! You guys are the best.",
          heard: "false"
        }
      ]
    }
  };
  
  var rewardsList = {
    rwd0 : {
      id: "rwd0",
      title: 'Free Coffee!',
      description: 'This is an offer for a free coffee.',
      creator: "Crepes & Things",
      terms: "This would be a long, possibly very long paragraph of terms. It may even have more than one paragraph, although this one does not.",
      exp_date: "4/1/2014",
      claimed: false
    },
    rwd1 : {
      id: "rwd1",
      title: 'Half off a burrito!',
      description: 'Trade this in for 50% off a burrito.',
      creator: "Long Live Guac",
      terms: "May not be used in Missouri. Sorry.",
      exp_date: "2/28/1993",
      claimed: false
    }
  };
  
  var factory = {};
  factory.getRewardsList = function() {
    return rewardsList;
  };
  factory.getUserDetails = function() {
    return userDetails;
  };
  factory.getInstances = function() {
    return instances;
  };
  
  return factory;
  
});

appmodule.factory('formData', function() {

  var campaign = {
      id: 'camp0',
      handle: 'crepesandthings',
      description: 'Our main feedback portal.',
      title: 'Crepes & Things',
      local: false,
      location: '',
      discoverable: false,
      questionsList: [
        {
          id: 'asdf',
          type: 'multipleChoice',
          text: "How was your service today?",
          answers: [
            {
              id: 0,
              text: "ass"
            },
            {
              id: 2,
              text: "mehhhhh..."
            },
            {
              id: 3,
              text: "better than not"
            },
            {
              id: 4,
              text: "fabul-fucking-tastic!"
            }
          ]
        },
        {
          id: 'asdf2',
          type: 'binary',
          text: "Yes or no?",
          answers: [
            {
              id: 50,
              text: "yes"
            },
            {
              id: 52,
              text: "no"
            }
          ]
        },
        {
          id: 'asdf3',
          type: 'freeText',
          text: "Tell us about something you like.",
          answers: []
        },
        {
          id: 'asdf4',
          type: 'number',
          text: "How old are you?",
          answers: []
        },
        {
          id: 'asdf5',
          type: 'rating',
          text: "Rate your overall experience.",
          answers: [
            {
              id: 30,
              text: "poor"
            },
            {
              id: 32,
              text: "fair"
            },
            {
              id: 33,
              text: "good"
            },
            {
              id: 34,
              text: "great"
            },
          ]
        }
      ],
      reward:
        {
          title: 'Free espresso!',
          description: 'Come back for a free espresso any time you want.',
          terms: "Just show us your code, and we'll hand you a free espresso drink.",
          exp: "01-02-2014"
        }
  };
  
  var factory = {};
  factory.getFdbkCampaign = function() {
    return campaign;
  };
  
  return factory;
  
});