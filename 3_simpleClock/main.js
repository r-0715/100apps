document.addEventListener('DOMContentLoaded',()=>{
    //
    //キャンバスサイズ定義
    const WIDTH = 200;
    const HEIGHT = 200;

    //キャンバス中心
    const center = [100, 100];

    //針の正午座標
    const h_noon = [center[0], 40];
    const m_noon = [center[0], 20];
    const s_noon = [center[0], 20];

    //エレメント取得
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext('2d');

    //エレメント取得
    const display_hours = document.getElementById("display_hours");
    const display_minutes = document.getElementById("display_minutes");
    const display_seconds = document.getElementById("display_seconds");

    //test
    const test = document.getElementById("test");
    const stop = document.getElementById("stop");

    let id;

    test.addEventListener('click',()=>{
        //
        test.disabled = true;
        stop.disabled = false;
        //アニメーション
        id = setInterval(() => {
            //
            //時間取得
            let time = getTime();
            let hours = Number(time[0]);
            let minutes = Number(time[1]);
            let seconds = Number(time[2]);

            console.log(hours,minutes,seconds);

            //座標計算
            let coodinate = calc(seconds,minutes,hours);//2次元配列が返る

            //描画
            draw(coodinate);

            //display
            if(hours < 10){
                display_hours.innerHTML = "0"+hours;
            }else{
                display_hours.innerHTML = hours;
            }
            if(minutes < 10){
                display_minutes.innerHTML = "0"+minutes;
            }else{
                display_minutes.innerHTML = minutes;
            }
            if(seconds < 10){
                display_seconds.innerHTML = "0"+seconds
            }else{
                display_seconds.innerHTML = seconds;
            }

        }, 1000);
    });
    stop.addEventListener('click',()=>{
        //
        stop.disabled = true;
        test.disabled = false;
        //アニメーションストップ
        clearInterval(id);
    });

    //時間取得
    function getTime(){
        return [new Date().getHours(), new Date().getMinutes(), new Date().getSeconds()];
    }

    //座標計算1
    function calc(seconds,minutes,hours){
        //
        const s_theta = -((Math.PI/30)*seconds);//秒針の角度
        const m_theta = -((Math.PI/30)*minutes + (Math.PI/60)*Math.floor(seconds/30));//長針の角度
        const h_theta = -((Math.PI/6)*(hours%12) + (Math.PI/360)*minutes);//短針の角度

        //座標平面に直す
        let h = [ch_rule_x(h_noon[0]), ch_rule_y(h_noon[1])];
        let m = [ch_rule_x(m_noon[0]), ch_rule_y(m_noon[1])];
        let s = [ch_rule_x(s_noon[0]), ch_rule_y(s_noon[1])];

        let img_h = [affin_x(h[0],h[1],h_theta), affin_y(h[0],h[1],h_theta)];
        let img_m = [affin_x(m[0],m[1],m_theta), affin_y(m[0],m[1],m_theta)];
        let img_s = [affin_x(s[0],s[1],s_theta), affin_y(s[0],s[1],s_theta)];

        img_h = [re_rule_x(img_h[0]), re_rule_y(img_h[1])];
        img_m = [re_rule_x(img_m[0]), re_rule_y(img_m[1])];
        img_s = [re_rule_x(img_s[0]), re_rule_y(img_s[1])];

        return [img_h, img_m, img_s];
    }

    {
    //
    function ch_rule_x(x){return(x - 100)};
    function ch_rule_y(y){return(-(y - 100))};
    function re_rule_x(x_){return(x_ + 100)};
    function re_rule_y(y_){return(100 - y_)};

    //アフィン変換
    function affin_x(x,y,theta){return((x*Math.cos(theta) - y*Math.sin(theta)))};
    function affin_y(x,y,theta){return((x*Math.sin(theta) + y*Math.cos(theta)))};

    // console.log(ch_rule_x(50));
    }

    //draw関数
    function draw(coodinate){
        //
        ctx.beginPath();
        ctx.clearRect(0, 0, WIDTH, HEIGHT);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(center[0], center[1]);
        ctx.lineTo(coodinate[0][0], coodinate[0][1]);
        ctx.lineWidth = "8";
        ctx.strokeStyle = "#444";
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(center[0], center[1]);
        ctx.lineTo(coodinate[1][0], coodinate[1][1]);
        ctx.lineWidth = "4";
        ctx.strokeStyle = "#777";
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(center[0], center[1]);
        ctx.lineTo(coodinate[2][0], coodinate[2][1]);
        ctx.lineWidth = "2";
        ctx.strokeStyle = "#cc0";
        ctx.stroke();
        ctx.closePath();
    }

    //描画
    function draw_first(){
        //
        //テスト用
        ctx.beginPath();
        ctx.clearRect(0, 0, WIDTH, HEIGHT);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(center[0], center[1]);
        ctx.lineTo(center[0], center[1] - 50);
        ctx.lineWidth = "8";
        ctx.strokeStyle = "#444";
        ctx.stroke();
        ctx.closePath();
        
        ctx.beginPath();
        ctx.moveTo(center[0], center[1]);
        ctx.lineTo(center[0], center[1] - 90);
        ctx.lineWidth = "4";
        ctx.strokeStyle = "#777";
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(center[0], center[1]);
        ctx.lineTo(center[0], center[1] - 90);
        ctx.lineWidth = "2";
        ctx.strokeStyle = "#cc0";
        ctx.stroke();
        ctx.closePath();
    }

    draw_first();
});