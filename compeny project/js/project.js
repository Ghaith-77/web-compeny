function getprojectinfo() {
    let urlparmes = new URLSearchParams(window.location.search)
    let projectinfo = urlparmes.get("projectinfo")
    return projectinfo
}
getprojectinfo()

function projectinforma() {

    let projectinfo = getprojectinfo().replace(/([A-Z])/g, ' $1').replace(/([a-zA-Z])(\d)/, '$1 $2')
    document.getElementById("dataforproject").innerHTML = projectinfo

}
projectinforma()