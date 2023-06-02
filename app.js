setInterval(timer,1000)

function timer(){
    let d = new Date()

    let seconds = d.getSeconds()
    let minutes = d.getMinutes()
    let hours = d.getHours()
    let days = d.getDate()
    let month = d.getMonth()
    let year = d.getFullYear()

    // console.log(month)

    // late hours
    let pmHours = hours - 12;
    
    clearInterval(timer)
    // console.log(`the second is ${seconds} \n the minute is ${minutes} \n the hour is ${hours} \n the days is ${days} `)
    const ddays = document.querySelector('.days')
    const dhours = document.querySelector('.hours')
    const dminutes = document.querySelector('.minutes')
    const dseconds = document.querySelector('.seconds')
    const dampm = document.querySelector('.ampm')
    const h3 = document.querySelector('.titleh3')

    // months of the year

    const moy = ['January','February','March','April','May','June','July','August','September','October','November','December']

    let newMonth = moy[month]

    // for days 

    if(days <= 9){
        ddays.innerHTML = newMonth + ' ' + '0' + days + ', ' + year
    } else {
        ddays.innerHTML = days
    }

    // for hours

    
    if(hours <= 9){
        dhours.innerHTML = '0' + hours
    } else {
        dhours.innerHTML = hours
    }

    if(hours >= 13){
        dhours.innerHTML = '0' + pmHours
    } else {
        dhours.innerHTML = hours
    }
    
    // for minutes

    if(minutes <= 9){
        dminutes.innerHTML = '0' + minutes
    } else {
        dminutes.innerHTML = minutes
    }

    // for seconds

    if(seconds <= 9){
        dseconds.innerHTML = '0' + seconds
    } else {
        dseconds.innerHTML = seconds
    }

    if(hours >= 12){
        dampm.innerHTML = 'PM'
    } else {
        dampm.innerHTML = 'AM'
    }

    
    
    
}

