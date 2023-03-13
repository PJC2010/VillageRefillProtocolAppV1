import React, {useState} from "react";
import differenceInDays from "date-fns/differenceInDays";
import drugs from '../data/meddata.json'
import OvCalc from "./ovCalc";
import MedSearch from "./MedSearch";

function MedLogic({nextOvDate}) {
  const [currentDate, setCurrentDate] = useState
  
  const today = new Date();
  const timediff = nextOvDate.getTime() - today.getDate();
  const daysUntilNextOVDate = Math.ceil(timediff / (1000 *3600 * 24))

  let message;

  if(daysUntilNextOVDate <= 90) {
    message="Approve 90 day supply, no refills";

  }else if(daysUntilNextOVDate > 90 && daysUntilNextOVDate <= 180) {
    message="Approve for 90 day supply + 1 refill"
  } else if (daysUntilNextOVDate  > 180 && daysUntilNextOVDate <= 270){
    message="Approve for 90 day supply + 2 refills"
  } else if(daysUntilNextOVDate > 275 && daysUntilNextOVDate <= 365) {
    message = "Approve for 90 day supply + 3 refills"
  } 

    

    
  
   
  } export default MedLogic;