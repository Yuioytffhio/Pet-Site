function getCurrentDateAndTime() {
    const currentDate = new Date();
    const dateTimeString = currentDate.toLocaleString('en-US',{hour12 : true});
    document.getElementById("currentDateAndTime").innerHTML= dateTimeString;
}
