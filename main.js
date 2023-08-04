function toggleHidden(hiddenElement) {
    let currentState = hiddenElement.style.display;
    if (currentState != 'none' && currentState != '') {
        hiddenElement.style.display = 'none';
    } else {
        hiddenElement.style.display = 'inline-block';
        clickCount++;
        hiddenElement.style.order = clickCount;
    }
}

// Make the HOME button hide everything
document.querySelector('#homeNav').addEventListener('click', () => {
document.querySelectorAll(".hidden").forEach((item) => {
    if (item.style.display != 'none') {
        item.style.display = 'none';
    }})});

// make the other buttons toggle visibility
document.querySelector('#aboutNav').addEventListener('click', () => toggleHidden(document.querySelector('#about')));
document.querySelector('#contactNav').addEventListener('click', () => toggleHidden(document.querySelector('#contact')));
document.querySelector('#estatePlanningNav').addEventListener('click', () => toggleHidden(document.querySelector('#estatePlanning')));
document.querySelector('#litigationNav').addEventListener('click', () => toggleHidden(document.querySelector('#litigation')));
document.querySelector('#landlordTenantNav').addEventListener('click', () => toggleHidden(document.querySelector('#landlordTenant')));
