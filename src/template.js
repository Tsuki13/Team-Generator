const managerIcon = '<i class="fas fa-mug-hot"></i>';

function generateHTML(data) {
    console.log(data)
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
            <div id="row" class="row justify-content-center">
    <div class="col-lg-4 col-md-6">
    <div class="card mb-4">
        <div class="card-header text-light">
            <h5 class="card-title">${data.name}</h5>
            <h6 class="card-subtitle mb-2">${managerIcon} Manger</h6>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">${data.id}</li>
                <li class="list-group-item">${data.email}</li>
                <li class="list-group-item">${data.officeNumber}</li>             
            </ul>
        </div>
    </div>
        </main>
    </body>
    </html>`
}


module.exports = generateHTML