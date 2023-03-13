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
    message ="Please send to provider for review."
  }
  else if (numOfDays <= 90) {
    message = "Approve for 90 day supply.";
  } else if (numOfDays <= 180) {
    message = "Approve a 90 day supply + 1 refill.";
  } else if (numOfDays <= 270) {
    message = "Approve 90 day supply + 2 refills.";
  } else if (numOfDays <= 365) {
    message = "Approve 90 day supply + 3 refills.";
  }
  console.log(daysTillNextOVDate, daysTillNextLabDate)

  return (
    <div>
      <h2>3. Approval Timeframe</h2>
      <p style={{backgroundColor: 'green'}}>{message}</p>
    </div>
  );
}; export default ApprovalTimeFrame
  
  
  
  

  

  