
const topNav = document.querySelector('.navInner #topNav');
const topNavPopUp = document.querySelector('#topNavPopUp');
const overlay = document.querySelector('#overlay'); 
const body = document.querySelector('body');
const threeDot = document.querySelector('#threeDots');
const backupandRestore = document.querySelector('#backupandRestore');
const bottomArrow = document.querySelector('#bottom-arrow img');
const bottomNav = document.querySelector('#bottomNav');
const category = document.querySelector('#category');
const searchBox = document.querySelector('#searchBox');
const searchInnerButton = document.querySelector('#searchInnerButton');
const leftArrow = document.querySelector('#leftArrow');
const addNote = document.querySelector('#addNote');
const addNoteAndCheck = document.querySelector('#addNoteAndCheck');
const openNotePadd = document.querySelector('#noteAdder');

// top nav js
topNav.addEventListener(('click'), () => {
    overlay.classList.add('overlay')
    topNavPopUp.classList.add('topNavBlock');
});

overlay.addEventListener('click', () => {
    if(topNavPopUp.classList.contains('topNavBlock') ||  backupandRestore.classList.contains('backupBlock') || category.classList.contains('bottomCategory')){
        topNavPopUp.classList.remove('topNavBlock');
        overlay.classList.remove('overlay');
        backupandRestore.classList.remove('backupBlock');
        category.classList.remove('bottomCategory');  
    }
    if( addNoteAndCheck.classList.contains('noteCheckBlock')){
        addNoteAndCheck.classList.remove('noteCheckBlock');
        overlay.classList.remove('overlay');
    }
})
// end top nav

// three dots js and backup restore
threeDot.addEventListener(('click'), () => {
    overlay.classList.toggle('overlay')
    backupandRestore.classList.toggle('backupBlock');
});

// three dots js and backup restore
bottomNav.addEventListener(('click'), () => {
    bottomArrow.classList.remove('rotateIcon');
    category.classList.add('bottomCategory');
});
// bottom arrow
bottomArrow.addEventListener('click', () => {
    if(category.classList.contains('bottomCategory')){;
        bottomArrow.classList.toggle('rotateIcon');
        overlay.classList.remove('overlay');
        category.classList.remove('bottomCategory');
    }
});

// search input
searchInnerButton.addEventListener('click', () => {
    searchBox.classList.add('searchRight');
    overlay.classList.add('overlay');
});
// left arrow
leftArrow.addEventListener('click', () => {
    searchBox.classList.remove('searchRight');
    overlay.classList.remove('overlay');
});

// add note
addNote.addEventListener('click', () => {
    addNoteAndCheck.classList.add('noteCheckBlock');
    overlay.classList.add('overlay');
});


// notepad adder
openNotePadd.addEventListener('click', () => {
    window.open('../note.html', target='_blank');
    addNoteAndCheck.classList.remove('noteCheckBlock');
    overlay.classList.remove('overlay');
});

