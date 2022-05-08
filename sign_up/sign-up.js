const dropdownToggle = document.querySelector('#drop-down');
const menu = document.querySelector('#menu')
const menuItems = document.querySelectorAll('input[type="checkbox"]')
const choiceInput = document.querySelector('#choice');
const choiceContent = document.querySelector('#choice_content');
const techTrackPlaceholder = document.querySelector('#tech_track_placeholder')

const techTracks = [
    { isChecked: false, track: 'Android Development' },
    { isChecked: false, track: 'Cloud Computing' },
    { isChecked: false, track: 'Copy writing' },
    { isChecked: false, track: 'Data science' },
    { isChecked: false, track: 'Graphics Design' },
    { isChecked: false, track: 'Machine Learning' },
    { isChecked: false, track: 'Software Engineering' },
    { isChecked: false, track: 'User experience design' },
    { isChecked: false, track: 'Web Development' },
]

window.addEventListener('DOMContentLoaded', (event) => {

});

dropdownToggle.addEventListener('click', () => {
    menu.classList.toggle('active')
})

function updateMenuItemUi() {
    menu.innerHTML = ''
    techTracks.forEach((choice, index) => {
        const element = createMenuItem(choice)
        const menuItem = document.createElement('div')
        menuItem.className = "menu_item"
        menuItem.id = `menu_item_${index}`
        menuItem.innerHTML = element;
        menuItem.addEventListener('click', () => {
            techTracks[index].isChecked = menuItem.firstChild.checked;
            updateUi(techTracks[index], index)
        })
        menu.append(menuItem)
    })
}

updateMenuItemUi()



function createMenuItem(choice) {
    return `<input type="checkbox" /><span>${choice.track}</span>`
}

function createChoiceItem(index, choice) {
    return `<button type="button" id="cancel-btn-${index}" class="cancel_btn"><img src="../assets/cancel.svg" /></button>
    <span>${choice}</span>`
}

function updateUi(item, index) {
    if (item.isChecked) {
        const choiceItem = document.createElement('div')
        choiceItem.className = "choice_item"
        choiceItem.id = `choice_item_${index}`
        choiceItem.innerHTML = createChoiceItem(index, item.track)
        choiceContent.prepend(choiceItem)
        const cancelButton = document.querySelector(`#cancel-btn-${index}`)
        cancelButton.addEventListener('click', () => {
            choiceContent.removeChild(choiceItem)
            if (menu.classList.contains('active')) menu.classList.remove('active')
            techTracks[index].isChecked = false;
            updateTechTrack()
            updateMenuItemUi()
        })
        if (!techTrackPlaceholder.classList.contains('active')) {
            techTrackPlaceholder.classList.add('active')
        }
    } else {
        const choiceItem = document.getElementById(`choice_item_${index}`)
        choiceContent.removeChild(choiceItem)
        updateTechTrack()
    }
}

function updateTechTrack() {
    let isAllUnchecked = false;
    for (let i = 0; i < techTracks.length; i++) {
        if (techTracks[i].isChecked) {
            isAllUnchecked = isChecked;
            break;
        }
    }
    if (!isAllUnchecked) {
        techTrackPlaceholder.classList.remove('active')
    }
}

