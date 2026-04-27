-- Add your SQL here
SELECT * FROM Employee
WHERE SALARY < 1700
AND (LOCATION = 'Atlanta' OR LOCATION = 'Nashville');