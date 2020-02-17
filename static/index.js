document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('header').style.height = window.innerHeight + "px";
    document.querySelector('#profile').style.height = (window.innerHeight - 110) + "px";

    //the line seperators width
    // document.querySelector('.leftLong').style.width = (window.innerWidth * 0.2) + "px";
    // document.querySelector('.leftShort').style.width = (window.innerWidth * 0.1) + "px";
    // document.querySelector('.leftMiddle').style.width = (window.innerWidth * 0.15) + "px";
    // document.querySelector('.nearWork').style.width = (window.innerWidth * 0.12) + "px";
    document.querySelector('.rightLong').style.width = (window.innerWidth * 0.25) + "px";
    // document.querySelector('.rightShort').style.width = (window.innerWidth * 0.2) + "px";

    const allTab = document.querySelectorAll('.tab');

    allTab.forEach(clickedTab => {
        clickedTab.addEventListener('mouseover', () => {
            //removing the active class
            allTab.forEach(tab => {
                tab.classList.remove('active');
            });

            //adding the active class to the tab being clicked
            clickedTab.classList.add('active');
        });

    });

    document.querySelector('.tabs').addEventListener('mouseout', () => {
        allTab.forEach(tab => {
            tab.classList.remove('active');
        });
    });
});

window.addEventListener('resize', () => {
    document.querySelector('header').style.height = window.innerHeight + "px";
    document.querySelector('#profile').style.height = (window.innerHeight - 110) + "px";
});