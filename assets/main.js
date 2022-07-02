function showTime(){
    let date = new Date();
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let s = date.getSeconds(); // 0 - 59
    let session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    // let time = h + ":" + m + ":" + s + " " + session;
    let time = h + ":" + m + ":" + s;
    document.getElementById("jClock").innerText = time;

    //get date
    let dNo = date.getDate()

    //get month
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let mName = months[date.getMonth()]

    //get year
    let yNo = date.getFullYear()



    let jdateView = dNo + " " + mName +" , " + yNo;
    document.getElementById("jDate").innerText = jdateView;

    
    setTimeout(showTime, 1000);
    
}

showTime();