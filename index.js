function calculateAge() {
    const dob = document.getElementById("dob").value;
    if (!dob) {
        alert("Please select a date of birth.");
        return;
    }
  
    const birthDate = new Date(dob);
    const currentDate = new Date();
  
    if (birthDate > currentDate) {
        alert("Date of birth cannot be in the future.");
        return;
    }
  
    let ageYears = currentDate.getFullYear() - birthDate.getFullYear();
    let ageMonths = currentDate.getMonth() - birthDate.getMonth();
    let ageDays = currentDate.getDate() - birthDate.getDate();
  
    // If days are negative, borrow days from the previous month
    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    }
  
    // If months are negative, subtract a year and adjust the months
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }
  
    const dayName = birthDate.toLocaleString('en-us', { weekday: 'long' });
  
    document.getElementById("result").innerHTML = `
        <div>Your age is:</div>
        <div>${ageYears} years, ${ageMonths} months, and ${ageDays} days</div>
        <div>Born on: ${dayName}</div>
    `;
  }
  