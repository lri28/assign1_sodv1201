/**
* @name: Assignment1
* @Course Code: SODV1201
* @class: Software Development Diploma program.
* @author: Leona Rose Ilao.
*/

// To get the current year
document.getElementById("currentYear").innerText = new Date().getFullYear();

// Function to get the image name
setTimeout(function(){
    var imgElem = document.querySelector(".self-img");
    var imgName = imgElem.src.split("/").pop().split(".")[0];
    document.getElementById("imageName").innerHTML = imgName.toUpperCase();
    document.getElementById("selfimg").style.opacity = 1;
}, 10000);


// Question No. 3
var msg = document.getElementById("grademsg");

// Function to convert a numeric grade to a letter grade with color-coded messages
function convertgrade(){

    // Get the numeric grade value from the input element with id "gradevalue"
    var grdVal = parseFloat(document.getElementById("gradevalue").value);

    // Check if the entered value is not a number
    if(isNaN(grdVal)){
        msg.innerText = "Please enter a number only!";
        msg.style.color = "red";
    } else {

        // Switch statement to determine the letter grade based on the numeric value
        switch(true) {
            case grdVal < 0:
                msg.innerText = "Please enter non-negative number!";
                msg.style.color = "red";
                break;
            case grdVal > 100:
                msg.innerText = "Please enter a number below 101.";
                msg.style.color = "red";
                break;
            case grdVal >= 90:
                msg.innerText = "Your grade is: A";
                msg.style.color = "#304674";
                break;
            case grdVal >= 80:
                msg.innerText = "Your grade is: B";
                msg.style.color = "#304674";
                break;
            case grdVal >= 70:
                msg.innerText = "Your grade is: C";
                msg.style.color = "#98bad5";
                break;
            case grdVal >= 50:
                msg.innerText = "Your grade is: D";
                msg.style.color = "orange";
                break;
            case grdVal <= 50:
                msg.innerText = "Your grade is: F";
                msg.style.color = "red";
                break;
        }
    }
}


