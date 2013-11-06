appmodule.factory('accountData', function() {

  var accounts = {
    account01 : {
      id : "account01",
      handle : "thecinema",
      handleList : [
        {
          id : 01,
          text : "thecinema"
        },
        {
          id : 02,
          text : "thecinemapromos"
        }
      ],
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
          handle: 01,
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
          conversations : {
            msg1: {
              id: 'msg1',
              author: "user4",
              time: "4/5/13",
              questionsList: [
                {
                  id: 'asdf',
                  type: 'freeText',
                  text: "How one does not think they like which more as?",
                  answers: [],
                  response: "They don't think it be like it is, but they do."
                }
              ],
              heard: false,
              comments: [
                { commentId: 'fdsahy',
                  author: "You", 
                  time: "12/3/13",
                  text: "This might be your reply.",
                  heard: false
                },
                { commentId: 'asdfgtr',
                  author: "Franz Ferdinand", 
                  time: "12/3/13",
                  text: "This might be a response to the feedback.",
                  heard: false
                }
              ],
              reward: {
                id: "rwd2",
                title: 'Free Burrito!',
                description: 'This is an offer for a free coffee.',
                creator: "Crepes & Things",
                terms: "This would be a long, possibly very long paragraph of terms. It may even have more than one paragraph, although this one does not.",
                exp_date: "4/1/2014",
                status: "redeemed",
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
                    time: "4/5/13",
                    text: "Here is an internal comment about this conversation.",
                  }
                ]
              }
            },
            msg8: {
              id: 'msg8',
              author: "user0",
              time: "4/5/13",
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
                }
              ],
              heard: false,
              comments: [
                { commentId: 'asdf',
                  author: "You", 
                  time: "4/5/13",
                  text: "Glad to hear from you. Anything else we can do for you?",
                  heard: false
                },
                { commentId: 'fdsaf',
                  author: "Chad Grecko", 
                  time: "4/5/13",
                  text: "The text on the menus is too small. Can you make it bigger?",
                  heard: false
                },
                { commentId: 'fdsaf',
                  author: "You", 
                  time: "4/5/13",
                  text: "Sure. Not a problem. I'll let you know when we reprint our menus, some time next month.",
                  heard: false
                },
                { commentId: 'fdsaf',
                  author: "Chad Grecko", 
                  time: "4/5/13",
                  text: "Ok, thanks! You guys are the best.",
                  heard: false
                }
              ],
              reward: {
                id: "rwd3",
                title: 'City Key!',
                description: 'Trade this in for the key to the city.',
                creator: "Mayor Bumsted",
                terms: "May not be used in Missouri. Sorry.",
                exp_date: "2/28/1993",
                status: "open",
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
                    time: "4/5/13",
                    text: "Do you think that's wiiiiiise?",
                  },
                  {
                    commentId: "afes3",
                    author: "user87",
                    time: "4/5/13",
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
          handle: 02,
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
          conversations : {
            msg2: {
              id: 'msg2',
              author: "user4",
              time: "4/5/13",
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
                }
              ],
              heard: false,
              comments: [
                { commentId: 'fdsahy',
                  author: "You", 
                  time: "4/5/13",
                  text: "This might be a response to the feedback.",
                  heard: false
                },
                { commentId: 'asdfgtr',
                  author: "Franz Ferdinand", 
                  time: "4/5/13",
                  text: "This might be you reply",
                  heard: false
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
                    time: "4/5/13",
                    text: "Here is an internal comment about this conversation.",
                  }
                ]
              }
            },
            msg3: {
              id: 'msg3',
              author: "user0",
              time: "4/5/13",
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
                }
              ],
              heard: false,
              comments: [
                { commentId: 'asdf',
                  author: "You", 
                  time: "4/5/13",
                  text: "Glad to hear from you. Anything else we can do for you?",
                  heard: false
                },
                { commentId: 'fdsaf',
                  author: "Chad Grecko", 
                  time: "4/5/13",
                  text: "The text on the menus is too small. Can you make it bigger?",
                  heard: false
                },
                { commentId: 'fdsaf',
                  author: "You", 
                  time: "4/5/13",
                  text: "Sure. Not a problem. I'll let you know when we reprint our menus, some time next month.",
                  heard: false
                },
                { commentId: 'fdsaf',
                  author: "Chad Grecko", 
                  time: "4/5/13",
                  text: "Ok, thanks! You guys are the best.",
                  heard: false
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
                    time: "4/5/13",
                    text: "Do you think that's wiiiiiise?",
                  },
                  {
                    commentId: "afes3",
                    author: "user87",
                    time: "4/5/13",
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
      handleList : [
        {
          id : 03,
          text : "elliottregan"
        }
      ],
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
          handle: 03,
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
          conversations : {
            msg5: {
              id: 'msg5',
              author: "user4",
              time: "4/5/13",
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
                  response: 0
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
                }
              ],
              heard: false,
              comments: [
                { commentId: 'fdsahy',
                  author: "You", 
                  time: "4/5/13",
                  text: "This might be a response to the feedback.",
                  heard: false
                },
                { commentId: 'asdfgtr',
                  author: "Franz Ferdinand", 
                  time: "4/5/13",
                  text: "This might be you reply",
                  heard: false
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
                    time: "4/5/13",
                    text: "Here is an internal comment about this conversation.",
                  }
                ]
              }
            },
            msg6: {
              id: 'msg6',
              author: "user0",
              time: "4/5/13",
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
                }
              ],
              heard: false,
              comments: [
                { commentId: 'asdf',
                  author: "You", 
                  time: "4/5/13",
                  text: "Glad to hear from you. Anything else we can do for you?",
                  heard: false
                },
                { commentId: 'fdsaf',
                  author: "Chad Grecko", 
                  time: "4/5/13",
                  text: "The text on the menus is too small. Can you make it bigger?",
                  heard: false
                },
                { commentId: 'fdsaf',
                  author: "You", 
                  time: "4/5/13",
                  text: "Sure. Not a problem. I'll let you know when we reprint our menus, some time next month.",
                  heard: false
                },
                { commentId: 'fdsaf',
                  author: "Chad Grecko", 
                  time: "4/5/13",
                  text: "Ok, thanks! You guys are the best.",
                  heard: false
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
                    time: "4/5/13",
                    text: "Do you think that's wiiiiiise?",
                  },
                  {
                    commentId: "afes3",
                    author: "user87",
                    time: "4/5/13",
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
    
    Object.extended(accounts).each(function(account_id, account_keys) {
      accountList[account_id] = {
        id: account_id,
        handleList : account_keys.handleList
      };
    });
    
    return accountList;
  };
  
  factory.getAccountHandles = function(accountId) {
    var campaignHandles = [];
    
    if (accountId == undefined) {
      Object.keys(accounts).forEach( function(account_id) {
        campaignHandles.push({handle:accounts[account_id].handleList, accountId:account_id});
      });
    }
    else {
      campaignHandles = accounts[accountId].handleList;
    }
    return campaignHandles;
  };
  
  factory.getCampaignTitles = function(accountId, active_only, return_array) {
    var campaignList = {};
    var campaignTitles = {};
    
    var handleList = factory.getAccountList()[accountId];
    
    var getHandleText = function(handle_id) {
      return factory.getAccountList()[accountId].handleList.find(function(handle_object) {
        return handle_object.id == handle_id;
      }).text;
    };
        
    if (!return_array) {
      if (active_only) {
        if (accountId) {
          campaignList = factory.getActiveCampaigns(accountId);
          Object.keys(campaignList).forEach( function(campaign_id) {
            campaignTitles[campaign_id] = {
              id:campaign_id,
              account_id: accountId,
              title:campaignList[campaign_id].title, 
              newCounter: campaignList[campaign_id].newCounter,
              handle: getHandleText(campaignList[campaign_id].handle)
            };
          });
        }
        else {
          Object.keys(accountData.getAccountList()).forEach(function(account) {
            campaignList.push(factory.getActiveCampaigns());
            Object.keys(campaignList).forEach( function(campaign_id) {
              campaignTitles[campaign_id] = {
                id:campaign_id,
                account_id: account.id,
                title:campaignList[campaign_id].title, 
                newCounter: campaignList[campaign_id].newCounter,
                handle: getHandleText(campaignList[campaign_id].handle)
              };
            });
          });
        }
      }
    }
    else {
      campaignTitles = [];
      if (active_only) {
        if (accountId) {
          campaignList = factory.getActiveCampaigns(accountId);
          Object.keys(campaignList).forEach( function(campaign_id) {
            campaignTitles = campaignTitles.add({
              id:campaign_id,
              account_id: accountId,
              title:campaignList[campaign_id].title, 
              newCounter: campaignList[campaign_id].newCounter,
              handle: getHandleText(campaignList[campaign_id].handle)
            });
          });
        }
        else {
          Object.keys(accountData.getAccountList()).forEach(function(account) {
            campaignList.push(factory.getActiveCampaigns());
            Object.keys(campaignList).forEach( function(campaign_id) {
              campaignTitles = campaignTitles.add({
                id:campaign_id,
                account_id: account.id,
                title:campaignList[campaign_id].title, 
                newCounter: campaignList[campaign_id].newCounter,
                handle: getHandleText(campaignList[campaign_id].handle)
              });
            });
          });
        } 
      }
    }
    
    return campaignTitles;
  };
  
  factory.getMultiAccountCampaignTitles = function() {
    var campaignTitleList = {};
    Object.keys(factory.getAccountList()).forEach(function(account) {
      campaignTitleList = Object.merge(campaignTitleList,factory.getCampaignTitles(account, false));
    });
    return campaignTitleList;
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
  
  factory.updateCampaign = function(accountId, campaign_id, edited_campaign) {
    accounts[accountId].campaigns[campaign_id] = Object.merge(accounts[accountId].campaigns[campaign_id], edited_campaign, true);
    accounts[accountId].campaigns[campaign_id].questionsList = edited_campaign.questionsList;
  };
  
  factory.addMessage = function(account_id, campaign_id, message_id, message) {
    accounts[account_id].campaigns[campaign_id].conversations[messageId] = message;
  };
  
  factory.resetNewCounter = function(account_id, campaign_id) {
    accounts[account_id].campaigns[campaign_id].newCounter = 0;
  };
  
  factory.checkIfCampaignExist = function(check_against_account_ids, campaign_id) {
        
    var outcomes = [];
    i = 0;
    //hacky thing to convert a single account string into a one element array
    if (Object.isString(check_against_account_ids)) {
      campaign_id_temp = check_against_account_ids;
      check_against_account_ids = [];
      check_against_account_ids[0] = campaign_id_temp;
    };
    
    Object.values(check_against_account_ids).forEach(function(account_id) {
      
      var search_in_campaigns = factory.getCampaignTitles(account_id, true, false);
      Object.keys(search_in_campaigns, function(campaign_id_key, campaign_value) {
        outcomes[i] = Object.any(campaign_value,campaign_id);
        i = i+1;
      });
      
    });
    return outcomes.some(true);    
  };
  
  factory.getCampaignTitleText = function(accountId, campaignId) {
    var campaignList = {};
    campaignList = factory.getCampaignTitles(accountId, true);
    var title = ""
    title = campaignList[campaignId].title
    return title
  };

  factory.getHandleText = function(handle_id, account_id) {
    return factory.getAccountList()[account_id].handleList.find(function(handle_object) {
      return handle_object.id == handle_id;
    }).text;
  };
  
  factory.getConversations = function(array_of_account_ids, array_of_campaign_ids) {
    var conversationsList = {};
    var campaignTitlesList = [];
    
    if (Object.isString(array_of_account_ids)) {
      account_id_temp = array_of_account_ids;
      array_of_account_ids = [];
      array_of_account_ids[0] = account_id_temp;
    };
    campaignTitlesList = {};
    Object.values(array_of_account_ids).forEach(function(account_id) {
      campaignTitlesList = Object.merge(campaignTitlesList, factory.getCampaignTitles(account_id, true));
      
      array_of_campaign_ids.forEach(function(campaign_id) {
        if (factory.checkIfCampaignExist(account_id, campaign_id)) {
          thisCampaignMessages = {};
          thisCampaignMessages = accounts[account_id].campaigns[campaign_id].conversations;

          Object.keys(thisCampaignMessages, function(message_id) {
            
            messageCampaignTitle = factory.getCampaignTitleText(account_id, campaign_id)
            messageHandleText = factory.getHandleText(accounts[account_id].campaigns[campaign_id].handle, account_id)
            thisCampaignMessages[message_id].campaign = messageCampaignTitle;
            thisCampaignMessages[message_id].handle = messageHandleText;
            thisCampaignMessages[message_id].account = account_id;
          })

          conversationsList = Object.merge(conversationsList,accounts[account_id].campaigns[campaign_id].conversations);
        }
      });
    });    
    console.log(conversationsList)
    return conversationsList;
  };
  
  factory.getRewards = function(array_of_account_ids, array_of_campaign_ids, requested_reward_status) {

    var conversations = factory.getConversations(array_of_account_ids, array_of_campaign_ids);
    var rewardsList = [];
    
    Object.values(conversations).forEach( function(conversation) {
      
      if (conversation.reward.status == requested_reward_status) {
        rewardsList.add([conversation.reward]);
        rewardsList = rewardsList.unique(function(obj) {
          return obj.id;
        });
      }
    
    });
        
    return rewardsList;
  };
  
  
  factory.getMetaData = function(array_of_account_ids, array_of_campaign_ids) {
    var metaData = {
      locationsList : [],
      questionsList : [],
      permissions : {},
      activeReward : {}
    };
    var campaignTitlesList = [];
    
    //hacky fix to convert a single account string into a one element array
    if (Object.isString(array_of_account_ids)) {
      account_id_temp = array_of_account_ids;
      array_of_account_ids = [];
      array_of_account_ids[0] = account_id_temp;
    };
    
    Object.values(array_of_account_ids).forEach(function(account_id) {
      
      campaignTitlesList = factory.getCampaignTitles(account_id, true);
      
      //hacky fix to convert a single account string into a one element array
      if (Object.isString(array_of_campaign_ids)) {
        account_id_temp = array_of_campaign_ids;
        array_of_campaign_ids = [];
        array_of_campaign_ids[0] = account_id_temp;
      };
      
      array_of_campaign_ids.forEach(function(campaign_id) {
        if (factory.checkIfCampaignExist(account_id, campaign_id)) {
          metaData.locationsList = Object.merge(metaData.locationsList,accounts[account_id].campaigns[campaign_id].locationsList);
          metaData.questionsList = Object.merge(metaData.questionsList,accounts[account_id].campaigns[campaign_id].questionsList);
          metaData.permissions = Object.merge(metaData.permissions,accounts[account_id].campaigns[campaign_id].permissions);
          metaData.activeReward = Object.merge(metaData.activeReward,accounts[account_id].campaigns[campaign_id].reward);
        }
      });
    });
    
    return metaData;
  };
  
  factory.getRewardsList = function(account_id, campaign_id_array) { //only used for user rewards
    var rewardsList = [];
    var campaignList = accounts[account_id].campaigns;
    
    campaign_id_array.forEach( function(campaign_id) {
      var instanceIds = Object.keys(campaignList[campaign_id].conversations);
      
      instanceIds.forEach(function(instance) {
        var reward = campaignList[campaign_id].conversations[instance].reward;
        rewardsList[reward.id] = reward;
        
      });
    });
    
    return rewardsList;
  };
  factory.getContactList = function(accountId, campaign_id_array) {
    var contactList = [];  
    var campaignList = accounts[accountId].campaigns;
    
    campaign_id_array.forEach( function(campaign_id) {
      var instanceIds = Object.getOwnPropertyNames(campaignList[campaign_id].conversations);
      instanceIds.forEach(function(instance) {
        var author = campaignList[campaign_id].conversations[instance].author;
        contactList.push(author)
      });
    });
    
    return contactList;
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
  
  var conversations = {
    msg0: {
      id: 'msg0',
      author: "You",
      name: "Crepes & Things",
      handle: '@crepesandthings',
      time: "4/5/13",
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
      heard: false,
      comments: [
        { commentId: 'fdsahy',
          author: "Crepes & Things", 
          time: "4/5/13",
          text: "This might be a response to the feedback.",
          heard: false
        },
        { commentId: 'asdfgtr',
          author: "You", 
          time: "4/5/13",
          text: "This might be your reply",
          heard: false
        }
      ],
      reward: {
        id: "rwd2",
        title: 'Free Burrito!',
        description: 'This is an offer for a free coffee.',
        creator: "Crepes & Things",
        terms: "This would be a long, possibly very long paragraph of terms. It may even have more than one paragraph, although this one does not.",
        exp_date: "4/1/2014",
        status: "redeemed",
        date_claimed: "4/12/2013",
        verified: "Me",
        owner: "user4",
        passphrase: "starseed",
        date_issued: "1/2/1013",
        status : "open"
      }
    },
    msg1: {
      id: 'msg1',
      author: "You",
      name: "Crepes & Things",
      handle: '@crepesandthings',
      time: "4/5/13",
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
      heard: false,
      comments: [
        { commentId: 'asdf',
          author: "Crepes & Things", 
          time: "4/5/13",
          text: "Glad to hear from you. Anything else we can do for you?",
          heard: false
        },
        { commentId: 'fdsaf',
          author: "You", 
          time: "4/5/13",
          text: "The text on the menus is too small. Can you make it bigger?",
          heard: false
        },
        { commentId: 'fdsaf',
          author: "Crepes & Things", 
          time: "4/5/13",
          text: "Sure. Not a problem. I'll let you know when we reprint our menus, some time next month.",
          heard: false
        },
        { commentId: 'fdsaf',
          author: "You", 
          time: "4/5/13",
          text: "Ok, thanks! You guys are the best.",
          heard: false
        }
      ],
      reward: {
        id: "rwd4",
        title: 'Free Burrito!',
        description: 'This is an offer for a free coffee.',
        creator: "Crepes & Things",
        terms: "This would be a long, possibly very long paragraph of terms. It may even have more than one paragraph, although this one does not.",
        exp_date: "4/1/2014",
        status: "redeemed",
        date_claimed: "4/12/2013",
        verified: "Me",
        owner: "user4",
        passphrase: "starseed",
        date_issued: "1/2/1013",
        status : "open"
      }
    }
  };
  
  var factory = {};
  
  factory.getConversations = function() {      
      return conversations;
    };
    
  factory.getRewards = function(requested_reward_status) {

    var conversations = factory.getConversations();
    var rewardsList = [];
    
    Object.values(conversations).forEach( function(conversation) {
      if (conversation.reward.status == requested_reward_status) {
        rewardsList.add([conversation.reward]);
        rewardsList = rewardsList.unique(function(obj) {
          return obj.id;
        });
      }
    
    });
        
    return rewardsList;
  };
  
  factory.getRewardsList = function() {
    return rewardsList;
  };
  factory.getUserDetails = function() {
    return userDetails;
  };
  factory.getconversations = function() {
    return conversations;
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