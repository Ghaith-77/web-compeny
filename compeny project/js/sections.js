function getSectionsType() {
    let urlparmes = new URLSearchParams(window.location.search)
    let SectionsType = urlparmes.get("sectionType")
    return SectionsType
}

function sendprojectinfo() {
    if (getSectionsType() == `Interior`) {
        let projectinfo = document.getElementById("project_title").innerHTML + document.getElementById("project_date").innerHTML
        window.location = `project_info.html?projectinfo=${projectinfo.replace(" ", '')}`
        return projectinfo
    }

}

function gettringle() {
    let liMenu = document.querySelectorAll(".liManu")
    for (li of liMenu) {
        li.innerHTML == getSectionsType() ? li.classList.toggle("triangle") : li.classList.remove("triangle")

    }
    // item.classList.add("triangle")


}
gettringle()

function GetInformaionForSection() {
    let section = data.sections.filter((s) => {
        return s.id === getSectionsType()
    })[0]
    document.getElementById("container").innerHTML = ``
    document.getElementById("container").innerHTML = `
         <div class="title-container border-2 border-bottom"
            style="color: #99999b; margin-left: 60px; width: max-content; padding-right: 40px; border-color: rgb(234 181 104)!important ;">
            <h1 style="font-weight: 400;">
                ${section.name}
            </h1>
        </div>
        <div id="cards" class="contianer mt-5"style="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-evenly;"></div>
    `
    let projects = section.project
    for (project of projects) {
        document.getElementById("cards").innerHTML += `
            <div class="card border-0 shadow-sm mt-5" onclick="sendprojectinfo()"  
            style="cursor: pointer;  width: 25rem; background-color: rgb(239 239 239) !important ;">
                <div class="fathimg card-img-top" style="height: 50% ; overflow: hidden;">
                    <img src="./images/EXTERIOR.PNG" class="img img_inm" alt="...">
                </div>               
                <div class="card-body " style="color: rgb(234 181 104)" ;>
                    <h3 id="project_title">${project.title}</h3>
                    <p class="card-text" id="project_date">${project.date}<p>
                </div>
            </div>
        `
    }

}
GetInformaionForSection()