// Question No. 4
 var dataset = [
    {
    "id": "4804", 
    "name": "Brielle Williamson", 
    "position": "Integration Specialist", 
    "Location": "New York", 
    "joining date": "2012/12/02", 
    "salary": 372000
    },
    {
    "id": "9608",
    "name": "Herrod Chandler", 
    "position": "Sales Assistant", 
    "Location": "San Francisco",  
    "joining date": "2012/08/06", 
    "salary": 137500
    },
    {
    "id": "6200",
    "name": "Rhona Davidson", 
    "position": "Integration Specialist", 
    "Location": "Tokyo",  
    "joining date": "2010/10/14", 
    "salary": 327900
    },
    {
    "id": "2360",
    "name": "Colleen Hurs", 
    "position": "Javascript Developer", 
    "Location": "San Francisco",  
    "joining date": "2009/09/15", 
    "salary": 205500
    },    
    {
    "id": "1667",
    "name": "Sonya Fros", 
    "position": "Software Engineer", 
    "Location": "Edinburgh",  
    "joining date": "2008/12/13", 
    "salary": 103600
    },
    {
    "id": "3814",
    "name": "Jena Gaines", 
    "position": "Office Manager", 
    "Location": "London",  
    "joining date": "2008/12/19", 
    "salary": 90560
    },  
    {
    "id": "9497",
    "name": "Quinn Flynn", 
    "position": "Support Lead", 
    "Location": "Edinburgh",  
    "joining date": "2013/03/03", 
    "salary": 342000
    },
    {
    "id": "5421",
    "name": "Tiger Nixon", 
    "position": "System Architect", 
    "Location": "Edinburgh",  
    "joining date": "2011/04/25", 
    "salary": 320800
    },
    {
    "id": "1562",
    "name": "Ashton Cox", 
    "position": "Junior Technical Author", 
    "Location": "San Francisco",  
    "joining date": "2009/01/123", 
    "salary": 86000
    },
    {
    "id": "6224",
    "name": "Cedric Kelly", 
    "position": "Senior Javascript Developer", 
    "Location": "Edinburgh",  
    "joining date": "2012/03/29", 
    "salary": 433060
    },
    {
    "id": "5407",
    "name": "Airi Satou", 
    "position": "Accountant", 
    "Location": "Tokyo",  
    "joining date": "2008/11/28", 
    "salary": 162700
    },
    {
    "id": "6741",
    "name": "Charde Marshall", 
    "position": "Regional Director", 
    "Location": "San Francisco",  
    "joining date": "2008/10/16", 
    "salary": 470600
    }, 
    {
    "id": "3597",
    "name": "Haley Kennedy", 
    "position": "Senior Marketing Designer", 
    "Location": "London",  
    "joining date": "2012/12/18", 
    "salary": 313500
    }, 
    {
    "id": "1965",
    "name": "Tatyana Fitzpatrick", 
    "position": "Regional Director", 
    "Location": "London",  
    "joining date": "2010/03/17", 
    "salary": 385750
    }, 
    {
    "id": "1581",
    "name": "Michael Silva", 
    "position": "Marketing Designer", 
    "Location": "London",  
    "joining date": "2012/11/27", 
    "salary": 198500
    },
    {
    "id": "3059",
    "name": "Paul Byrd", 
    "position": "Chief Financial Officer (CFO)", 
    "Location": "New York",  
    "joining date": "2010/06/09", 
    "salary": 725000
    },
    {
    "id": "1721",
    "name": "Gloria Little", 
    "position": "Systems Administrator", 
    "Location": "New York",  
    "joining date": "2009/04/10", 
    "salary": 237500
    },
    {
    "id": "2558",
    "name": "Bradley Greer", 
    "position": "Software Engineer", 
    "Location": "London",  
    "joining date": "2012/10/13", 
    "salary": 132000
    },        
    {
    "id": "2290",
    "name": "Dai Rios", 
    "position": "Personnel Lead", 
    "Location": "Edinburgh",  
    "joining date": "2012/09/26", 
    "salary": 217500
    },
    {
    "id": "2290",
    "name": "Dai Rios", 
    "position": "Personnel Lead", 
    "Location": "Edinburgh",  
    "joining date": "2012/09/26", 
    "salary": 217500
    },
    {
    "id": "1937",
    "name": "Jenette Caldwell", 
    "position": "Development Lead", 
    "Location": "New York",  
    "joining date": "2011/09/03", 
    "salary": 345000
    },
    {
    "id": "6154",
    "name": "Yuri Berry", 
    "position": "Chief Marketing Officer (CMO)", 
    "Location": "New York",  
    "joining date": "2009/06/25", 
    "salary": 675000
    }, 
    {
    "id": "8330",
    "name": "Caesar Vance", 
    "position": "Pre-Sales Support", 
    "Location": "New York",  
    "joining date": "2011/12/12", 
    "salary": 106450
    },  
    {
    "id": "3023",
    "name": "Doris Wilder", 
    "position": "Sales Assistant", 
    "Location": "Sidney",  
    "joining date": "2010/09/20", 
    "salary": 85600
    },
    {
    "id": "5797",
    "name": "Angelica Ramos", 
    "position": "Chief Executive Officer (CEO)", 
    "Location": "London",  
    "joining date": "2009/10/09", 
    "salary": 1200000
    },  
    {
    "id": "8822",
    "name": "Gavin Joyce", 
    "position": "Developer", 
    "Location": "Edinburgh",  
    "joining date": "2010/12/22", 
    "salary": 92575
    },  
    {
    "id": "9239",
    "name": "Jennifer Chang", 
    "position": "Regional Director", 
    "Location": "Singapore",  
    "joining date": "2010/11/14", 
    "salary": 357650
    },
    {
    "id": "1314",
    "name": "Brenden Wagner", 
    "position": "Software Engineer", 
    "Location": "San Francisco",  
    "joining date": "2011/06/07", 
    "salary": 206850
    },
    {
    "id": "1314",
    "name": "Brenden Wagner", 
    "position": "Software Engineer", 
    "Location": "San Francisco",  
    "joining date": "2011/06/07", 
    "salary": 206850
    },
    {
    "id": "2947",
    "name": "Fiona Green", 
    "position": "Chief Operating Officer (COO)", 
    "Location": "San Francisco",  
    "joining date": "2010/03/11", 
    "salary": 850000
    }, 
    {
    "id": "8899",
    "name": "Shou Itou", 
    "position": "Regional Marketing", 
    "Location": "Tokyo",  
    "joining date": "2011/08/14", 
    "salary": 163000
    }, 
    {
    "id": "2769",
    "name": "Michelle House", 
    "position": "Integration Specialist", 
    "Location": "Sidney",  
    "joining date": "2011/06/02", 
    "salary": 95400
    }, 
    {
    "id": "6832",
    "name": "Suki Burks", 
    "position": "Developer", 
    "Location": "London",  
    "joining date": "2009/10/22", 
    "salary": 114500
    }, 
    {
    "id": "3606",
    "name": "Prescott Bartlett", 
    "position": "Technical Author", 
    "Location": "London",  
    "joining date": "2011/05/07", 
    "salary": 145000
    }, 
    {
    "id": "2860",
    "name": "Gavin Cortez", 
    "position": "Team Leader", 
    "Location": "San Francisco",  
    "joining date": "2008/10/26", 
    "salary": 235500
    },
    {
    "id": "8240",
    "name": "Martena Mccray", 
    "position": "Post-Sales support", 
    "Location": "Edinburgh",  
    "joining date": "2011/03/09", 
    "salary": 324050
    },   
    {
    "id": "5384",
    "name": "Unity Butler", 
    "position": "Marketing Designer", 
    "Location": "San Francisco",  
    "joining date": "2009/12/09", 
    "salary": 85675
    } 
];

