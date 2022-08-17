let selfInformationContainer = [
    {
        information: "My Site",
        link: "https://runch02.github.io/runch.github.io",
        linkName: "RUNCH",
        gradient: "linear-gradient(#02aab0, #00cdac)"
    },
    {
        information: "Contact Here!",
        link: "mailto:runch762@gmail.com",
        linkName: "GMAIL",
        gradient: "linear-gradient(#eacda3, #d6ae7b)"
    },
    {
        information: "Get the repo. of projects",
        link: "https://github.com/runch02",
        linkName: "GITHUB",
        gradient: "linear-gradient(#eecda3, #ef629f)"
    },
    {
        information: "Questions and answers about coding",
        link: "https://stackoverflow.com/users/18139311/runch",
        linkName: "STACKOVERFLOW",
        gradient: "linear-gradient(#d66d75, #e29587)"
    },
    {
        information: "Another place to find the code",
        link: "https://code.dcoder.tech/profile/runch",
        linkName: "DCODER",
        gradient: "linear-gradient(#000428, #004e92)"
    },
    {
        information: "Get connected online!",
        link: "https://twitter.com/RUNCH02",
        linkName: "TWEETER",
        gradient: "linear-gradient(#ddd6f3, #faaca8)"
    },
]

let showSelfInformation = () => {
    let create;
    for (let i of selfInformationContainer) {
        create = ` <div class="each-information-container" style="background: ${i.gradient};">
            <p>${i.information}</p>
            <a href="${i.link}" target="_blank">${i.linkName}</a>
        </div> `
        document.querySelector(".self-information-container").insertAdjacentHTML("beforeend", create)
    }
}

showSelfInformation()

let siteInformationContainer = [
    {
        title: "Timer",
        visitSite: "",
        gradient: "linear-gradient(#ffafbd, #ffc3a0)"
    },
    {
        title: "Stopwatch",
        visitSite: "",
        gradient: "linear-gradient(#2193b0, #6dd5ed)"
    },
    {
        title: "Lap Stopwatch",
        visitSite: "",
        gradient: "linear-gradient(#cc2b5e, #753a88)"
    },
    {
        title: "12 Hour Format Watch",
        visitSite: "",
        gradient: "linear-gradient(#ee9ca7, #ffdde1)"
    },
    {
        title: "24 Hour Format Watch",
        visitSite: "",
        gradient: "linear-gradient(#42275a, #734b6d)"
    },
    {
        title: "Background Color Changer",
        visitSite: "",
        gradient: "linear-gradient(#bdc3c7, #2c3e50)"
    },
    {
        title: "RGB",
        visitSite: "",
        gradient: "linear-gradient(#de6262, #ffb88c)"
    },
    {
        title: "RGBA",
        visitSite: "",
        gradient: "linear-gradient(#06beb6, #48b1bf)"
    },
    {
        title: "Counter",
        visitSite: "",
        gradient: "linear-gradient(#eb3349, #f45c43)"
    },
    {
        title: "Image Slider",
        visitSite: "",
        gradient: "linear-gradient(#dd5e89, #f7bb97)"
    },
    {
        title: "Random Quote",
        visitSite: "",
        gradient: "linear-gradient(#56ab2f, #a8e063)"
    },
    {
        title: "Informative Site",
        visitSite: "",
        gradient: "linear-gradient(#614385, #516395)"
        
    },
]

let showSiteInformation = () => {
    let create;
    for (let i of siteInformationContainer) {
        create = ` <div class="each-information-container" style="background: ${i.gradient};">
            <p>${i.title}</p>
            <a href="${i.visitSite}" ta,
            gradient: "linear-gradient()"rget="_blank">${i.title}</a>
        </div> `
        document.querySelector(".site-information-container").insertAdjacentHTML("beforeend", create)
    }
}

showSiteInformation()
