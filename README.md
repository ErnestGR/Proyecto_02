# Class Project 02

## Installation
Clone this project into your machine with:
```bash
  git clone https://github.com/ErnestGR/Proyecto_02.git
```

Then to install the project dependencies open that directory inside your terminal and run:
```
  npm install
```

You'll have to create a new `.env` file to store your sensitive information, you can use `.sampleenv` as a base for your new file.

If you do not have the Database created yet, or have previously deleted it, please run the following script:
```
  npm run db:create
```

Lastly, you can simply run the following script to start the project:
```
  npm start
```

## Folder Structure
We're following the MVC conventions for this project:
```
    config        //Here we put all our configuration files
    controllers   //Where we put all our controllers
    db            //Database Maintenance
    middlewares   //Custom midddlewares
    migrations    //Auto-Generated Migrations for Sequelize
    models        //Database Models
    seeders       //Seeders to populate our database
    views         //View templates
    .sequelizerc  //Sequelize configuration
    server.js     //Our application's entrypoint
```
