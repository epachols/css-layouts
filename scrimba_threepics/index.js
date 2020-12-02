/* Write your code here 👇 */
const first = document.getElementsByClassName("first")[0];
const second = document.getElementsByClassName("second")[0];
const third = document.getElementsByClassName("third")[0];
const panelWindow = document.getElementsByClassName("panels")[0];

window.addEventListener("DOMContentLoaded", () => {

    panelWindow.addEventListener("click", (e)=>{
        e.target.classList.toggle("expanded");
        
        for (let i=0; i<[...panelWindow.children].length; i++) {
            if (panelWindow.children[i].classList.contains("expanded")) {
                console.log(" \n this one got it");
            }
        }
            
    });
    
});

/*

STRETCH GOALS:

1) Turn it into your own gallery, portfolio, showcase, diary, travel notes, pet photo album.
2) Choose to make it vertical, horizontal, diagonal (why not?). Experiment! 
3) Make it so more than one panel can be expanded at a time! The user should be able to click on all panels and they are all equally spaced. 

Example gif:

https://docs.google.com/presentation/d/e/2PACX-1vQabQ1b7iLGqmB_MyTaKl85CSiQVGkrYQviaef03cZZOi59IEwUahS0fDqY0JkoOjY_aaE_PgTlN6_6/pub?start=false&loop=false&delayms=3000

*/