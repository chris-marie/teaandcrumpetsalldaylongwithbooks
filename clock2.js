// this seem not to have change - is that a typo?

function MyController($scope, $timeout) {
    var updateClock = function () {
	$scope.clock = new Date();
    };
    setInterval(function() {  // this doesn't work either
	$scope.$apply(updateClock);  
    }, 1000);
    updateClock();
};
