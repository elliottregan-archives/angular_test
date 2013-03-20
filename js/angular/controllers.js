function ConfirmCodes($scope) {

  $scope.dictionary = [
    "apple", 
    "banana",
    "carrot"
  ];
  
  $scope.success = function() {
    $('.code').addClass('success');
    setTimeout(function() {
      $('.code').removeClass('success');
    }, 500);
  }
  
  
  $scope.newCode = function() {
    
    do {
      word1 = $scope.dictionary[Math.floor(Math.random()*$scope.dictionary.length)];
      word2 = $scope.dictionary[Math.floor(Math.random()*$scope.dictionary.length)];
      tempCode = word1 + word2;
      found = $.inArray(tempCode, $scope.codeList);
      $scope.currentCode = tempCode;
    } while ((found != -1) && ($scope.codeList.length < ($scope.dictionary.length*$scope.dictionary.length)) );
    
    if (found != -1) {
      $scope.currentCode = "no codes left";
    };
  };
  
  $scope.codeList = [];
  
  $scope.newCode();
  
  $scope.registerCode = function() {
    if ($scope.currentCode != "no codes left") {
      $scope.codeList.push($scope.currentCode);
      $scope.success();
      $scope.newCode();
    }
  }
}

function ListController($scope) {
    
    $scope.codes = [
      {num: '11111111111', exp: '2014-08-02', use: 'unclaimed'},
      {num: '22222222222', exp: '2014-08-04', use: 'unclaimed'},
      {num: '33333333333', exp: '2014-08-02', use: 'unclaimed'},
      {num: '44444444444', exp: '2014-08-04', use: '2013-02-02'},
      {num: '55555555555', exp: '2014-08-04', use: 'unclaimed'},
      {num: '66666666666', exp: '2014-08-04', use: 'unclaimed'},
      {num: '77777777777', exp: '2014-08-04', use: 'unclaimed'},
    ];
    
    getDate = function() {
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth()+1; //January is 0!
      
      var yyyy = today.getFullYear();
      if (dd<10) {
        dd='0'+dd
      } 
      if (mm<10) {
        mm='0'+mm
      } 
      
      today = yyyy+'-'+mm+'-'+dd;
      return today;
      
    };
    
    $scope.claim = function(el) {      
      if (el.use === "unclaimed") {
        el.use = getDate();
      } else {
        el.use = "unclaimed";
      };
    };
    
    
};