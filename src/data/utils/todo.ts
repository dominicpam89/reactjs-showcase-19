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
        if(daysLeft>1) 
          text+=`, and ${daysLeft} days`
        else text+=`, and one day`
    }
    else if(day>=0 && day<=7) {
        if(day===1) text=`tomorrow`
        else if(day>1) text=`in ${day} days`
        else text=`today`
    }
    return {due, text}
}


export type TypeImageSize = "default"|"sm"|"xs"
export const utilsGetImage = (image:string, size:TypeImageSize="sm")=>{
		const imageName = image.split("-")[0]
		if(size!=="default") return `${imageName}-${size}.png`
		else return `${imageName}.png`
}