import joi from '@hapi/joi';
import { sign } from 'jsonwebtoken';
import bycript from 'bcrypt';
import dbClient from '../model/dbClient';
import { loginschema, signupschema } from '../helpers/schema';
import{
signInUserDb,
SignUpUser
} from '../model/dbQueries'


class ManagerController {
  // function to create login feature
static loginPost(req, res) {
    joi.validate(req.body, loginschema, (err, value) => {
      if (err) return res.send(err.details[0].message);
      return dbClient.then((db)=>db.query(signInUserDb,[value.email]).then((users)=>{
        if (users.rows.length === 0 ) return res.status(404).json({ status: 404, message: 'User is Unfound'});
        bycript.compare(value.password, users.rows[0].password, (errors, data) => {
        if (errors) return res.status(400).json({ status: 400, error: errors });
        if (!data) return res.status(400).json({ status: 400, error: data });
        sign({
          email: users.rows[0].email,
          national_id_number: users.rows[0].national_id_number,
        }, process.env.SECRETKEY, (errs, token) => {
          if (errs) return res.json({ err: errs  });
          res.status(200).json({ status: 200, message: 'User succefully Logged In', data: {
            token,
          },
        } );
        });
      });
    }).catch(errors => res.status(400).json({ status: 400, message: 'Bad request', data: errors })));
});
  }
  // function to create signup feature
 static signupPost(req, res) {
    joi.validate(req.body, signupschema, (err, value) => {
      if (err) return res.send(err.details[0].message);
      bycript.hash(value.password, 9, async (err, hashdpsswd) => {
       try {
          const db = await dbClient;
          try {
            const users = await db.query(signInUserDb, [value.email] );
            if (users.rows.length > 0)
              return res.status(409).json({ status: 409, message: 'User Exist in the database' });
            const Newuser = {
              firstname: value.firstname,
              lastname: value.lastname,
              national_id_number: value.national_id_number,
              Phone: `${+250} ${value.Phone}`,
              email: value.email,
              DoB: value.DoB,
              status: value.status,
              position: "Manager",
              password: hashdpsswd,
              CreatedOn: new Date(),
            };
            const db_1 = await dbClient;
            const _res = await db_1.query(SignUpUser, 
              [Newuser.firstname, Newuser.lastname,
                Newuser.national_id_number,
                Newuser.Phone, Newuser.email,
                Newuser.DoB,Newuser.status,Newuser.position,
                 Newuser.password,Newuser.CreatedOn])
            try {
              const db_2 = await dbClient;
              try {
                const users_1 = await db_2.query(signInUserDb, [Newuser.email]);
                  return res.status(201).json({ status: 201,
                     message: 'Manager succefully Signed up', 
                     data: Newuser
                     });
                
              }
              catch (rr) {
                return console.error(rr);
              }
            }
            catch (error) {
              return console.error(error);
            }
          }
          catch (err_1) {
            return console.log(err_1);
          }
        }
        catch (errs) {
          return console.log(errs);
        }
      });
    });
  }
}
export default ManagerController;
