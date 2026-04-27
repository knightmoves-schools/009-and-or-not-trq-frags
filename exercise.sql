-- Add your SQL here
SELECT * FROM EXPLOYEE
WHERE SALARY < 1700
AND (TOWN = 'Atlanta' OR TOWN = 'Nashville');