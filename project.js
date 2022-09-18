
// let dataProject = []

// function addProject(event){
//     event.preventDeault()

//     let projectName = document.getElementById("project-name")
//     console.log(projectName);
// }

// let dataProject = []

// function addProject(event){
//     event.preventDefault()
    
//     let person = {
//         name : "Rahmat",
//         address : "Tangerang",
//     }
    
//     console.log(person);
//     dataProject.push(person)
//     console.log(dataProject);
// }

let dataProject = []

function addProject(event){
    event.preventDefault()

    let projectName = document.getElementById("project-name").value
    let projectDescription = document.getElementById("description").value

    let nodeJs = document.getElementById("node-js").checked
    let nextJs = document.getElementById("next-js").checked
    let reactJs = document.getElementById("react-js").checked
    let typeScript = document.getElementById("typeScript").checked

    let projectImage = document.getElementById("input-image").files

    projectImage = URL.createObjectURL(projectImage[0])


    if (nodeJs) {
        nodeJs = document.getElementById("node-js").value
    } else {nodeJs=""}
    if (reactJs) {
        reactJs = document.getElementById("react-js").value
    } else {reactJs=""}
    if (nextJs) {
        nextJs = document.getElementById("next-js").value
    } else {nextJs=""}
    if (typeScript) {
        typeScript = document.getElementById("typeScript").value
    } else {typeScript=""}

    let duration = getDuration()

    let project = {
        projectName,
        projectDescription,
        projectImage,
        nodeJs,
        reactJs,
        nextJs,
        typeScript,
        duration,

    }

    dataProject.push(project)

    // console.log(projectName);
    // console.log(projectDescription);
    // console.log(nodeJs);
    // console.log(reactJs);
    // console.log(nextJs);
    // console.log(typeScript);
    // console.log(projectImage);
    // console.log(duration);

    // console.log(dataProject);

    

    renderProject()
}

function renderProject(){

    document.getElementById("container").innerHTML = ``

    for (let index = 0; index < dataProject.length; index ++){
    document.getElementById("container").innerHTML +=  `<a href="" class="container-post">

    <div>
        <div class="container-image">
            <img src="${dataProject[index].projectImage}" alt="Project image">
        </div>
        <div class="container-title">
            <h2>${dataProject[index].projectName}</h2>
        </div>
        <div >
            <p class="container-duration">Durasi: ${dataProject[index].duration} bulan</p>
            <p class="container-description">${dataProject[index].projectDescription}</p>
        </div>
    </div>
    <div class="container-icon">
        <i class="${dataProject[index].nodeJs}"></i>
        <i class="${dataProject[index].nextJs}"></i>
        <i class="${dataProject[index].reactJs}"></i>
        <i class="${dataProject[index].typeScript}"></i>

    </div>
    <div class="container-option">
        <button class="container-option-left">edit</button>
        <button class="container-option-right">delete</button>
    </div>

</a>
`
    }
}

function getDuration(){

    let startDate = new Date (document.getElementById("start-date").value)
    let endDate = new Date(document.getElementById("end-date").value)
    
    let duration = endDate - startDate
    
    // console.log(startDate) 
    // console.log(endDate)
    // console.log(duration)
    
    let bulan = Math.floor (duration / ( 1000 * 3600 * 24 * 30))
    
    if (bulan < 10){bulan = "0"+ bulan}
    // console.log(bulan) 
    return bulan
    
    }