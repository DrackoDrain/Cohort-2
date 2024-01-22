function dateMethods(){
    const currentDate = new Date;
    console.log("Current Date" + currentDate);
  
  
  
    // Getting Various components of the date ;
    console.log("date", currentDate.getDate());
    console.log("Month", currentDate.getMonth()+1) // Months are zero indexed
    console.log("Year", currentDate.getFullYear());
    console.log("Hours", currentDate.getHours());
    console.log("Minutes",currentDate.getMinutes());
    console.log("Seconds", currentDate.getSeconds());
    
  
    currentDate.setFullYear(2022);
    console.log("After setFullYear", currentDate);
  
    currentDate.setMonth(5);
    console.log("After setMonth", currentDate)
  
    
  }
  dateMethods();
  