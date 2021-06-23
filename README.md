## Steps

1. Change API ENdpoint in `.env` file.  Set it against `REACT_APP_AUTH_API_ENDPOINT` variable.

2. Define a Role in `config.js`. You can either use INtegers, or Change the DATABASE to use Roles as "TEACHER","STUDENT","SECRETARY", etc and define the same in `config.js` file.

3. Alternative to #2, is to have an API to return the roles and their Ids and then Front end will call that API to store the Roles in Redux. (Not Implemented Yet)


## available scripts

 1.  `npm install`


 2. `npm start`
