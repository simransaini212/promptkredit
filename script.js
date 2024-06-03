document.addEventListener('DOMContentLoaded', () => {
    const divs = document.querySelectorAll('.clickable-div');

    divs.forEach(div => {
        div.addEventListener('click', () => {
           
            divs.forEach(d => d.classList.remove('active'));
         
            div.classList.add('active');
        });
    });
});
let previouslySelectedDurationBox = null;
let previouslySelectedPurposeBox = null;
let previouslySelectedGenderBox = null;

function selectDuration(box) {

    if (previouslySelectedDurationBox) {
        previouslySelectedDurationBox.classList.remove('selected');
    }
    
    box.classList.add('selected');

    previouslySelectedDurationBox = box;
}

function selectPurpose(box) {
    if (previouslySelectedPurposeBox) {
        previouslySelectedPurposeBox.classList.remove('selected');
    }

    box.classList.add('selected');
    
    previouslySelectedPurposeBox = box;
}

function selectGender(box) {
    if (previouslySelectedGenderBox) {
        previouslySelectedGenderBox.classList.remove('selected');
    }
    
    box.classList.add('selected');
    
    previouslySelectedGenderBox = box;
}
function toggleMenu() {
    const menu = document.querySelector('.menu ul');
    const navToggle = document.getElementById('nav-toggle');
    menu.classList.toggle('show');
    navToggle.classList.toggle('active');
}

(function($) {
  $(function() {
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    $('html').click(function() {
      $('.nav-dropdown').hide();
    });
  });
})(jQuery);

  