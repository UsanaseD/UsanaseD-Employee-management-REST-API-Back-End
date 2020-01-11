export const managers = `

CREATE TABLE IF NOT EXISTS managers(
id serial PRIMARY KEY,
firstname VARCHAR (50) NOT NULL,
lastname VARCHAR (50) NOT NULL,
national_id_number VARCHAR(255) NOT NULL,
Phone VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL,
DoB VARCHAR (20) NOT NULL,
status VARCHAR(255) NOT NULL ,
position VARCHAR(255) NULL DEFAULT 'manager',
password VARCHAR(255) NOT NULL,	
createdOn TIMESTAMP NOT NULL
)
`;

export const employees = `

CREATE TABLE IF NOT EXISTS employees(
id serial PRIMARY KEY,
firstname VARCHAR (50) NOT NULL,
lastname VARCHAR (50) NOT NULL,
national_id_number VARCHAR(255) NOT NULL,
Phone VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL,
DoB VARCHAR (20) NOT NULL,
status VARCHAR(255) NOT NULL ,
position VARCHAR(255) NULL ,
createdOn TIMESTAMP NOT NULL
)
`;
