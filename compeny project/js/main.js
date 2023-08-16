function getSections() {
    let sections = data.sections
    document.getElementById("sections_container").innerHTML = ``
    for (section of sections) {
        document.getElementById("sections_container").innerHTML += `
            <div class="row d-flex  justify-content-center my-3  gap-3 ">
                <div class="fath-img col-md-5 col-sm-12 p-0 overflow-hidden border shadow-sm">
                    <img class="img_inm" src="./images/inrerior.PNG" alt="" width="100%" height="100%">
                </div>
            <div class="info border shadow-sm col-md-5 col-sm-12 p-4 d-flex align-items-start flex-column justify-content-center"
                style="background-color: #fff;">
                <div class="title border-2 border-bottom w-75 mx-auto"
                    style="border-color: rgb(234 181 104) !important;">
                    <h1 style="color: #99999b; font-weight: 400 !important;">${section.name}</h1>
                </div>
                <p style="font-size:15px;" class="w-75 mx-auto">${section.disc}</p>
            </div>
        </div>
    `
    }
}
getSections()

function getsection(item="") {
    let sectionType = item.innerHTML
    window.location = `sections.html?sectionType=${sectionType}`
    return sectionType
}
// _____
function menuClicked_triangle(item) {
    let liMenu = document.querySelectorAll(".liManu")
    for (li of liMenu) {
        li.classList.remove("triangle")
    }
    item.classList.add("triangle")

}

function menuClicked() {
    let menu = document.getElementById("menu")
    menu.classList.toggle("active")
}