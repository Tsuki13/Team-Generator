const managerIcon = '<i class="fas fa-mug-hot"></i>';
const engineerIcon = '<i class="fas fa-glasses"></i>';
const internIcon = '<i class="fas fa-user-graduate"></i>';

function generateHTML(data) {
    console.log(data)
    let teamMembers = []

    data.forEach(member => {
        if (member.getRole() === "Manager") {
            let card1 = managerCard(member);
            teamMembers.push(card1);
        } else if (member.getRole() === "Engineer") {
            let card2 = engineerCard(member);
            teamMembers.push(card2);
        } else {
            let card3 = internCard(member);
            teamMembers.push(card3);
        }
    });

    return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css">
            <link rel="stylesheet" href="../assets/style.css">
            <script src="https://kit.fontawesome.com/ef1f68d60a.js" crossorigin="anonymous"></script>
        </head>
        <body>
        <header meta name="viewport" class="text-light container mb-5">
                <h1>My Team</h1>
            </header>
            <main class="container">
                <div class="row justify-content-center">
            ${teamMembers.join('')}
                </div>
            </main>
        </body>
        </html>`
}

const managerCard = (manager) => {
    return `<div class="col-lg-4 col-md-6 ">
            <div class="card mb-4">
                <div class="card-header text-light">
                    <h5 class="card-title">${manager.name}</h5>
                    <h6 class="card-subtitle mb-2">${managerIcon} Manger</h6>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">${manager.id}</li>
                        <li class="list-group-item">${manager.email}</li>
                        <li class="list-group-item">${manager.officeNumber}</li>             
                    </ul>
                </div>
            </div>
            </div>`
}

const engineerCard = (engineer) => {
    return `<div class="col-lg-4 col-md-4">
            <div class="card mb-4">
                <div class="card-header text-light">
                    <h5 class="card-title">${engineer.name}</h5>
                    <h6 class="card-subtitle mb-2">${engineerIcon} Engineer</h6>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">${engineer.id}</li>
                        <li class="list-group-item">${engineer.email}</li>
                        <li class="list-group-item">${engineer.github}</li>             
                    </ul>
                </div>
            </div>
            </div>`
}

const internCard = (intern) => {
    return `<div class="col-lg-4 col-md-4">
            <div class="card mb-4">
                <div class="card-header text-light">
                    <h5 class="card-title">${intern.name}</h5>
                    <h6 class="card-subtitle mb-2">${internIcon} Intern</h6>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">${intern.id}</li>
                        <li class="list-group-item">${intern.email}</li>
                        <li class="list-group-item">${intern.school}</li>             
                    </ul>
                </div>
            </div>
            </div>`

}
module.exports = generateHTML