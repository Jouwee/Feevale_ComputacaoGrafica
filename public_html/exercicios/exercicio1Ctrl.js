exercicios['exercicio1Ctrl'] = {
    controller: function ($scope, $routeParams) {
        var x1 = 0;
        var y1 = 0;
        var x2 = 11;
        var y2 = 23;
        $scope.logDDAA = function (x0, y0, x1, y1) {
            pontos = [];
            var dx = x1 - x0;
            var dy = y1 - y0;
            var x = x0;
            var y = x0;

            var s;

            if (dx > dy) {
                s = Math.abs(dx);
            } else {
                s = Math.abs(dy);
            }

            var xv = dx / s;
            var yv = dy / s;
            var i = 0;
            while (x < x1 || y < y1) {
                pontos.push({x: Math.round(x), y: Math.round(y)});
                i++;
                x = x + xv;
                y = y + yv;
            }
            return pontos;
        };

        var pontos = $scope.logDDAA(x1, y1, x2, y2);

        $scope.output = 'From ' + x1 + ', ' + y1 + ' to ' + x2 + ', ' + y2 + '\n[';
        for (var i = 0; i < pontos.length; i++) {
            if (i > 0) {
                $scope.output += ', ';
            }
            $scope.output += pontos[i].x + 'x' + pontos[i].y;
        }
        $scope.output += ']';
    }
};