// // Bước 1: Xác định biên bản chứa các nước đi
// var moves = ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'f1c4', 'g8f6'];

// // Bước 2: Xác định thời gian chờ giữa các nước đi (nếu cần)
// var delay = 1000; // 1 giây

// // Bước 3: Hàm di chuyển quân cờ tự động
// function autoMove() {
//     var currentIndex = 0;

//     function moveNext() {
//     if (currentIndex < moves.length) {
//         var move = moves[currentIndex];

//         var sourceId = move.substring(0, 2);
//         var targetId = move.substring(2, 4);

//         var piece = document.getElementById(sourceId);
//         var target = document.getElementById(targetId);

//         // Di chuyển quân cờ từ ô nguồn đến ô đích
//         var pieceImg = piece.querySelector('img');
//         target.innerHTML = piece.innerHTML;
//         piece.innerHTML = '';

//         currentIndex++;

//         var randomDelay = Math.floor(Math.random() * 1500) + 500;

//         // Thực hiện di chuyển tiếp theo sau một khoảng thời gian chờ
//         setTimeout(moveNext, randomDelay);
//     }
//     }

//     // Bắt đầu di chuyển từ bước đầu tiên
//     moveNext();
// }

// // Bước 4: Gọi hàm di chuyển tự động
// autoMove();