// Function to populate the table with dataset
function populateTable() {
    var table = document.getElementById("employeeTable");

    // Loop through the dataset and add rows to the table
    for (var i = 0; i < dataset.length; i++) {
        var row = table.insertRow(-1);

        // Add data cells for each property in the dataset
        for (var key in dataset[i]) {
            if (dataset[i].hasOwnProperty(key)) {
                var cell = row.insertCell();
                cell.innerHTML = dataset[i][key];
            }
        }
    }
}

// Call the function to populate the table
populateTable();

function SortTable(column) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("employeeTable");
    switching = true;

    while (switching) {
        switching = false;
        rows = table.rows;

        for (i = 1; i < rows.length - 1; i++) {
            shouldSwitch = false;

            x = rows[i].getElementsByTagName("td")[getColumnIndex(column)].innerHTML.toLowerCase();
            y = rows[i + 1].getElementsByTagName("td")[getColumnIndex(column)].innerHTML.toLowerCase();

            if (x > y) {
                shouldSwitch = true;
                break;
            }
        }

        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

// Function to get the column index based on the column name
function getColumnIndex(columnName) {
    var headers = document.getElementById("employeeTable").rows[0].cells;
    for (var i = 0; i < headers.length; i++) {
        if (headers[i].innerHTML.toLowerCase() === columnName.toLowerCase()) {
            return i;
        }
    }
    return -1;
}


// Question No. 5
// A dynamic function to convert temperature according to the button clicked!
function ConvertTemperature(type){
    var valToConv = parseFloat(document.getElementById("ValueToConvert").value);
    var convMsg = document.getElementById("convertmsg");
    if (isNaN(valToConv)){
        convMsg.innerText = "You entered a non-numeric value!";
        convMsg.style.color = "red";
    } else {
        switch(type){
            case "ToCelsius":
                var celsius = valToConv - 32 * 5 / 9;
                celsius = celsius.toFixed(1);
                convMsg.innerText = "Converted temperature is: " + celsius.toString() + " °C";
                convMsg.style.color = "green";
                break;
            case "ToKelvin":
                var kelvin = valToConv + 273.15
                kelvin = kelvin.toFixed(2);
                convMsg.innerText = "Converted temperature is: " + kelvin.toString() + " K";
                convMsg.style.color = "green";
                break;
        }
    }
}

// A function to reset the fields and message
function Reset(){
    document.getElementById("ValueToConvert").value = "";
    document.getElementById("convertmsg").innerText = "";
}