class Carro {
    constructor(_row, _col) {
        this.row = _row;
        this.col = _col;
        this.p1 = "X";
        this.p2 = "O";
        this.emply = '';
        this.turn = this.p1;
        this.count1 = 0;
    }

    cell() {

    }

    creatBoard() {
        let str = '';
        for (let i = 0; i < this.row; i++) {
            str += "<tr>";
            for (let j = 0; j < this.col; j++) {
                str += "<td id='cell-" + i + "" + j + "' onclick='board.play(this)'></td>";
            }
            str += "</tr>";
        }
        return str;
    }

    play(td) {
        // var count1 = 0;
        if (td.innerHTML === this.emply) {
            if (turn === this.p1) {
                // if (this.count1 != 0) {
                //     board.checkWin(); 
                // }
                td.innerHTML = this.p1;
                this.count1++;
                board.check();
                // console.log(this.count1);
                turn = this.p2;
            } else {
                // if (this.count1 != 0) {
                // }
                td.innerHTML = this.p2;
                this.count1++;
                board.check();
                turn = this.p1;
            }
        }

    }
    // nhiều lúc test nó đánh toàn dấu x lúc toàn dấu o, do chuột double click hoặc là lag
    // nếu board checkcols hoặc row (win) ok rồi mà cho 2 cái vào check thì không chjay được
    // test thử gán từng hàm vào 
    check() {
        this.checkColS()
        this.checkWin()
    }

    //
    checkWin() {    
        let count = 1;
        for(let i =0; i< this.row; i++) {
            for (let j = 0; j < this.col; j++) {
            // console.log(i+'-'+j);
            // console.log(document.querySelector('#test').innerHTML)

            // đoạn này so sánh vị trí đó với rỗng, nếu rỗng thật thì đổi qua ô cạnh
                if ( document.getElementById('cell-'+i+j).innerHTML == '') {
                    // alert('rỗng')
                    continue;
                } else {
                    if (document.getElementById('cell-' + i + j).innerHTML === document.getElementById('cell-' + i + (j + 1)).innerHTML) {
                        count++;
                        // console.log(count)
                    }else {
                        count = 1;
                    }

                    if (count >= 5) {
                        if(turn == this.p1)
                            alert("Người chơi P1 win");
                        esle 
                            alert("Người chơi p2 win");
                        // khi win thì sẽ dừng cái hành động chuột chưa hoạt động được
                        // document.getElementById(board).removeEventListener(onclick, this.play);
                        break;

                    }
                }
            }
        }
        
    }

    checkColS() { 
        let count = 1;
        for(let j =0; j< this.row; j++) {
            for (let i = 0; i < this.col; i++) {

                if ( document.getElementById('cell-'+i+j).innerHTML == '') {
                    continue;
                } else { // vì check theo cột nên phải cộng i và giữ j ngang
                    if (document.getElementById('cell-' + i + j).innerHTML === document.getElementById('cell-' + (i+1) + j).innerHTML) {
                        count++;
                    }else {
                        count = 1;
                    }
                    if (count >= 5) {
                        if(turn == this.p1)
                            alert("Người chơi P1 win");
                        esle 
                            alert("Người chơi p2 win");
                        break;
                    }
                }
            }
        }
    }
//chéo
// chưa tìm được phương án
//nên cho hàm check trả về, nếu mà nó trả true thì win, sẽ rút ngắn lại được khi viết 3 dòng cuối

// // thử với check chéo{
//     for i0
//         for j0
//             nesu rỗng continue;
//             else so sánh tại ị,j và i+1, j+1
//                 nếu giống nhau thì {
//                     nếu mà cái i+1 và J +1 nhỏ hơn row col
//                         i_temp và jTemp lần lượt bằng i j
//                     ngược lại hủy 
//                         lấy i_temp và J_temp gán lại lại và Cộng 1
//                 ngược lại 
//                     thôi lặp tiếp
//                 }
// }
    checkCross() {
        let count = 1;
        for(let j =0; j< this.row; j++) {
            for (let i = 0; i < this.col; i++) {
            if ( document.getElementById('cell-'+i+j).innerHTML == '') {
                continue;
            } else {
                if (document.getElementById('cell-' + i + j).innerHTML === document.getElementById('cell-' + (i+1) + j).innerHTML) {
                    count++;
                }else {
                    count = 1;
                }
                if (count >= 5) {
                    if(turn == this.p1)
                            alert("Người chơi P1 win");
                        esle 
                            alert("Người chơi p2 win");
                    break;
                }
            }
        }
        }
    }

}