// VER 2
var games = [
    // ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'f1c4', 'g8f6', 'd2d3', 'd7d6',
    //  'c1g5', 'f8e7', 'b1c3', 'c8g4', 'd1d2', 'd8d7', 'h2h3', 'g4f3', 'g2f3',
    //  'c6d8', 'a2a3', 'd8e6', 'c4b3', 'c7c6', 'g5e3', 'd6d5', 'e4d5', 'c6d5',
    //  'd3d4', 'e5d4', 'e3d4', 'e6d4', 'd2d4', 'd7e6', 'd4e3', 'e6e3', 'f2e3',
    //  'a8d8', 'e1f2', 'e7c5', 'h1e1', 'e8e7'],

    ['f6g4', 'f3d4', 'd7c5', 'd3f5', 'g4e5', 'f5c2', 'f8f7', 'c1f4', 'd6b8', 'b1d1',
     'e5c4', 'f4c1', 'c5e4', 'f2f3', 'e4c5', 'f1e1', 'f7e7', 'e1e7', 'e8e7', 'g2f2',
     'g7g6', 'b2b3', 'c4e5', 'h2h4', 'c5e6', 'h4h5', 'b8a7', 'h5g6', 'h7g6', 'f2g2',
     'e6d4', 'c3d4', 'e5g4', 'c2g6', 'e7e2', 'g2g1', 'g8g7', 'f3g4', 'g7g6', 'c1f4'],

    // ['d2d4', 'd7d5', 'c2c4', 'e7e6', 'g1f3', 'g8f6', 'b1c3', 'd5c4', 'e2e4', 'f8b4',
    //  'f1c4', 'f6e4', 'c1d2', 'e4d2', 'd1d2', 'b4c3', 'd2c3', 'b8d7', 'f3e5', 'd7e5',
    //  'd4e5', 'b7b6', 'c3d3', 'd8d3', 'c4d3', 'c8b7', 'e1e2', 'e8e7', 'a1c1', 'c7c5', 
    //  'b2b4', 'b7g2', 'h1g1', 'g2b7', 'b4c5', 'b7d5'],

    ['d7e5', 'g3e3', 'e5d7', 'a1e1', 'd7f6', 'a4c5', 'f6d7', 'e3h3', 'h7h5', 'c5d3',
     'd7f6', 'h3e3', 'g8g7', 'h2h3', 'c6c5', 'd3f4', 'd5d4', 'h4g3', 'c7d7', 'e3e6',
     'd6b8', 'e6e5', 'b8b2', 'c3d4', 'c5d4', 'e5e7', 'd7e7', 'e1e7', 'b2b1', 'g1h2',
     'g7g8', 'e7e5', 'f8e8', 'f4d5', 'e8e5', 'd5f6', 'g8g7', 'g3e5', 'b1f5'],

    // ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'f1c4', 'g8f6', 'd2d3', 'd7d6', 'c1g5', 'f8e7', 
    //  'b1c3', 'c8g4', 'h2h3', 'g4f3', 'd1f3', 'c6d4', 'f3d1', 'c7c6', 'a2a4', 'd8b6', 
    //  'g5d2', 'b6c7', 'c3e2', 'd4e2', 'd1e2', 'a8d8', 'a1d1', 'd6d5', 'c4b3', 'd5e4', 
    //  'd3e4', 'c6c5', 'd2c3', 'd8d1', 'e1d1', 'c7d6', 'd1c1', 'h7h6', 'e2d3', 'd6d3', 'c2d3'],

    ['f3e2', 'd1e2', 'e3h6', 'e2g2', 'c6d4', 'h3g4', 'd4c2', 'g4f3', 'c2e3', 'e1e3',
     'h6e3', 'g2f2', 'a8c8', 'f2e3', 'e8e3', 'f1f2', 'e3c3', 'a2a4', 'c3c2', 'f2e3', 
     'd5d4', 'e3d3', 'c8c3', 'd3d4', 'c3c7', 'd2f1', 'c7d7', 'f3d5', 'f6f5', 'a1d1', 
     'g8g7', 'h2h4', 'c2e2', 'f1e3', 'e2b2', 'd1d3', 'h7h5', 'd4c4', 'b2f2', 'd3d4'],

    // ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'f1c4', 'g8f6', 'd2d3', 'd7d6', 'c1g5', 'f8e7',
    //  'b1c3', 'c8g4', 'd1d2', 'd8d7', 'h2h3', 'g4f3', 'g2f3', 'c6d8', 'a2a3', 'd8e6', 
    //  'c4b3', 'c7c6', 'g5e3', 'd6d5', 'e4d5', 'c6d5', 'd3d4', 'e5d4', 'e3d4', 'e6d4',
    //  'd2d4', 'd7e6', 'd4e3', 'e6e3', 'f2e3','a8d8', 'e1f2', 'e7c5', 'h1e1', 'e8e7'], // 1

    ['d5c4', 'c1c4', 'd8d5', 'e1c1', 'f8d6', 'a3b2', 'c6e7', 'c4c2', 'a8b8', 'd3d4', 
     'e5d4', 'f3d4', 'a7a5', 'd4f3', 'h7h6', 'c5a4', 'c8a6', 'a4c3', 'd5c5', 'b2a3',
     'c5c6', 'a3d6', 'c6d6', 'c3a4', 'e7d5', 'c2c6', 'd6c6', 'c1c6', 'd5b4', 'c6d6',
     'a6b7', 'a4c3', 'b8e8', 'h2h4', 'f5f4', 'd6d4', 'e8f8', 'f3e5', 'f8e8', 'e5c4'],

    // ['d2d4', 'd7d5', 'c2c4', 'e7e6', 'g1f3', 'g8f6', 'b1c3', 'd5c4', 'e2e4', 'f8b4',
    //  'f1c4', 'f6e4', 'c1d2', 'e4d2', 'd1d2', 'b4c3', 'd2c3', 'b8d7', 'f3e5', 'd7e5', 
    //  'd4e5', 'b7b6', 'c3d3', 'd8d3', 'c4d3', 'c8b7', 'e1e2', 'e8e7', 'a1c1', 'c7c5', 
    //  'b2b4', 'b7g2', 'h1g1', 'g2b7', 'b4c5', 'b7d5'], //2
    
    ['f8e8', 'h6g5', 'h4h5', 'e3g3', 'g8h7', 'f5e6', 'e8e6', 'h3h4', 'f7f6', 'g5e3', 
     'd4e2', 'b2e2', 'h5e2', 'g2h3', 'b8g8', 'e3g5', 'e6e7', 'h3f5', 'h7h8', 'f5g4',
     'e2c2', 'g4d7', 'f6g5', 'h4g5', 'e7d7', 'g5g6', 'd7h7'],

    // ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'f1c4', 'g8f6', 'd2d3', 'd7d6', 'c1g5', 'f8e7', 
    //  'b1c3', 'c8g4', 'h2h3', 'g4f3', 'd1f3', 'c6d4', 'f3d1', 'c7c6', 'a2a4', 'd8b6', 
    //  'g5d2', 'b6c7', 'c3e2', 'd4e2', 'd1e2', 'a8d8', 'a1d1', 'd6d5', 'c4b3', 'd5e4', 
    //  'd3e4', 'c6c5', 'd2c3', 'd8d1', 'e1d1', 'c7d6', 'd1c1', 'h7h6', 'e2d3', 'd6d3', 
    //  'c2d3'], //3

    ['f8e8', 'b4d6', 'c8a6', 'e1c3', 'a8d8', 'c4c5', 'g7h6', 'g2g3', 'd8d7', 'b3d4',
     'd7f7', 'd1b1', 'h5h4', 'c3d3', 'a6a4', 'a2a3', 'a7a5', 'f1d1', 'h4g3', 'h2g3',
     'h6f4', 'g3f4', 'g6f5', 'd3b3', 'a4b3', 'b1b3', 'a5a4', 'b3b4', 'f7h7', 'd1f1',
     'f4h3', 'g1g2', 'h3g5', 'd4c6', 'g5e4', 'b4e4', 'd5e4', 'c6d4', 'h7h3', 'c5c6'],
    
    // ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'f1c4', 'g8f6', 'd2d3', 'd7d6', 'c1g5', 'f8e7', 
    //  'b1c3', 'c8g4', 'd1d2', 'd8d7', 'h2h3', 'g4f3', 'g2f3', 'c6d8', 'a2a3', 'd8e6', 
    //  'c4b3', 'c7c6', 'g5e3', 'd6d5', 'e4d5', 'c6d5', 'd3d4', 'e5d4', 'e3d4', 'e6d4', 
    //  'd2d4', 'd7e6', 'd4e3', 'e6e3', 'f2e3', 'a8d8', 'e1f2', 'e7c5', 'h1e1', 'e8e7'] //1

    ['f3e3', 'h3g4', 'e3f2', 'b4e4', 'f2g3', 'g4e2', 'g3f2', 'e2d1', 'f2g3', 'e4d4',
     'g3f2', 'c2d3', 'f2g3', 'd1b3', 'g3f2', 'b3c4', 'f2f3', 'd3c3', 'g5g4', 'c3d2',
     'g4g3', 'c4e2', 'f3f2', 'd4f4', 'f2g1', 'e2f3', 'c5a5', 'f3e4', 'g3g2', 'f4g4',
     'a5a2', 'd2e3', 'g1h2', 'g4g2'],
    
  ];

