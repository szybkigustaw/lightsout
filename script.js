const switchLight = function(id) {
    Id = '#' + parseInt(id);
    //alert(Id);
    if($(Id).css("background-color") == "rgb(7, 16, 19)"){
        $(Id).css({"background-color":"#F3E6E2","transition":"background-color 0.2s ease"});
        if(parseInt(id) != 0 && parseInt(id) != 6 && parseInt(id) != 11 && parseInt(id) != 16 && parseInt(id) != 21)
        {
            ph = parseInt(id)-1;
            Id = '#' + ph;
            //alert(Id);
            if($(Id).css("background-color") == "rgb(7, 16, 19)"){
                $(Id).css({"background-color":"#F3E6E2","transition":"background-color 0.2s ease"});
            } else {
                $(Id).css({"background-color":"#071013","transition":"background-color 0.2s ease"});
            }
        }
        if(parseInt(id) != 5 && parseInt(id) != 10 && parseInt(id) != 15 && parseInt(id) != 20 && parseInt(id) != 25)
        {
            ph = parseInt(id)+1;
            Id = '#' + ph;
            //alert(Id);
            if($(Id).css("background-color") == "rgb(7, 16, 19)"){
                $(Id).css({"background-color":"#F3E6E2","transition":"background-color 0.2s ease"});
            } else {
                $(Id).css({"background-color":"#071013","transition":"background-color 0.2s ease"});
            }
        }
        if(parseInt(id) > 5)
        {
            ph = parseInt(id)-5;
            Id = '#' + ph;
            //alert(Id);
            if($(Id).css("background-color") == "rgb(7, 16, 19)"){
                $(Id).css({"background-color":"#F3E6E2","transition":"background-color 0.2s ease"});
            } else {
                $(Id).css({"background-color":"#071013","transition":"background-color 0.2s ease"});
            }
        }
        if(parseInt(id) <= 20)
        {
            ph = parseInt(id)+5;
            Id = '#' + ph;
            //alert(Id);
            if($(Id).css("background-color") == "rgb(7, 16, 19)"){
                $(Id).css({"background-color":"#F3E6E2","transition":"background-color 0.2s ease"});
            } else {
                $(Id).css({"background-color":"#071013","transition":"background-color 0.2s ease"});
            }
        }
    } else {
        $(Id).css({"background-color":"#071013","transition":"background-color 0.2s ease"});
        if(parseInt(id) != 0 && parseInt(id) != 6 && parseInt(id) != 11 && parseInt(id) != 16 && parseInt(id) != 21)
        {
            ph = parseInt(id)-1;
            Id = '#' + ph;
            //alert(Id);
            if($(Id).css("background-color") == "rgb(7, 16, 19)"){
                $(Id).css({"background-color":"#F3E6E2","transition":"background-color 0.2s ease"});
            } else {
                $(Id).css({"background-color":"#071013","transition":"background-color 0.2s ease"});
            }
        }
        if(parseInt(id) != 5 && parseInt(id) != 10 && parseInt(id) != 15 && parseInt(id) != 20 && parseInt(id) != 25)
        {
            ph = parseInt(id)+1;
            Id = '#' + ph;
            //alert(Id);
            if($(Id).css("background-color") == "rgb(7, 16, 19)"){
                $(Id).css({"background-color":"#F3E6E2","transition":"background-color 0.2s ease"});
            } else {
                $(Id).css({"background-color":"#071013","transition":"background-color 0.2s ease"});
            }
        }
        if(parseInt(id) > 5)
        {
            ph = parseInt(id)-5;
            Id = '#' + ph;
            //alert(Id);
            if($(Id).css("background-color") == "rgb(7, 16, 19)"){
                $(Id).css({"background-color":"#F3E6E2","transition":"background-color 0.2s ease"});
            } else {
                $(Id).css({"background-color":"#071013","transition":"background-color 0.2s ease"});
            }
        }
        if(parseInt(id) <= 20)
        {
            ph = parseInt(id)+5;
            Id = '#' + ph;
            //alert(Id);
            if($(Id).css("background-color") == "rgb(7, 16, 19)"){
                $(Id).css({"background-color":"#F3E6E2","transition":"background-color 0.2s ease"});
            } else {
                $(Id).css({"background-color":"#071013","transition":"background-color 0.2s ease"});
            }
        }
    }
    let check = checkLight();
    if(check == 25)
    {
        gameWin();
    }
    else
    {
        let info = document.getElementById('info');
        info.innerText = check;
    }
};

const randLight = function() {
    for(let i = 1; i <= 25; i++)
    {
        let rand = Math.floor(Math.random() * 2);
        if(rand == 0)
        {
            let Id = '#' + i;
            $(Id).css({"background-color":"#071013","transition":"background-color 0.2s ease"});
        }
        else if(rand == 1)
        {
            let Id = '#' + i;
            $(Id).css({"background-color":"#F3E6E2","transition":"background-color 0.2s ease"});
        }
    }
};

const checkLight = function(){
    let cnt = 0;
    for(let i = 1; i <= 25; i++)
    {
        let Id = '#' + i;
        if($(Id).css("background-color") == "rgb(7, 16, 19)")
        {
            cnt++;
        }
    }
    return cnt;
};


let secCnt = 0;
const devOpt = function()
{
    if(secCnt < 4)
    {
        secCnt++;
    }
    else
    {
        let text = document.getElementById('sec');
        const winBt = document.createElement("button");
        text.parentNode.replaceChild(winBt,text);
        winBt.innerHTML = "WIN";
        winBt.style.marginLeft = "auto";
        winBt.style.marginRight = "auto";
        winBt.style.display = "block";
        winBt.id = "winBt";
        winBt.onclick = gameWin;
    }
};

const gameWin = function()
{
    let game = document.querySelector('div.grid-container');
    let win = document.createElement('div');
    win.className = "victory";
    let winH1 = document.createElement('h1');
    win.appendChild(winH1);
    winH1.innerText = "Congrats! You have won!";
    let winH3 = document.createElement('h3');
    win.appendChild(winH3);
    winH3.innerText = "Click this button, if you want to play again";
    let winBtn = document.createElement('button');
    win.appendChild(winBtn);
    winBtn.className = "victory";
    winBtn.innerText = "Click me!";
    winBtn.onclick = function(){history.go(0)};
    game.parentNode.replaceChild(win,game);
    $(".victory").css({"visibility":"visible","width":"auto","height":"auto"});

    let cntInfo = document.querySelector("#cnt-info");
    cntInfo.parentNode.removeChild(cntInfo);
    let winBt = document.querySelector("#winBt");
    winBt.parentNode.removeChild(winBt);
};
