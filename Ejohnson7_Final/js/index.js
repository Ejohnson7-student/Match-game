// Did a couple turorials for the match game with way less code, didnt want to turn in anything i found with the same framework so best friend suggested using a switch case
// Hehelped me with understanding how to use class id in my codes as part of the object.
// me represents div object of tile on html... == this
function flipme(me) {
	var flipCnt = document.getElementById('fCnt').value;
		flipCnt++;
				
	var f = document.querySelectorAll('.flipped').length;
	if (f > 1) {
    unflipTiles(); return false;}

	if (me.classList.contains('flippable')) {
		me.classList.remove('flippable');
		me.classList.add('flipped');
		if (me.classList.contains('red')) {
			me.classList.add('flippedRed');
		} else {
			if (me.classList.contains('green')) {
				me.classList.add('flippedGreen');
			} else {
				if (me.classList.contains('yellow')) {
					me.classList.add('flippedYellow');
				} else {
					me.classList.add('flippedBlue');
				}
			}
		}
    // unflips the tiles not matched
	} else {
		flipCnt--;
    me.classList.remove('flipped');
		me.classList.add('flippable');
		if (me.classList.contains('red')) {
			me.classList.remove('flippedRed');
		} else {
			if (me.classList.contains('green')) {
				me.classList.remove('flippedGreen');
			} else {
				if (me.classList.contains('yellow')) {
					me.classList.remove('flippedYellow');
				} else {
					me.classList.remove('flippedBlue');
				}
			}
		}
	}
				
	f = document.querySelectorAll('.flipped').length;
	if (f > 1) {checkMatches();}
				
	document.getElementById('flipCount').value = flipCnt;
	document.getElementById('fCnt').value = flipCnt;
}
			
function checkMatches() {
	var matchCnt = document.getElementById('mCnt').value;
	var m1 = document.querySelectorAll('.flipped')[0];
	var m2 = document.querySelectorAll('.flipped')[1];
		
  if ((m1.classList.contains('flippedRed') && m2.classList.contains('flippedRed')) || (m1.classList.contains('flippedGreen') && m2.classList.contains('flippedGreen')) || (m1.classList.contains('flippedBlue') && m2.classList.contains('flippedBlue')) || (m1.classList.contains('flippedYellow') && m2.classList.contains('flippedYellow'))) {
		m1.classList.add('matched');
		m2.classList.add('matched');
    m1.removeAttribute('onclick');
		m2.removeAttribute('onclick');
		m1.classList.remove('flipped');
		m2.classList.remove('flipped');
		matchCnt ++;
	}
				
	document.getElementById('matchCount').value = matchCnt;
	document.getElementById('mCnt').value = matchCnt;
}
			// GBYD are counts for assigning colors to tiles without uneven numbers
function setColors() {
	var g = 0;
	var b = 0;
	var y = 0;
	var d = 0;
	for (r = 1; r < 5; r++) {
		for (c = 1; c < 5; c++) {
      // sets for for row and column  Tile_11 = row 1 column 1
      var el = 'tile' + r + c;
			var thisEl = document.getElementById(el);
			var f = false;
			do {
        //
				var v = Math.floor(Math.random() * (5 - 1) + 1);
        // v= value of colors no more than 4 per board
				switch (v) {
					case 1:
						if (g < 4) {
							thisEl.classList.add('green');
							g++;
							f = true;
						} else {
							f = false;
						}
					break;
					case 2:
						if (b < 4) {
							thisEl.classList.add('blue');
							b++;
							f = true;
						} else {
							f = false;
						}
					break;
					case 3:
						if (y < 4) {
							thisEl.classList.add('yellow');
							y++;
							f = true;
						} else {
							f = false;
						}
					break;
					case 4:
						if (d < 4) {
							thisEl.classList.add('red');
							d++;
							f = true;
						} else {
							f = false;
						}
					break;
			
				}
        
			} while (f == false);
		}
	}
}
			// resets unmatched tiles
function unflipTiles() {
	console.log('unflipping');
	var m1 = document.querySelectorAll('.flipped')[0];
	var m2 = document.querySelectorAll('.flipped')[1];
	m1.classList.remove('flipped');
	m2.classList.remove('flipped');
	m1.classList.add('flippable');
	m2.classList.add('flippable');
	if (m1.classList.contains('red')) {
			m1.classList.remove('flippedRed');
		} else {
			if (m1.classList.contains('green')) {
				m1.classList.remove('flippedGreen');
			} else {
				if (m1.classList.contains('yellow')) {
					m1.classList.remove('flippedYellow');
				} else {
					m1.classList.remove('flippedBlue');
				}
			}
		}
		if (m2.classList.contains('red')) {
			m2.classList.remove('flippedRed');
		} else {
			if (m2.classList.contains('green')) {
				m2.classList.remove('flippedGreen');
			} else {
        if (m2.classList.contains('yellow')) {
					m2.classList.remove('flippedYellow');
				} else {
					m2.classList.remove('flippedBlue');
				}
			}
		}
}
			
   
   //reset button
function reloadPage() {
	document.getElementById('flipCount').value = 0;
	document.getElementById('fCnt').value = 0;
	document.getElementById('matchCount').value = 0;
	document.getElementById('mCnt').value = 0;
	location.reload();
}