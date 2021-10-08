function addUser(){
	player1_name = document.getElementById("player1_name_input").value;
	player2_name = document.getElementById("player2_name_input").value;
		
		localStorage.setItem("player1_name", player1_name);
		localStorage.setItem("player2_name", player2_name);

		window.location = "game_page.html";
}

function send(){
	num1=document.getElementById("word").value;
	num2=document.getElementById("word2").value;
	answer=parseInt(num1)*parseInt(num2);
	question_word="<h4 id='word_display'>Q. " + num1 + "X" + num2 + "</h4>";
    input_box="<br><br>Answers : <input type='text' id='input_check_box'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
	row=question_word,input_box,check_button;
	document.getElementById("output").innerHTML=row;
}
question_turn = "player_1";
answer_turn = "player_2";

function check(){
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log("lowercase word - " + answer);
    if(answer == word){
        if(answer_turn == player1){
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score
        }
        else{
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if(question_turn == player_1){
        question_turn = player2;
        document.getElementById("player_question").innerHTML="question turn - " + player2_name;
    }
    else{
        question_turn = player_1;
        document.getElementById("player_question").innerHTML="question turn - " + player1_name;                                                       
    }

    if(answer_turn == player_1){
        answer_turn = player_2;
        document.getElementById("player_answer").innerHTML="answer turn - " + player2_name;
    }
    else{
        answer_turn = player_1;
        document.getElementById("player_answer").innerHTML="answer turn - " + player1_name;
    }
    document.getElementById("output").innerHTML="";
}