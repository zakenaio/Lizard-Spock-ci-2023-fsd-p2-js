Lizard Spock JS Game. 

Initial ideas. 

Just an easy background image over the entire screen. 
Keeping the theme from my other work on HTML/CSS (found here) i decided 
to implement the same rounded borders. 

Just a big blob in the middle of the screen with all the content. 

Header Rock Paper Scissors Lizard Spock. 
A way to keep score. 
A promt for winner/looser/and who picked what. 
Clickable buttons for the different choices. 

That should be all. 
More to come here. 

JavaScript fundamentals for Lizard Spock. 

theGame() 
	Here lies the game. 
	Find what you can on make this work.
	rules / and how to implement. 
	Do NOT forget to quote sources and links. 
	
	RULES 
	https://www.wikihow.com/Play-Rock-Paper-Scissors-Lizard-Spock
	
	INSPO 
	https://stackoverflow.com/questions/22623331/rock-paper-scissors-lizard-spock-in-javascript
	https://learnersbucket.com/tutorials/js-projects/rock-paper-scissor-lizard-spock-game-in-javascript/
	https://codereview.stackexchange.com/questions/102057/rock-paper-scissors-lizard-and-spock
	
	FUNCTONS
	https://stackoverflow.com/questions/23849365/adding-scores-to-a-variable

score()
	How to keep score? 
	comp/player
		whoWins()
			player === cpmputer = tie
			if player *** && computer ** return/console you win. 
			else you lose. 
		i believe its somehing like this. 

playerScore = 0;
	computerScore = 0;
		if player win i++ ?? i = playerScore
		same but compScore. 

result()
	Here i want to show who picked what.
	computer picked **** you picked ****
	**** beats **** so comp win.

document. results, some inner/outerHTML here targeting the result div
	to make it appear? i guess thats the way to do it. 
	google it, find out. You have time. 

buttons()
	Here is where you make your choice.
	what to pick. Remember camelBack! 
	playerChoice : 	rock
			paper
			scissors
			lizard	
			spock. 

HTML fundamentals. 

The html should be relatively easy to whip up. 
again divs, i must use span for the scores, only way i can 
think of right now to make it change, if not a div and innerHTML-something. 
