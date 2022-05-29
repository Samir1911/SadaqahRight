var b=[
    {
        appeal:"Afghan Appeal",
        links:["CINl0jf27y0","rmozak9bvvk","vFApwcGw1VA","rjHSnGrC3P4","k76SP3Hn16Y","WHMHhL0Ztvs"],
        img:"url('images/afghan1.jpg')"
    },
    {
        appeal:"Rohingya Appeal",
        links:["ccRw96mOwTc","9QIP5n15c9I","OqNqICFcmto","F58BYI3i8QE","U5jnmHFjllQ","wnC_7Jlyh_I","875pi2zKbQo","l2b7yFNRUdA","RW1ZJmJ1eds"],
        img:"url('images/rohingya1.jpg')"
    },
    {
        appeal:"Uyghur Appeal",
        links:["vjBPG8jUXh4","k9lIQaHknHc","FJ94US5AIxA","ieFlBCB3cdg","U7XHW_wZH6c","uBCk6AJLaKc","Bd3S2ATvAk4","QwrNtvj69AY"],
        img:"url('images/uyghur.jpg')"
    },
    {
        appeal:"Yemen Appeal",
        links:["5ko_ugArcdI","SOBHlzXl3l4","A4R7Npky4YQ","xGe5WhZBl9g","5VrHbgYowsc","eXNUyugMpz8","qCS98T43uBk"],
        img:"url('images/yemen1.jpg')"
    },
    {
        appeal:"Syria Appeal",
        links:["vIKsfP-1fu4","mAQOf359ZOA","AxUjU8m4B1U","FuYK1Iy1v-w","rHHgEDOxtYk","O2SKD1lB81Q","cuGE-s2qErU"],
        img:"url('images/syria1.jpg')"
    },
    {
        appeal:"Palestine Appeal",
        links:["cu1YcVSlwXc","9oXfZlwIqZI","JZke7kvsfdI","ig5tL3Z5TNc","YdTqVrxrSuc","OYO4on-T_tU"],
        img:"url('images/palestine1.jpg')"
    }
]
var main=document.querySelector("main");
var id=main.id-1;
main.style.backgroundImage=b[id].img;
var head=document.querySelector("head");
head.innerHTML=`<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${b[id].appeal}</title>
    <link rel="icon" type="image/png" sizes="50x50" href="images/logo.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Roboto+Slab&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="header.css">
    <link rel="stylesheet" href="content.css">`

var header=document.querySelector("header");
header.innerHTML=`<a href="index.html">
            <p id="logo">SADAQAH</p>
        </a>
        <nav>
            <a id="appeals" href="index.html">APPEALS</a>
            <div id="hover">
                <a href="afghan.html">Afghanistan</a>
                <a href="rohingya.html">Rohingya</a>
                <a href="uyghur.html">Uyghur</a>
                <a href="yemen.html">Yemen</a>
                <a href="syria.html">Syria</a>
                <a href="palestine.html">Gaza/Palestine</a>

            </div>
            <a href="hist.html">UNTOLD HISTORY</a>
        </nav>
        <img id="menu" src="images/icon-menu.svg" alt="menu">
        <aside>
            <img id="close" src="images/icon-close.svg" alt="close">
            <a href="index.html">APPEALS</a>
            <ul>
                <li><a href="afghan.html">Afghanistan</a></li>
                <li><a href="rohingya.html">Rohingya</a></li>
                <li><a href="uyghur.html">Uyghur</a></li>
                <li><a href="yemen.html">Yemen</a></li>
                <li><a href="syria.html">Syria</a></li>
                <li><a href="palestine.html">Gaza/Palestine</a></li>
            </ul>
            <a href="hist.html">UNTOLD HISTORY</a>
        </aside>`

s="";
b[id].links.forEach(li=>{
    l="https://www.youtube.com/embed/"+li
    s+=`<iframe width="350" height="200" src=${l} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
})

var video=document.querySelector("#videos");
video.innerHTML=s