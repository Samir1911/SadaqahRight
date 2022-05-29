var a=[
    {
        img:"afghan1",
        name:"AFGHAN APPEAL",
        description:"Afghanistan has been through decades of war, many natural disasters, drought, a serious COVID-19 pandemic and serious hunger and poverty. This has left nearly 20 million people in and around Afghanistan in need of urgent humanitarian aid",
        link:"afghan.html"
    },
    {
        img:"rohingya1",
        name:"ROHINGYA APPEAL",
        description:"2017 saw huge global compassion for the Rohingya crisis following a mass exodus of 500,000 Rohingya from Burma to Bangladesh in just August alone.",
        link:"rohingya.html"
    },
    {
        img:"uyghur",
        name:"UYGHUR",
        description:"The Chinese government has committed a series of ongoing human rights abuses against Uyghurs and other ethnic and religious minorities in Xinjiang that is often characterized as genocide. Since 2014, the Chinese government, under the administration of Chinese Communist Party (CCP) General Secretary Xi Jinping, has pursued policies that incarcerated more than an estimated one million Turkic Muslims in internment camps without any legal process.",
        link:"uyghur.html"
    },
    {
        img:"yemen",
        name:"YEMEN APPEAL",
        description:"With more than 11 million children in danger and 8 out of 10 children requiring emergency aid, Yemen is in an emergency crisis! Every 10 minutes, a child dies from malnutrition and preventable diseases. You can make a difference today by providing emergency aid to the needy.",
        link:"yemen.html"
    },
    {
        img:"syria1",
        name:"SYRIA APPEAL",
        description:"After almost 10 years of hardship, suffering and persecution, millions of people in Syria rely solely on humanitarian aid to survive. One Ummah are on the ground. Help us save lives today!",
        link:"syria.html"
    },
    {
        img:"palestine1",
        name:"PALESTINE / GAZA APPEAL",
        description:"More than 2 million people are crammed into Gaza, one of the most densely populated cities on earth. The majority live under the poverty line and rely on your donations to survive. You can provide emergency aid and give them some relief today.",
        link:"palestine.html"
    }
]

var main=document.querySelector("main");

var s=""
a.forEach(app=>{
    s+=`<div class="container">
            <div>
                <h1>${app.name}</h1>
                <p>${app.description}</p>
                <a href=${app.link}><button>Read More</button></a>
            </div>
        </div>`
})
main.innerHTML=s;

var container=document.querySelectorAll(".container");
var i=0
container.forEach(c=>{
    s="images/"+a[i].img+".jpg";
    c.style.backgroundImage="url("+s+")";
    i++;
})