function generateQuote(){

    // Here i am only getting i did not want to get and display at the same time(separation of concerns)
    // I need to get these tags incase i will need to reuse them somewhere differently
    let name = document.getElementById("tname");
    let numTravellers = document.getElementById("NumberofTravellers");
    let destination = document.getElementById("tdestinations");
    let duration = document.getElementById("LengthofStay");

    // Here i am trying to get all radio buttons in the time-machine group as a list
    let prefferedTime = document.getElementsByName('time-machine');

    // Here i am trying to get all checkboxes that share the Insurance name
    let Insurance = document.getElementsByName('Insurance');

    // Here i am trying to get all the table cells in the quote result table to display the results
    // these ids are found in the quote result table at the bottom of the HTML
    let quoteName = document.getElementById("quoteName");
    let quoteNumTravellers = document.getElementById("numTravellers");
    let quoteDestination = document.getElementById("quoteDestination");
    let quoteDuration = document.getElementById("duration");    
    let prefTime = document.getElementById("prefTime");
    let quoteInsurance = document.getElementById("quoteInsurance");
    let quoteTotalCost = document.getElementById("totalCost");

    // Here i am trying to initialise totalCost to 0, it will be updated later once all costs are known
    let totalCost = 0;

    // Here i am trying to populate the simple text fields directly from the input values
    quoteName.innerHTML = name.value;
    quoteNumTravellers.innerHTML = numTravellers.value;
    // Here i am trying to get the visible text of the selected option not just its value
    quoteDestination.innerHTML = destination.options[destination.selectedIndex].text;
    quoteDuration.innerHTML = duration.value + " days";

    // Here i am trying to initialise checkedTime to 0 incase no radio is selected
    var checkedTime = 0;
    // Here i am trying to loop through all radio buttons to find which one is checked
    for(i = 0; i < prefferedTime.length; i++){
        if(prefferedTime[i].checked){
            // Here i am trying to display the value and store it for the total cost calculation
            prefTime.innerHTML = prefferedTime[i].value;
            checkedTime = prefferedTime[i].value;
        }
    }

    // Here i am trying to build two arrays at the same time in one loop
    // result stores numeric values for cost calculation
    // resultLabels stores the display text for showing in the quote
    let result = [];
    let InsuranceTotal = 0;
    let resultLabels = [];

    for(i = 0; i < Insurance.length; i++){
        if(Insurance[i].checked){
            result.push(Insurance[i].value);
            // Here i am trying to convert to Number before adding to avoid string concatenation
            InsuranceTotal += Number(Insurance[i].value);
            // Here i am trying to get the label text using the for attribute to show the name not the value
            let label = document.querySelector(`label[for="${Insurance[i].id}"]`);
            resultLabels.push(label.textContent);
        }
    }

    // Here i am trying to check if any insurance was selected and display accordingly
    if(result.length > 0){
        // Here i am trying to build the display string line by line stacking each insurance with a br
        let insuranceDisplay = "";
        for(i = 0; i < resultLabels.length; i++){
            insuranceDisplay += resultLabels[i] + "<br>";
        }
        quoteInsurance.innerHTML = insuranceDisplay;
    } else {
        quoteInsurance.innerHTML = "No Insurance";
    }

    // Here i am trying to calculate the total cost using destination base cost times travellers times days plus time machine and insurance
    totalCost = (destination.value * numTravellers.value * duration.value) + Number(checkedTime) + InsuranceTotal;
    quoteTotalCost.innerHTML = "CC " + totalCost;

    // Here i am trying to get the quote result table and validation message to toggle their visibility
    let quoteResult = document.getElementById('quoteResult');
    let validation = document.getElementById('validation');

    // Here i am trying to validate that all required fields are filled before showing the quote
    // if anything is missing hide the quote and show the validation warning otherwise show the quote
    if(name.value === "" || destination.value === "" || result.length <= 0 || checkedTime == 0){
        quoteResult.style.display = "none";
        validation.style.display = "block";
    } else {
        validation.style.display = "none";
        quoteResult.style.display = "block";
    }
}
