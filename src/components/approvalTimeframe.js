//Add another section 4. If does not meet protocol, send to provider for review. Change title to protocol next steps 

const ApprovalTimeFrame = ({ daysTillNextOVDate, daysTillNextLabDate }) => {
  

  

  let numOfDays;

  if (daysTillNextLabDate === null) {
    numOfDays = daysTillNextOVDate;
  } else {
    numOfDays = Math.min(daysTillNextOVDate, daysTillNextLabDate);
  }

  let message;

  if (numOfDays === null) {
    message = "";
  } else if(numOfDays <= 0) {
    message =<p style={{backgroundColor:'#eb4034'}}>May provide 1 courtesy fill, up to 30 day supply, schedule OV or labs.</p>
  }
  else if (numOfDays <= 90) {
    message = "90 day supply.";
  } else if (numOfDays <= 180) {
    message = "90 day supply + 1 refill.";
  } else if (numOfDays <= 270) {
    message = "90 day supply + 2 refills.";
  } else if (numOfDays <= 365) {
    message = "90 day supply + 3 refills";
  }
  // console.log(daysTillNextOVDate, daysTillNextLabDate)

  return (
    <div>
      <h2>3. Protocol next steps:</h2>
      <p>If protocol met, may approve up to:</p>
      <h1 style={{backgroundColor: 'green', color:'#ffffff'}}>{message}</h1>
    </div>
  );
}; export default ApprovalTimeFrame
  
  
  
  

  

  