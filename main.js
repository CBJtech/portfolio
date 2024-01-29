const burger = document.querySelector('.hamburger-label');
const nav = document.querySelector('nav');

burger.onclick = function(){
  
  if (window.getComputedStyle(nav).display === 'none') {
    nav.style.display  = 'block';
  } else {
  nav.style.display = ''
  }
}



 

// Hiding the navbar at a certain height

  

window.addEventListener('scroll', function() {
  const scrollY = window.scrollY;
  const heightInRem = 7; // this value can be used to adjust the height of the navbar
  const heightInPixels = heightInRem * parseFloat(getComputedStyle(document.documentElement).fontSize);

  if (scrollY > heightInPixels) {
    nav.style.display = 'none';
  } else {
    nav.style.display = 'block';
  }
});

// form
document.querySelector('form').onsubmit = () => {
  return false
}


// draggable div
function sideNav(){
let offsetX, offsetY, isDragging = false;

    const draggableDiv = document.getElementById('myDiv');

    draggableDiv.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - draggableDiv.getBoundingClientRect().left;
        offsetY = e.clientY - draggableDiv.getBoundingClientRect().top;
        draggableDiv.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            const x = e.clientX - offsetX;
            const y = e.clientY - offsetY;

            draggableDiv.style.left = `${x}px`;
            draggableDiv.style.top = `${y}px`;
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        draggableDiv.style.cursor = 'grab';
    });

  }

  sideNav();

   

      // CLASSIFYING MY SKILLSETS
        function skills(){
          const softSkills = document.querySelectorAll('#softSkills');
          const techSkills = document.querySelectorAll('#techSkills');
          const All = document.querySelector('#All');
          const techStack = document.querySelector('#techStack');
          const SoftStack = document.querySelector('#SoftStack');

          // TECH SKILLS
          techStack.addEventListener('click', function(){
            softSkills.forEach(function(softSkill){
            softSkill.style.display = 'none'
           
            });
            techSkills.forEach(function(techSkill){
              techSkill.style.display = 'block'
            })
          });

          // SOFT SKILLS
          SoftStack.addEventListener('click', function(){
            techSkills.forEach(function(techSkill){
             techSkill.style.display = 'none';

            })
            softSkills.forEach(function(softSkill){
              softSkill.style.display = 'block'
            })
          })
          // ALL SKILLS
          const allSkills = document.querySelectorAll('.technical1');
          All.addEventListener('click', function(){
            allSkills.forEach(function(allSkill){
              allSkill.style.display = 'block'
            })
          })
        }
        skills();

        //NAVFLEX
function navFlex(){
/* const navFlex = document.getElementById('navDisplay');
 *//* const scrollY = window.scrollY;
const heightInRem = 3; // this value can be used to adjust the height of the navbar
const heightInPixels = heightInRem * parseFloat(getComputedStyle(document.documentElement).fontSize);

 document.addEventListener('scroll', function(){
  if (scrollY > heightInPixels) {
    navFlex.style.display = 'block';
  } else {
    navFlex.style.display = 'none'
  }
 })
 */

 /* let prevScrollPos = window.pageYOffset;
let isHeaderHidden = false;

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        // Scrolling up
        document.querySelector('#navDisplay').style.display = 'none';
        isHeaderHidden = false;
    } else {
        // Scrolling down
        if (!isHeaderHidden) {
            setTimeout(function() {
                document.querySelector('#navDisplay').style.display = 'flex';
                isHeaderHidden = true;
            }, 200); // Adjust the delay (in milliseconds) as needed
        }
    }

    prevScrollPos = currentScrollPos;
};
 */


window.addEventListener('scroll', function() {
  const scrollY = window.scrollY;
  const navVertical = document.querySelector('#navDisplay')
  const heightInRem = 39; // this value can be used to adjust the height of the navbar
  const heightInPixels = heightInRem * parseFloat(getComputedStyle(document.documentElement).fontSize);

  if (scrollY > heightInPixels) {
    navVertical.style.display = 'flex';
  } else {
    navVertical.style.display = 'none';
  }
});



};

navFlex();