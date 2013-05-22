appmodule.factory('userData', function() {
  
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
  return factory;
  
});