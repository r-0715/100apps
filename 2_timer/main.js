document.addEventListener('DOMContentLoaded',()=>{
    //
    const set_h = document.getElementById("set_h");
    const set_m = document.getElementById("set_m");
    const set_s = document.getElementById("set_s");

    const display_h = document.getElementById("display_h");
    const display_m = document.getElementById("display_m");
    const display_s = document.getElementById("display_s");

    const strat_btn = document.getElementById("start");
    const stop_btn = document.getElementById("stop");

    const reset_btn = document.getElementById("reset");

    set_h.addEventListener('click',()=>{
        //
        let hours = Number(set_h.value);

        if(hours < 10) display_h.innerHTML = "0"+hours; else display_h.innerHTML = hours;

        //set_h.style.pointerEvents = "none";
    });

    set_m.addEventListener('click',()=>{
        //
        let minutes = Number(set_m.value);

        if(minutes < 10) display_m.innerHTML = "0"+minutes; else display_m.innerHTML = minutes;
    });

    set_s.addEventListener('click',()=>{
        //
        let second = Number(set_s.value);

        if(second < 10) display_s.innerHTML = "0"+second; else display_s.innerHTML = second;
    });

    let id;
    let time;
    
    strat_btn.addEventListener('click',()=>{
        //
        strat_btn.disabled = true;
        stop_btn.disabled = false;

        if(strat_btn.value == "first"){
            let hours = Number(set_h.value);
            let minutes = Number(set_m.value);
            let second = Number(set_s.value);

            time = hours*3600 + minutes*60 + second;

            strat_btn.value = "other";
        }
        //console.log(time);
        id = setInterval(() => {
            time -= 1;
            
            let hours = Math.floor(time/3600);
            let minutes = Math.floor((time-hours*3600)/60);
            let second = time - (hours*3600 + minutes*60);

            if(hours < 10) display_h.innerHTML = "0"+hours; else display_h.innerHTML = hours;
            if(minutes < 10) display_m.innerHTML = "0"+minutes; else display_m.innerHTML = minutes;
            if(second < 10) display_s.innerHTML = "0"+second; else display_s.innerHTML = second;
        }, 1000);
    });

    stop_btn.addEventListener('click',()=>{
        //
        stop_btn.disabled = true;
        strat_btn.disabled = false;

        clearInterval(id);
    });

    reset_btn.addEventListener('click',()=>{
        //
        display_h.innerHTML = "00";
        display_m.innerHTML = "00";
        display_s.innerHTML = "00";

        set_h.value = "0";
        set_m.value = "0";
        set_s.value = "0";

        strat_btn.value = "first";

        clearInterval(id);

        strat_btn.disabled = false;
        stop_btn.disabled = true;
    });
    //
});