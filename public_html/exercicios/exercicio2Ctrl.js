exercicios['exercicio2Ctrl'] = {
    controller: function ($scope, $routeParams) {
        var x1 = 0;
        var y1 = 0;
        var x2 = 11;
        var y2 = 23;
        $scope.logBresenham = function (x0, y0, x1, y1) {
            var pontos = [];
            var dx = x1 - x0;
            var dy = y1 - y0;

            var p = 2 * dy - dx;
            var p2 = 2 * dy;
            var xy2 = 2 * (dy - dx);

            var x, y, xf, yf;

            if (x0 > x1) {
                x = x1;
                y = y1;
                xf = x0;
                yf = y0;
            } else {
                x = x0;
                y = y0;
                xf = x1;
                yf = y1;
            }
            pontos.push({x: x, y: y});
            while (x < xf || y < yf) {
                x++;
                if (p < 0) {
                    p += p2;
                } else {
                    y++;
                    p += xy2;
                }
                pontos.push({x: x, y: y});
            }



            return pontos;
        };

        var pontos = $scope.logBresenham(x1, y1, x2, y2);

        $scope.output = 'From ' + x1 + ', ' + y1 + ' to ' + x2 + ', ' + y2 + '\n[';
        for (var i = 0; i < pontos.length; i++) {
            if (i > 0) {
                $scope.output += ', ';
            }
            $scope.output += pontos[i].x + 'x' + pontos[i].y;
        }
        $scope.output += ']';
    }};