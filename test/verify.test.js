const fs = require('fs');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

function runScript(db, script) {
  const sql = fs.readFileSync(script, 'utf8');
  return new Promise((resolve, reject) => {
    db.all(sql, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}

describe('the SQL in the `exercise.sql` file', () => {
  let db;
  let scriptPath;
  
  beforeAll(() => {
    const dbPath = path.resolve(__dirname, '..', 'lesson9.db');
    db = new sqlite3.Database(dbPath);
    scriptPath = path.resolve(__dirname, '..', 'exercise.sql');
  });
  
  afterAll(() => {
    db.close();
  });
  
  it('Should exclude rows where the Salary is less than 1700 in the Employee table AND only include employees with a location of Atlanta or Nashville.', async () => {
      const results = await runScript(db, scriptPath);
    
      expect(
        results.every(
          employee =>
            (employee.SALARY < 1700) && (employee.LOCATION === 'Atlanta' || employee.LOCATION === 'Nashville')
        )
      ).toBe(true);

  });
});