var delay = 1000;

function autoMove(moves, boardId) {
  var currentIndex = 0;
  // Lưu lại trạng thái ban đầu của bàn cờ
  var initialPosition = document.getElementById(boardId).innerHTML; 

  function moveNext() {
    if (currentIndex < moves.length) {
      var move = moves[currentIndex];

      var sourceId = move.substring(0, 2);
      var targetId = move.substring(2, 4);

      var piece = document.getElementById(boardId).querySelector('#' + sourceId);
      var target = document.getElementById(boardId).querySelector('#' + targetId);

      var pieceImg = piece.querySelector('img');
      target.innerHTML = piece.innerHTML;
      piece.innerHTML = '';

      currentIndex++;

      var randomDelay = Math.floor(Math.random() * 3000) + 1500;

      setTimeout(moveNext, randomDelay);
    } 
    // else {
    //   // Khi kết thúc ván cờ, khôi phục lại trạng thái ban đầu của bàn cờ
    //   document.getElementById(boardId).innerHTML = initialPosition;
    //   setTimeout(function() {
    //     autoMove(moves, boardId);
    //   }, delay);
    // }
  }

  moveNext();
}

autoMove(games[0], 'board1');
autoMove(games[1], 'board2');
autoMove(games[2], 'board3');
autoMove(games[3], 'board4');
autoMove(games[4], 'board5');
autoMove(games[5], 'board6');
autoMove(games[6], 'board7');
