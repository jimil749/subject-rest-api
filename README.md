# Subject Management REST-API (Tested with Postman)

## Endpoints

### User

1. `/` --> `Landing Page`
2. POST `/users/register` --> register a user
3. POST `/user/authenticate` --> user auth

### Subjects

1. GET `/subjects` --> Create a subject
2. GET `/subjects/:subjectID` --> Get subject by ID
3. POST `/subjects` --> Add a new subject
4. PUT `/subjects/:subjectID` --> Update Subject by ID
5. DELETE `/subjects/:subjectID` --> Delete a Subject


## Subject Schema

```javascript
const SubjectSchema = new Schema({
  name: {
    type: String,
    trim: true,  
    required: true,
  },
  professor: {
    type: String,
    trim: true,
    required: true
  }
});
```

## User Schema

```javascript
const UserSchema = new Schema({
  name: {
    type: String,
    trim: true,  
    required: true,
 },
 email: {
    type: String,
    trim: true,
    required: true
 },
 password: {
    type: String,
    trim: true,
    required: true
  }
});
```

## Tech Stack

1. Runtime: Node.JS
2. REST Framework: Express
3. Database: MongoDB

## API-Tests using POSTMAN

![alt text](https://github.com/jimil749/subject-rest-api/blob/main/img/API-1.PNG)
User Registration

![alt text](https://github.com/jimil749/subject-rest-api/blob/main/img/API-2.PNG)
User Auth


![alt text](https://github.com/jimil749/subject-rest-api/blob/main/img/API-4.PNG)
GET Subjects


![alt text](https://github.com/jimil749/subject-rest-api/blob/main/img/Auth.PNG)
Auth Validation
