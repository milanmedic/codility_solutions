const checkStraightLine = function(coordinates) {

    var checkStraightLine = function(coordinates) {
        var slope = calcSlope(coordinates[0], coordinates[1])
        
        for (var i = 1; i < coordinates.length-1; i++) {
            var currSlope = calcSlope(coordinates[i], coordinates[i+1]);
            if (currSlope !== slope)
                return false;
            slope = currSlope;
        }
        
        return true;
    };
}

var calcSlope = (p1, p2) => (p2[1]-p1[1])/(p2[0]-p1[0]);

console.log(checkStraightLine([[-3,-2],[-1,-2],[2,-2],[-2,-2],[0,-2]]))
//                  -5        -3    0   -4   -2 
//                 [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
//                    3     5    7     9     11     13
