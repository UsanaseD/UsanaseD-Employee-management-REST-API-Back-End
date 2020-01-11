/* eslint-disable class-methods-use-this */

import joi from '@hapi/joi';
import { Employeeschema, editSchema, offchema } from '../helpers/schema';
import dbClient from '../model/dbClient';
import {
  NewEmp, InUserDb, UserDb, UsDb,
  deleteEmp, EditEmp, SpecificEmp, StatusEmp,
} from '../model/dbQueries';


class employeeController {
  // function to register an Employee
  employeeCreation(req, res) {
    let Newuser;
    joi.validate(req.body, Employeeschema, (err, value) => {
      if (err) return res.send(err.details[0].message);
      return dbClient.then((db) => db.query(InUserDb, [value.email]).then((employees) => {
        if (employees.rows.length > 0) return res.status(409).json({ status: 409, message: 'User is already Recorded' });
        return dbClient.then((db) => db.query(UserDb, [`${+250} ${value.Phone}`]).then((employees) => {
          if (employees.rows.length > 0) return res.status(409).json({ status: 409, message: 'User is already Recorded' });
          return dbClient.then((db) => db.query(UsDb, [value.national_id_number]).then((employees) => {
            if (employees.rows.length > 0) return res.status(409).json({ status: 409, message: 'User is already Recorded' });
            Newuser = {
              firstname: value.firstname,
              lastname: value.lastname,
              national_id_number: value.national_id_number,
              Phone: `${+250} ${value.Phone}`,
              email: value.email,
              DoB: value.DoB,
              status: value.status,
              position: value.position,
              CreatedOn: new Date(),
            };

            return dbClient.then((newemp) => newemp.query(NewEmp,
              [Newuser.firstname, Newuser.lastname,
                Newuser.national_id_number,
                Newuser.Phone, Newuser.email,
                Newuser.DoB, Newuser.status, Newuser.position,
                Newuser.CreatedOn])
              .then(() => res.status(201).json({ status: 201, message: 'Employee successfully Recorded', data: Newuser }))
              .catch((error) => res.status(502).json({ status: 502, err: error })));
          }).catch((error) => res.status(400).json({ status: 400, message: 'bad request', data: error })))
            .catch((querError) => res.status(400).json({ status: 400, message: 'Bad request', data: querError }));
        }).catch((error) => res.status(400).json({ status: 400, message: 'bad request', data: error })))
          .catch((querError) => res.status(400).json({ status: 400, message: 'Bad request', data: querError }));
      }).catch((error) => res.status(400).json({ status: 400, message: 'bad request', data: error })))
        .catch((querError) => res.status(400).json({ status: 400, message: 'Bad request', data: querError }));
    });
  }

  // funcction to delete an employee
  deleteEmp(req, res) {
    return dbClient.then((emp) => emp.query(deleteEmp, [parseInt(req.params.id, 10)])
      .then(() => res.status(200).json({ status: 200, message: 'Employee Deleted successfully ' }))
      .catch((dberror) => res.status(502).json({ status: 502, message: dberror })));
  }

  // function to edit employee
  PatchEmployee(req, res) {
    joi.validate(req.body, editSchema, (err, value) => {
      if (err) return res.send(err.details[0].message);
      return dbClient.then((client) => client.query(SpecificEmp, [req.params.id])
        .then((employees) => {
          if (employees.rows.length === 0) return res.status(404).json({ status: 404, message: 'Employee cant be found' });
          return dbClient.then((newEmp) => newEmp
            .query(EditEmp, [value.firstname, value.lastname, value.national_id_number, value.status, employees.rows[0].id])
            .then(() => res.status(201).json({ status: 201, data: employees.rows[0] }))
            .catch((errors) => res.status(400).json({ status: 400, data: errors })))
            .catch((dberr) => res.status(400).json({ status: 400, data: dberr }));
          // eslint-disable-next-line arrow-parens
        }).catch((error) => res.status(400).json({ status: 400, data: error })))
        .catch((queryError) => res.status(400).json({ status: 400, message: 'Bad request', data: queryError }));
    });
  }

  // function to activate an employee
  offstatus(req, res) {
    joi.validate(req.body, offchema, (err, value) => {
      if (err) return res.send(err.details[0].message);
      return dbClient.then((client) => client.query(SpecificEmp, [req.params.id])
        .then((employees) => {
          if (employees.rows.length === 0) return res.status(404).json({ status: 404, message: 'Employee cant be found' });
          return dbClient.then((newEmp) => newEmp
            .query(StatusEmp,
              [value.status, employees.rows[0].id])
            .then(() => res.status(201).json({ status: 201, data: employees.rows[0] }))
            .catch((errors) => res.status(400).json({ status: 400, data: errors })))
            .catch((dberr) => res.status(400).json({ status: 400, data: dberr }));
        }).catch((error) => res.status(400).json({ status: 400, data: error })))
        .catch((queryError) => res.status(400).json({ status: 400, message: 'Bad request', data: queryError }));
    });
  }


  employeeSearch(req, res) {
    return dbClient.then((emp) => emp.query(SpecificEmp, [req.params.id])
      .then((employees) => {
        res.status(200).json({ status: 200, data: employees.rows[0] });
      }).catch((dberr) => res.status(400).json({ status: 400, message: 'Bad request', data: dberr })));
  }
}
export default new employeeController();
