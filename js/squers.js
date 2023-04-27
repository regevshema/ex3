let size = 80;
let count = 0;
let letters = ["A", "B", "C"];
let letterIndex = 0;
let sizes = [80, 100, 120, 140, 160, 180]
let openedSqueres = [];
const squareSection = document.getElementById('squers');

function unShowSqueres(square1, square2) {
    console.log(square1.innerHTML);
    square1.firstElementChild.style.display = "none";
    square2.firstElementChild.style.display = 'none';

}

function upSquare() {

    const blackSquare = document.querySelector(".blackSquare");
    const upperSquare = document.getElementsByClassName("upperSquare")[0];

    upperSquare.addEventListener('click', () => {
        if (count < 2) {

            for (i = 0; i < 3; i++) {


                let square = document.createElement('div');
                square.className = `${size}`;
                square.style.width = `${size}px`;
                square.style.height = `${size}px`;

                let spanLetter = document.createElement('span');
                spanLetter.innerHTML = letters[letterIndex];
                spanLetter.style.display = 'none';
                square.appendChild(spanLetter);

                square.firstElementChild.style.color = "white";
                square.firstElementChild.style.fontSize = `${sizes[i] / 2}px`;
                square.addEventListener('click', function () {
                    square.firstChild.style.display = 'inline';
                    openedSqueres.unshift(square.className);
                    if (openedSqueres.length === 2) {
                        let square1 = document.getElementsByClassName(openedSqueres[0])[0];
                        let square2 = document.getElementsByClassName(openedSqueres[1])[0];
                        if (square1.firstElementChild.innerHTML !== square2.firstElementChild.innerHTML) {
                            openedSqueres = [];

                            setTimeout(function () {
                                unShowSqueres(square1, square2);
                            }, 4000)

                        } else {
                            openedSqueres = [];
                        }

                    }
                })
                console.log(square.innerHTML);
                letterIndex++;
                squareSection.appendChild(square);
                size += 20;
            }
            letterIndex = 0;
            // blackSquare.insertAdjacentHTML("beforeend", divs);
            count++;


        }

    });

}




upSquare();

