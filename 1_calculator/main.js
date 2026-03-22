document.addEventListener('DOMContentLoaded',()=>{
    //
    const num_1 = document.getElementById("1");
    const num_2 = document.getElementById("2");
    const num_3 = document.getElementById("3");
    const num_4 = document.getElementById("4");
    const num_5 = document.getElementById("5");
    const num_6 = document.getElementById("6");
    const num_7 = document.getElementById("7");
    const num_8 = document.getElementById("8");
    const num_9 = document.getElementById("9");
    const num_0 = document.getElementById("0");
    const num_00 = document.getElementById("00");

    const plus = document.getElementById("plus");
    const time = document.getElementById("time");
    const minus = document.getElementById("minus");
    const divide = document.getElementById("divide");
    const equal = document.getElementById("equal");

    const clear = document.getElementById("clear");

    const display = document.getElementById("display");

    let a_arry = [];
    let b_arry = [];
    let a_num = 0;
    let b_num = 0;
    let ans = 0;
    let attention = {
        a: true,
        b: false,
        choose: ""
    };

    
    clear.addEventListener('click',()=>{
        //
        display.innerHTML = "";
        a_arry = [];
        b_arry = [];
        a_num = 0;
        b_num = 0;
        attention.a = true;
        attention.b = false;
        attention.choose = "";
        
        console.log(a_arry);
    });
    
    num_00.addEventListener('click',()=>{
        //
        if(a_arry.length != 0){
            if(attention.a){
                a_arry.push("00");
            }
        }
        if(b_arry.length != 0){
            if(attention.b){
                b_arry.push("00");
            }
        }

        draw();
    });

    num_0.addEventListener('click',()=>{
        //
        if(a_arry.length != 0){
            if(attention.a){
                a_arry.push("0");
            }            
        }
        if(b_arry.length != 0){
            if(attention.b){
                b_arry.push("0");
            }
        }

        draw();
    });

    num_1.addEventListener('click',()=>{
        //
        if(attention.a){
            a_arry.push("1");
        }
        if(attention.b){
            b_arry.push("1");
        }

        draw();
    });

    num_2.addEventListener('click',()=>{
        //
        if(attention.a){
            a_arry.push("2");
        }
        if(attention.b){
            b_arry.push("2");
        }

        draw();
    });

    num_3.addEventListener('click',()=>{
        //
        if(attention.a){
            a_arry.push("3");
        }
        if(attention.b){
            b_arry.push("3");
        }

        draw();
    });

    num_4.addEventListener('click',()=>{
        //
        if(attention.a){
            a_arry.push("4");
        }
        if(attention.b){
            b_arry.push("4");
        }

        draw();
    });

    num_5.addEventListener('click',()=>{
        //
        if(attention.a){
            a_arry.push("5");
        }
        if(attention.b){
            b_arry.push("5");
        }

        draw();
    });

    num_6.addEventListener('click',()=>{
        //
        if(attention.a){
            a_arry.push("6");
        }
        if(attention.b){
            b_arry.push("6");
        }

        draw();
    });

    num_7.addEventListener('click',()=>{
        //
        if(attention.a){
            a_arry.push("7");
        }
        if(attention.b){
            b_arry.push("7");
        }

        draw();
    });

    num_8.addEventListener('click',()=>{
        //
        if(attention.a){
            a_arry.push("8");
        }
        if(attention.b){
            b_arry.push("8");
        }

        draw();
    });

    num_9.addEventListener('click',()=>{
        //
        if(attention.a){
            a_arry.push("9");
        }
        if(attention.b){
            b_arry.push("9");
        }

        draw();
    });

    plus.addEventListener('click',()=>{
        //
        attention.choose = "plus";
        attention.a = false;
        attention.b = true;
    });

    time.addEventListener('click',()=>{
        //
        attention.choose = "time";
        attention.a = false;
        attention.b = true;
    });

    minus.addEventListener('click',()=>{
        //
        attention.choose = "minus";
        attention.a = false;
        attention.b = true;
    });

    divide.addEventListener('click',()=>{
        //
        attention.choose = "divide";
        attention.a = false;
        attention.b = true;
    });

    equal.addEventListener('click',()=>{
        //
        switch (attention.choose){
            case "plus":
                ans = a_num + b_num;
                display.innerHTML = ans;
                attention.choose = "";
                return;
            case "time":
                ans = a_num*b_num;
                display.innerHTML = ans;
                attention.choose = "";
                return;
            case "minus":
                ans = a_num - b_num;
                display.innerHTML = ans;
                attention.choose = "";
                return;
            case "divide":
                ans = a_num/b_num;
                display.innerHTML = ans;
                attention.choose = "";
                return;
        }
    });


    function draw(){
        //
        a_num = a_arry.join('');
        b_num = b_arry.join('');
        a_num = Number(a_num);
        b_num = Number(b_num);

        if(attention.a){
            display.innerHTML = a_num;
        }
        if(attention.b){
            display.innerHTML = b_num;
        }
    }

});
