export const SignUpUser = `
INSERT INTO managers (firstname,lastname,national_id_number,Phone,
  email,DoB,status,position,password,CreatedOn) 
          VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)`;
;
export const NewEmp = `
INSERT INTO employees (firstname,lastname,national_id_number,Phone,
  email,DoB,status,position,CreatedOn) 
          VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)`;
;
export const signInUserDb = `
select * from managers where email=$1;
`;
export const InUserDb = `
select * from employees where email=$1;
`;
export const UserDb = `
select * from employees where phone=$1;
`;
export const UsDb = `
select * from employees where national_id_number=$1;
`;
export const allSameUserTypes = `
select * from managers where usertype=$1;
`;
export const deleteEmp = `
DELETE FROM employees WHERE id=$1;
`;
export const EditEmp =`
UPDATE employees SET firstname=$1,lastname=$2,national_id_number=$3,status=$4 WHERE id=$5;
`
;
export const SpecificEmp =`
select * from employees where id=$1;
`
;

export const StatusEmp =`
UPDATE employees SET status=$1 WHERE id=$2;
`
;
export const NameUserDb = `
select * from employees where firstname=$1;
`;
export const PositionUserDb = `
select * from employees where position=$1;
`;