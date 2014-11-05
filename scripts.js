// Menu button element */
var menu = document.getElementById('menu');

// Header element
var header = document.getElementById('masterHeader');

// Nav element
var nav = document.getElementsByTagName('nav')[0]

// Calculates nav height, adds - and px
var height = "-" + nav.clientHeight + "px"

// Add negitive margin of nav's height to header
header.style.marginTop = height

// Toggle class function
function toggleClass(element, className){
    if (!element || !className){
        return;
    }
    
    var classString = element.className, nameIndex = classString.indexOf(className);
    if (nameIndex == -1) {
        classString += ' ' + className;
    }
    else {
        classString = classString.substr(0, nameIndex) + classString.substr(nameIndex+className.length);
    }
    element.className = classString;
}

// Toggles show class which overides the negitive margin
menu.onclick = function() {
    toggleClass(header, 'show');
};