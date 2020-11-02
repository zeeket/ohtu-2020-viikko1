const sqlite3 = require('sqlite3').verbose();	
let db = new sqlite3.Database('./db/roguelike.db',(err) => {
    if(err){
        return console.error(err.message);
    }
    console.log('Connected to the SQlite database.');
});

function printFromDB(){
db.serialize(() => {
  db.each(`SELECT role as id,
                  Name as name
           FROM classes`, (err, row) => {
    if (err) {
      console.error(err.message);
    }
    console.log(row.id + "\t" + row.name);
  });
});
}

db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});

