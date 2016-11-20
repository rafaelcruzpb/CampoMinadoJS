var width = 10;
var mines = 15;
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
    setNumberRoundedBombs(col, lin);
  }

}

function setNumberRoundedBombs(col, lin){
  var count = 0;
  // if(col != width-1 && campoMatriz[lin][col+1])
  //     count++;
  // if(col != 0 && campoMatriz[lin][col-1])
  //     count++;
  // if(lin != 0 && campoMatriz[lin-1][col])
  //     count++;
  // if(lin != width-1 && campoMatriz[lin+1][col])
  //     count++;

  if(lin != 0){
      if(col != 0){
        if(campoMatriz[lin-1][col-1])
            count++;
      }
      if(col != width-1){
        if(campoMatriz[lin+1][col+1])
          count++;
      }
  }

  if(lin != width-1){
    if(col != width-1){
      if(campoMatriz[lin-1][col+1])
          count++;
    }
    if(col != 0){
      if(campoMatriz[lin+1][col-1])
        count++;
    }
  }

  console.log("Quantidade: "+ count);
}

$(document).ready(function() {
  init();
  $("table#campo").on("click", "td", function(event){
    console.log(event);
    _clickPlayer($(this));
  });
});
