export const utilsTodo_calcDueDate = (date:Date)=>{
    const now = new Date().valueOf()
    const deadline = new Date(date).valueOf()
    const dueValue = deadline-now
    const seconds = dueValue/1000
    const minutes = seconds/60
    const hours = Math.floor(minutes/60)
    const hoursLeft = hours>24 ? hours%24 : 0
    const day = Math.floor(hours/24)
    const daysLeft = day>7 ? day%7 : 0
    const week = Math.floor(day/7)
    const due = {date,hours,hoursLeft,day,daysLeft,week}
    let text = ""
    if(week>4) text="in several weeks"
    else if(week>0 && week<=4){
        if(week!==1) text=`in ${week} weeks`
        else text=`in a week`
        if(daysLeft>0) 
          text+=`, and ${daysLeft} days`
    }
    else if(day>0 && day<=7) {
        if(day!==1) text=`in ${day} days`
        else text=`today`
        if(hoursLeft>0)
          text+=`, and ${hoursLeft} hours`
    }
    else if(hours>0 && hours<=23){
        if(hours!==1) text=`in ${hours} hours`
        else text=`in an hour`
    }
    else if(hours<0 || hours===0){
        text=``
    }
    return {due, text}
}