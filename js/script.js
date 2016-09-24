var width = 10;
var mines = 5;
campoMatriz = [];
var campoNode;

function init(){
  var d_str = "";
  campoNode = $("table#campo");
  for(var i = 0; i<width; i++){
    campoMatriz[i] = [];
    var n = $("<tr></tr>");
    for(var j = 0; j<width; j++){
      campoMatriz[i][j] = 0;
      n.append($("<td></td>", { linha: i, coluna: j }));
    }
    campoNode.append(n);
  }
  var mark = getRandomPositions();
  for(var i = 0; i<mines; i++){
    campoMatriz[mark[i][0]][mark[i][1]] = 1;
  }

}

function getRandomPositions(c){
   var pos = [];
   var x, y;

   for(var q = 0; q < mines; q++){

     do{
       var x = Math.floor((Math.random() * width));
       var y = Math.floor((Math.random() * width));
     }while(campoMatriz[x][y] != 0);

     pos[q] = [x, y];
   }

   return pos;
}

function _clickPlayer(_this){
  var col, lin;
  col = parseInt(_this.attr("coluna"));
  lin = parseInt(_this.attr("linha"));
  if(campoMatriz[lin][col] == 1){
    _this.css("background-color", "red");
  }else{
    _this.css("background-color", "green");
  }


}

$(document).ready(function() {
  init();
  $("table#campo").on("click", "td", function(event){
    console.log(event);
    _clickPlayer($(this));
  });
});
