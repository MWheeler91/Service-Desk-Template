// 1Queue Javascript files -- Where the magic happens //

// Update the version date here:
var versionDate = "12.5.2019";
document.getElementById("versionDate").innerHTML = versionDate;

$(document).ready(function () {
    
    $('.tabcontent').each(function (e) {
        if ($(this).attr('id') != 'frontface') {
            $(this).hide();
        }
    });

});

// Script for the tabs:
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        $(tabcontent[i]).hide();
    }

    $(cityName).show();


    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }
    document.getElementById(cityName).style.display = "inline-block";
    evt.currentTarget.className += "active";

    $("textarea").each(function (textarea) {
        $(this).height($(this)[0].scrollHeight);
    });
}

function quickCopy(myScript) {
    // Get the text field
    var copyText = document.getElementById(myScript);

    // Select the text field
    copyText.select();

    // Copy the text inside the text field
    document.execCommand("copy");
}

function sortListDir() {
    var list, i, switching, b, shouldSwitch, dir, switchcount = 0;
    list = document.getElementById("id01");
    switching = true;
    // Setthe sorting direction to ascending:
    dir = "asc";
    // Make aloop that will continue until no switching has been done:
    while (switching) {
        // Start by saying: no switching is done:
        switching = false;
        b = list.getElementsByTagName("LI");
        // Loop through all list-items:
        for (i = 0; i < (b.length - 1) ; i++) {
            // Start by saying there shouldbe no switching:
            shouldSwitch = false;
            // Check if the next item should switch place with the current item, based on the sorting direction (asc or desc):
            if (dir == "asc") {
                if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
                    // If next item is alphabetically lower than current item, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            }
            else if (dir == "desc") {
                if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) {
                    // If next item is alphabetically higher than current item, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            // If a switch has been marked, make the switch and mark that a switch has been done:
            b[i].parentNode.insertBefore(b[i + 1], b[i]);
            switching = true;
            // Each time a switch isdone, increase switchcount by 1:
            switchcount++;
        }
        else {
            // If noswitching has been done AND the direction is "asc", set the direction to "desc" and run the while loop again.
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}

//Current unused Code:
// function addScript() {
//   /* Insert Code for a script */

// }

// function delScript() {
//   /* Insert Code for removing a script */
//   // onclick window.alert("Are you sure you want to delete this line?")
// }