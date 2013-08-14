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

appmodule.factory('accountData', function() {

  var accounts = {
    account01 : {
      id : "account01",
      handle : "thecinema",
      questions : {
        q0001 : {
          id : "q0001",
          text : "How one does not think they like which more as?",
          type : "multipleChoice",
          answers : [
            {text:"That it is"},
            {text:"They be do"},
            {text:"There all that"},
            {text:"Jalopy"}
          ]
        },
        q0002 : {
          id : "q0002",
          text : "Nah, but for real:",
          type : "freeText",
          answers : {
            a001 : {
              text:"That it is"
            },
            a002 : {
              text:"They be do"
            },
            a003 : {
              text:"There all that"
            },
            a004 : {
              text:"Jalopy"
            }
          }
        },
        q0003 : {
          id : "q0003",
          type: 'binary',
          text: "Yes or no?",
          answers: []
        },
        q0004 : {
          id : "q0004",
          type: 'number',
          text: "How old are you?",
          answers: []
        }
      },
      locations : {
        l0001 : {
          text : "The mooooon!"
        },
        l0002 : {
          text : "Downstairs"
        },
        l0003 : {
          text : "407 9th St. Brooklyn, NY 11215"
        }
      },
      contacts : [
        "user0","user1"
      ],
      rewards : {
        r0001 : {
          id : "r0001",
          title : 'Free rocket ball',
          description : 'What is a rocket ball?',
          terms : 'Guess correctly, and you get it for free!',
          startdate : "01-02-2013",
          starttime : "8:00am",
          enddate : "01-02-2013",
          endtime : "5:00pm",
          delay : true,
          redeem : "location",
          sharable : "open"
        },
        r0002 : {
          id: "r0002",
          title: 'Ticket to France!',
          description: 'Trade this in for 50% off a burrito.',
          terms: "May not be used in Missouri. Sorry.",
          startdate : "01-02-2013",
          starttime : "8:00am",
          enddate : "01-02-2013",
          endtime : "5:00pm",
          delay : true,
          redeem : "location",
          sharable : "open"
        }
      },
      campaigns : {
        camp0 : {
          id: 'camp0',
          archived: false,
          newCounter: 0,
          handle: "thecinema",
          description: 'Our main feedback portal.',
          title: 'Movie Questions',
          message: 'We value your input. Thanks for sharing with us!',
          local: false,
          locationsList: [
            {
              id: 'asdf',
              text: "1 Location Way, Somewhere"
            }
          ],
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
              author: "user4",
              time: "2013-02-13T01:15-05:00",
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
                  ],
                  response: 4
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
                  ],
                  response: 50
                },
                {
                  id: 'asdf3',
                  type: 'freeText',
                  text: "Tell us about something you like.",
                  answers: [],
                  response: "I like turtles."
                },
                {
                  id: 'asdf4',
                  type: 'number',
                  text: "How old are you?",
                  answers: [],
                  response: 18
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
                  ],
                  response: 33
                }
              ],
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
              ],
              reward: {
                id: "rwd2",
                title: 'Free Burrito!',
                description: 'This is an offer for a free coffee.',
                creator: "Crepes & Things",
                terms: "This would be a long, possibly very long paragraph of terms. It may even have more than one paragraph, although this one does not.",
                exp_date: "4/1/2014",
                date_claimed: "4/12/2013",
                verified: "Me",
                owner: "user4",
                passphrase: "starseed",
                date_issued: "1/2/1013",
                shared_with: ["Joe", "Mark", "Ruby"]
              },
              collaboration: {
                importance: true,
                tags: ["kitchen", "service"],
                tagged_users: ["user1", "user45"],
                comments: [
                  {
                    commentId: "cjioe3",
                    author: "user47",
                    time: "2013-02-13T01:15-05:00",
                    text: "Here is an internal comment about this conversation.",
                  }
                ]
              }
            },
            msg1: {
              id: 'msg1',
              author: "user0",
              time: "2013-02-13T01:15-05:00",
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
                  ],
                  response: 4
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
                  ],
                  response: 50
                },
                {
                  id: 'asdf3',
                  type: 'freeText',
                  text: "Tell us about something you like.",
                  answers: [],
                  response: "I like turtles."
                },
                {
                  id: 'asdf4',
                  type: 'number',
                  text: "How old are you?",
                  answers: [],
                  response: 18
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
                  ],
                  response: 33
                }
              ],
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
              ],
              reward: {
                id: "rwd3",
                title: 'City Key!',
                description: 'Trade this in for the key to the city.',
                creator: "Mayor Bumsted",
                terms: "May not be used in Missouri. Sorry.",
                exp_date: "2/28/1993",
                date_claimed: "4/1/2014",
                verified: "Me",
                owner: "user0",
                passphrase: "honeynut",
                date_issued: "1/2/1013",
                shared_with: ["Joe", "Mark", "Ruby"]
              },
              collaboration: {
                importance: false,
                tags: ["tagged", "another tag!"],
                tagged_users: ["user1", "user45"],
                comments: [
                  {
                    commentId: "cjfdsag4ioe3",
                    author: "user47",
                    time: "2013-02-13T01:15-05:00",
                    text: "Do you think that's wiiiiiise?",
                  },
                  {
                    commentId: "afes3",
                    author: "user87",
                    time: "2013-02-13T01:15-05:00",
                    text: "What?!",
                  }
                ]
              }
            }
          }
        },
        camp1 : {
          id: 'camp1',
          archived: false,
          newCounter: 0,
          handle: "thecinema",
          description: 'Our main feedback portal.',
          title: 'How was the service?',
          message: 'We value your input. Thanks for sharing with us!',
          local: false,
          locationsList: [
            {
              id: 'asdf',
              text: "1 Location Way, Somewhere"
            }
          ],
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
              author: "user4",
              time: "2013-02-13T01:15-05:00",
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
                  ],
                  response: 4
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
                  ],
                  response: 50
                },
                {
                  id: 'asdf3',
                  type: 'freeText',
                  text: "Tell us about something you like.",
                  answers: [],
                  response: "I like turtles."
                },
                {
                  id: 'asdf4',
                  type: 'number',
                  text: "How old are you?",
                  answers: [],
                  response: 18
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
                  ],
                  response: 33
                }
              ],
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
              ],
              reward: {
                id: "rwd2",
                title: 'Free Burrito!',
                description: 'This is an offer for a free coffee.',
                creator: "Crepes & Things",
                terms: "This would be a long, possibly very long paragraph of terms. It may even have more than one paragraph, although this one does not.",
                exp_date: "4/1/2014",
                date_claimed: "4/12/2013",
                verified: "Me",
                owner: "user4",
                passphrase: "starseed",
                date_issued: "1/2/1013",
                shared_with: ["Joe", "Mark", "Ruby"]
              },
              collaboration: {
                importance: true,
                tags: ["kitchen", "service"],
                tagged_users: ["user1", "user45"],
                comments: [
                  {
                    commentId: "cjioe3",
                    author: "user47",
                    time: "2013-02-13T01:15-05:00",
                    text: "Here is an internal comment about this conversation.",
                  }
                ]
              }
            },
            msg1: {
              id: 'msg1',
              author: "user0",
              time: "2013-02-13T01:15-05:00",
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
                  ],
                  response: 4
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
                  ],
                  response: 50
                },
                {
                  id: 'asdf3',
                  type: 'freeText',
                  text: "Tell us about something you like.",
                  answers: [],
                  response: "I like turtles."
                },
                {
                  id: 'asdf4',
                  type: 'number',
                  text: "How old are you?",
                  answers: [],
                  response: 18
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
                  ],
                  response: 33
                }
              ],
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
              ],
              reward: {
                id: "rwd3",
                title: 'City Key!',
                description: 'Trade this in for the key to the city.',
                creator: "Mayor Bumsted",
                terms: "May not be used in Missouri. Sorry.",
                exp_date: "2/28/1993",
                date_claimed: "4/1/2014",
                verified: "Me",
                owner: "user0",
                passphrase: "honeynut",
                date_issued: "1/2/1013",
                shared_with: ["Joe", "Mark", "Ruby"]
              },
              collaboration: {
                importance: false,
                tags: ["tagged", "another tag!"],
                tagged_users: ["user1", "user45"],
                comments: [
                  {
                    commentId: "cjfdsag4ioe3",
                    author: "user47",
                    time: "2013-02-13T01:15-05:00",
                    text: "Do you think that's wiiiiiise?",
                  },
                  {
                    commentId: "afes3",
                    author: "user87",
                    time: "2013-02-13T01:15-05:00",
                    text: "What?!",
                  }
                ]
              }
            }
          }
        }
      }
    },
    account02 : {
      id : "account02",
      handle : "elliottregan",
      questions : {
        q0001 : {
          id : "q0001",
          text : "How one does not think they like which more as?",
          type : "multipleChoice",
          answers : [
            {text:"That it is"},
            {text:"They be do"},
            {text:"There all that"},
            {text:"Jalopy"}
          ]
        },
        q0002 : {
          id : "q0002",
          text : "Nah, but for real:",
          type : "freeText",
          answers : {
            a001 : {
              text:"That it is"
            },
            a002 : {
              text:"They be do"
            },
            a003 : {
              text:"There all that"
            },
            a004 : {
              text:"Jalopy"
            }
          }
        },
        q0003 : {
          id : "q0003",
          type: 'binary',
          text: "Yes or no?",
          answers: []
        },
        q0004 : {
          id : "q0004",
          type: 'number',
          text: "How old are you?",
          answers: []
        }
      },
      locations : {
        l0001 : {
          text : "The mooooon!"
        },
        l0002 : {
          text : "Downstairs"
        },
        l0003 : {
          text : "407 9th St. Brooklyn, NY 11215"
        }
      },
      contacts : [
        "user0","user1"
      ],
      rewards : {
        r0001 : {
          id : "r0001",
          title : 'Free rocket ball',
          description : 'What is a rocket ball?',
          terms : 'Guess correctly, and you get it for free!',
          startdate : "01-02-2013",
          starttime : "8:00am",
          enddate : "01-02-2013",
          endtime : "5:00pm",
          delay : true,
          redeem : "location",
          sharable : "open"
        },
        r0002 : {
          id: "r0002",
          title: 'Ticket to France!',
          description: 'Trade this in for 50% off a burrito.',
          terms: "May not be used in Missouri. Sorry.",
          startdate : "01-02-2013",
          starttime : "8:00am",
          enddate : "01-02-2013",
          endtime : "5:00pm",
          delay : true,
          redeem : "location",
          sharable : "open"
        }
      },
      campaigns : {
        camp2 : {
          id: 'camp2',
          archived: false,
          newCounter: 0,
          handle: "elliottregan",
          description: 'Our main feedback portal.',
          title: 'What do you think of this?',
          message: 'We value your input. Thanks for sharing with us!',
          local: false,
          locationsList: [
            {
              id: 'asdf',
              text: "1 Location Way, Somewhere"
            }
          ],
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
              author: "user4",
              time: "2013-02-13T01:15-05:00",
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
                  ],
                  response: 4
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
                  ],
                  response: 50
                },
                {
                  id: 'asdf3',
                  type: 'freeText',
                  text: "Tell us about something you like.",
                  answers: [],
                  response: "I like turtles."
                },
                {
                  id: 'asdf4',
                  type: 'number',
                  text: "How old are you?",
                  answers: [],
                  response: 18
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
                  ],
                  response: 33
                }
              ],
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
              ],
              reward: {
                id: "rwd2",
                title: 'Free Burrito!',
                description: 'This is an offer for a free coffee.',
                creator: "Crepes & Things",
                terms: "This would be a long, possibly very long paragraph of terms. It may even have more than one paragraph, although this one does not.",
                exp_date: "4/1/2014",
                date_claimed: "4/12/2013",
                verified: "Me",
                owner: "user4",
                passphrase: "starseed",
                date_issued: "1/2/1013",
                shared_with: ["Joe", "Mark", "Ruby"]
              },
              collaboration: {
                importance: true,
                tags: ["kitchen", "service"],
                tagged_users: ["user1", "user45"],
                comments: [
                  {
                    commentId: "cjioe3",
                    author: "user47",
                    time: "2013-02-13T01:15-05:00",
                    text: "Here is an internal comment about this conversation.",
                  }
                ]
              }
            },
            msg1: {
              id: 'msg1',
              author: "user0",
              time: "2013-02-13T01:15-05:00",
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
                  ],
                  response: 4
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
                  ],
                  response: 50
                },
                {
                  id: 'asdf3',
                  type: 'freeText',
                  text: "Tell us about something you like.",
                  answers: [],
                  response: "I like turtles."
                },
                {
                  id: 'asdf4',
                  type: 'number',
                  text: "How old are you?",
                  answers: [],
                  response: 18
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
                  ],
                  response: 33
                }
              ],
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
              ],
              reward: {
                id: "rwd3",
                title: 'City Key!',
                description: 'Trade this in for the key to the city.',
                creator: "Mayor Bumsted",
                terms: "May not be used in Missouri. Sorry.",
                exp_date: "2/28/1993",
                date_claimed: "4/1/2014",
                verified: "Me",
                owner: "user0",
                passphrase: "honeynut",
                date_issued: "1/2/1013",
                shared_with: ["Joe", "Mark", "Ruby"]
              },
              collaboration: {
                importance: false,
                tags: ["tagged", "another tag!"],
                tagged_users: ["user1", "user45"],
                comments: [
                  {
                    commentId: "cjfdsag4ioe3",
                    author: "user47",
                    time: "2013-02-13T01:15-05:00",
                    text: "Do you think that's wiiiiiise?",
                  },
                  {
                    commentId: "afes3",
                    author: "user87",
                    time: "2013-02-13T01:15-05:00",
                    text: "What?!",
                  }
                ]
              }
            }
          }
        }
      }
    }
  };

  var factory = {};
  
  factory.getAccount = function(accountId) {
    if (accountId == undefined) {
      return accounts;
    }
    else {
      return accounts[accountId];
    }
  };
  
  factory.getAccountList = function() {
    var accountList = {}
    Object.keys(accounts).forEach(function(account_id) {
      accountList[account_id] = {id: account_id};
    });
    return accountList;
  };
  
  factory.getHandle = function(accountId) {
    var campaignHandles = [];
    
    if (accountId == undefined) {
      Object.keys(accounts).forEach( function(account_id) {
        console.log(account_id, campaignHandles);
        campaignHandles.push({handle:accounts[account_id].handle, accountId:account_id});
      });
    }
    else {
      campaignHandles = accounts[accountId].handle;
    }
    console.log(campaignHandles)
    return campaignHandles;
  };
  
  factory.getCampaignTitles = function(accountId, active_only) {
  
    var campaignList = {};
    var campaignTitles = {};
    
    if (active_only) {
      campaignList = factory.getActiveCampaigns(accountId);
      Object.keys(campaignList).forEach( function(campaign_id) {
        campaignTitles[campaign_id] = {id:campaign_id, title:campaignList[campaign_id].title, newCounter: campaignList[campaign_id].newCounter};
      });
    }
    
    return campaignTitles;
  };
  
  factory.getActiveCampaigns = function(accountId) {
    var campaignList = accounts[accountId].campaigns;
    var campaignIds = Object.getOwnPropertyNames(campaignList);
    var activeCampaigns = {};
    
    campaignIds.forEach( function(campaign_id) {
      if (campaignList[campaign_id].archived == false) {
        activeCampaigns[campaign_id] = campaignList[campaign_id];
      }
    });
  
    return activeCampaigns;
  
  };
  
  factory.getArchivedCampaigns = function(accountId) {
  
    var campaignList = accounts[accountId].campaigns;
    var campaignIds = Object.getOwnPropertyNames(campaignList);
    var archivedCampaigns = {};
    
    campaignIds.forEach( function(campaign_id) {
      if (campaignList[campaign_id].archived == true) {
        archivedCampaigns[campaign_id] = campaignList[campaign_id];
      }
    });
    
    return archivedCampaigns;
  
  };
  
  factory.addCampaign = function(accountId, campaign_id, campaign) {
    accounts[accountId].campaigns[campaign_id] = campaign;
  };
  
  factory.getRewardsList = function(accountId, campaign_id_array) {
    var rewardsList = [];
    var campaignList = accounts[accountId].campaigns;
    
    campaign_id_array.forEach( function(campaign_id) {
      var instanceIds = Object.keys(campaignList[campaign_id].instances);
      
      instanceIds.forEach(function(instance) {
        var reward = campaignList[campaign_id].instances[instance].reward;
        rewardsList[reward.id] = reward;
        
      });
    });
    
    return rewardsList;
  };
  factory.getContactList = function(accountId, campaign_id_array) {
    var contactList = [];  
    var campaignList = accounts[accountId].campaigns;
    
    campaign_id_array.forEach( function(campaign_id) {
      var instanceIds = Object.getOwnPropertyNames(campaignList[campaign_id].instances);
      instanceIds.forEach(function(instance) {
        var author = campaignList[campaign_id].instances[instance].author;
        contactList.push(author)
      });
    });
    
    return contactList;
  };
  
  return factory;
});

appmodule.factory('allUserData', function() {

  var allUsers = {
    user0: {
      name: "Franz Ferdinand",
      username: "franzy",
      id: "user0",
      conversations: {
        camp0: [
          "msg1"
        ],
        camp5: [
          "msg56"
        ]
      }
    },
    user1: {
      name: "Chad Grecko",
      username: "Chezgo",
      id: "user1",
      conversations: {
        camp1: [
          "msg2",
          "msg97"
        ]
      }
    },
    user3: {
      name: "Alex Frfuisfs Jr.",
      username: "Chezgo",
      id: "user3",
      conversations: {
        camp1: [
          "msg3",
          "msg97"
        ]
      }
    },
    user4: {
      name: "Ronda LeFleur",
      username: "rondstat",
      id: "user4",
      conversations: {
        camp0: [
          "msg0"
        ]
      }
    }
  
  };
  
  var factory = {};
  factory.getUser = function(user_id) {
    return allUsers[user_id];
  };
  return factory;
});

appmodule.factory('campaignData', function() {
  
  var handleList = [];
  var campaignList = {
    camp0: {
      id: 'camp0',
      archived: false,
      newCounter: 0,
      handle: "crepesandthings",
      description: 'Our main feedback portal.',
      title: 'Crepes & Things',
      message: 'We value your input. Thanks for sharing with us!',
      local: false,
      locationsList: [
        {
          id: 'asdf',
          text: "1 Location Way, Somewhere"
        }
      ],
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
          author: "user4",
          time: "2013-02-13T01:15-05:00",
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
              ],
              response: 4
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
              ],
              response: 50
            },
            {
              id: 'asdf3',
              type: 'freeText',
              text: "Tell us about something you like.",
              answers: [],
              response: "I like turtles."
            },
            {
              id: 'asdf4',
              type: 'number',
              text: "How old are you?",
              answers: [],
              response: 18
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
              ],
              response: 33
            }
          ],
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
          ],
          reward: {
            id: "rwd2",
            title: 'Free Burrito!',
            description: 'This is an offer for a free coffee.',
            creator: "Crepes & Things",
            terms: "This would be a long, possibly very long paragraph of terms. It may even have more than one paragraph, although this one does not.",
            exp_date: "4/1/2014",
            date_claimed: "4/12/2013",
            verified: "Me",
            owner: "user4",
            passphrase: "starseed",
            date_issued: "1/2/1013",
            shared_with: ["Joe", "Mark", "Ruby"]
          },
          collaboration: {
            importance: true,
            tags: ["kitchen", "service"],
            tagged_users: ["user1", "user45"],
            comments: [
              {
                commentId: "cjioe3",
                author: "user47",
                time: "2013-02-13T01:15-05:00",
                text: "Here is an internal comment about this conversation.",
              }
            ]
          }
        },
        msg1: {
          id: 'msg1',
          author: "user0",
          time: "2013-02-13T01:15-05:00",
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
              ],
              response: 4
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
              ],
              response: 50
            },
            {
              id: 'asdf3',
              type: 'freeText',
              text: "Tell us about something you like.",
              answers: [],
              response: "I like turtles."
            },
            {
              id: 'asdf4',
              type: 'number',
              text: "How old are you?",
              answers: [],
              response: 18
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
              ],
              response: 33
            }
          ],
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
          ],
          reward: {
            id: "rwd3",
            title: 'City Key!',
            description: 'Trade this in for the key to the city.',
            creator: "Mayor Bumsted",
            terms: "May not be used in Missouri. Sorry.",
            exp_date: "2/28/1993",
            date_claimed: "4/1/2014",
            verified: "Me",
            owner: "user0",
            passphrase: "honeynut",
            date_issued: "1/2/1013",
            shared_with: ["Joe", "Mark", "Ruby"]
          },
          collaboration: {
            importance: false,
            tags: ["tagged", "another tag!"],
            tagged_users: ["user1", "user45"],
            comments: [
              {
                commentId: "cjfdsag4ioe3",
                author: "user47",
                time: "2013-02-13T01:15-05:00",
                text: "Do you think that's wiiiiiise?",
              },
              {
                commentId: "afes3",
                author: "user87",
                time: "2013-02-13T01:15-05:00",
                text: "What?!",
              }
            ]
          }
        }
      }
    },
    camp1: {
      id: 'camp1',
      archived: false,
      newCounter: 0,
      handle: "crepesandthings_tea",
      title: 'Which tea?',
      description: "Asking our customers if they like our green tea or white tea better.",
      local: true,
      message: 'We value your input. Thanks for sharing with us!',
      locationsList: [
        {
          id: 'asdf',
          text: "1 Location Way, Somewhere"
        }
      ],
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
        msg2 : {
          id: 'msg2',
          author: "user1",
          time: "2013-02-13T01:15-05:00",
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
              ],
              response: 4
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
              ],
              response: 50
            },
            {
              id: 'asdf3',
              type: 'freeText',
              text: "Tell us about something you like.",
              answers: [],
              response: "I like turtles."
            },
            {
              id: 'asdf4',
              type: 'number',
              text: "How old are you?",
              answers: [],
              response: 18
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
              ],
              response: 33
            }
          ],
          heard: "false",
          comments: [
            { commentId: 'fdsahy',
              author: "You", 
              time: "2013-02-13T01:15-05:00",
              text: "This might be a response to the feedback.",
              heard: "false"
            },
            { commentId: 'asdfgtr',
              author: "user0", 
              time: "2013-02-13T01:15-05:00",
              text: "This might be you reply",
              heard: "false"
            }
          ],
          reward: {
            id: "rwd1",
            title: 'Free rocket ball',
            description: 'What is a rocket ball?',
            creator: "RocketMan",
            terms: "Guess correctly, and you get it for free!",
            exp_date: "2/28/1993",
            date_claimed: false,
            verified: false,
            owner: "user1",
            passphrase: "applegoat",
            date_issued: "1/2/1013",
            shared_with: ["Joe", "Mark", "Ruby"]
          },
          collaboration: {
            importance: false,
            tags: [],
            tagged_users: [],
            comments: []
          }
        },
        msg3 : {
          id: 'msg3',
          author: "user3",
          time: "2013-02-13T01:15-05:00",
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
              ],
              response: 4
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
              ],
              response: 50
            },
            {
              id: 'asdf3',
              type: 'freeText',
              text: "Tell us about something you like.",
              answers: [],
              response: "I like turtles."
            },
            {
              id: 'asdf4',
              type: 'number',
              text: "How old are you?",
              answers: [],
              response: 18
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
              ],
              response: 33
            }
          ],
          heard: "false",
          comments: [
            { commentId: 'asdf',
              author: "You", 
              time: "2013-02-13T01:15-05:00",
              text: "Glad to hear from you. Anything else we can do for you?",
              heard: "false"
            },
            { commentId: 'fdsaf',
              author: "user1", 
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
              author: "user1", 
              time: "2013-02-13T01:15-05:00",
              text: "Ok, thanks! You guys are the best.",
              heard: "false"
            }
          ],
          reward: {
            id: "rwd4",
            title: 'Ticket to France!',
            description: 'Trade this in for 50% off a burrito.',
            creator: "Long Live Guac",
            terms: "May not be used in Missouri. Sorry.",
            exp_date: "2/28/1993",
            date_claimed: "4/1/2014",
            verified: "Me",
            owner: "user3",
            passphrase: "richzing",
            date_issued: "1/2/1013",
            shared_with: ["Joe", "Mark", "Ruby"]
          },
          collaboration: {
            importance: false,
            tags: [],
            tagged_users: [],
            comments: []
          }
        }
      }
    }
  };
  
    
  var campaignIds = Object.getOwnPropertyNames(campaignList);
  var activeCampaignList = {};
  var archivedCampaignList = {};
  
  campaignIds.forEach(function(campaign) {
    var handle = campaignList[campaign].handle;
    handleList.push(handle)
  });
  
    
  var factory = {};
  factory.getCampaigns = function() {
    return campaignList;
  };
  factory.getRewardsList = function(campaign_id_array) {
    var rewardsList = [];
    
    campaign_id_array.forEach( function(campaign_id) {
      var instanceIds = Object.keys(campaignList[campaign_id].instances);
      
      instanceIds.forEach(function(instance) {
        var reward = campaignList[campaign_id].instances[instance].reward;
        rewardsList[reward.id] = reward;
        
      });
    });
    
    return rewardsList;
  };
  factory.getContactList = function(campaign_id_array) {
    var contactList = [];  
    campaign_id_array.forEach( function(campaign_id) {
      var instanceIds = Object.getOwnPropertyNames(campaignList[campaign_id].instances);
      instanceIds.forEach(function(instance) {
        var author = campaignList[campaign_id].instances[instance].author;
        contactList.push(author)
      });
    });
    
    return contactList;
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
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    accounts : {
      account01 : {
        id : "account01",
        permissions : "admin"
      },
      account02 : {
        id : "account02",
        permissions : "admin"
      }
    }
  };
  
  var instances = {
    msg0: {
      id: 'msg0',
      author: "You",
      name: "Crepes & Things",
      handle: '@crepesandthings',
      time: "2013-02-13T01:15-05:00",
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
          ],
          response: 4
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
          ],
          response: 50
        },
        {
          id: 'asdf3',
          type: 'freeText',
          text: "Tell us about something you like.",
          answers: [],
          response: "I like turtles."
        },
        {
          id: 'asdf4',
          type: 'number',
          text: "How old are you?",
          answers: [],
          response: 18
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
          ],
          response: 33
        }
      ],
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
      name: "Crepes & Things",
      handle: '@crepesandthings',
      time: "2013-02-13T01:15-05:00",
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
          ],
          response: 4
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
          ],
          response: 50
        },
        {
          id: 'asdf3',
          type: 'freeText',
          text: "Tell us about something you like.",
          answers: [],
          response: "I like turtles."
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
          ],
          response: 33
        }
      ],
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
      locationsList: [
        {
          id: 'asdf',
          text: "1 Location Way, Somewhere"
        }
      ],
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