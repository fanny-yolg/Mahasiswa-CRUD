# CRUD Mahasiswa

# END POINTS
# STUDENT API

## CREATE STUDENT

---

### Method POST (http://localhost:3000/student)

### Request Header

> none

### Request Body

> "name" : "<asset_name>" <br> "NIM" : "<asset_NIM>"

### Response (200)

> "msg": "<success_msg>" <br>"data": "<data_created>"

### Response (400 - Bad Request)

> "error": "<error_msg>"

---

<br>

## GET ALL STUDENT

---

### Method GET (http://localhost:3000/student)

### Request Header

> none

### Request Body

> none

### Response (200)

> "message": "<success_msg>" <br> "data": "<all_student>"

### Response (400 - Bad Request)

> "error": "<error_msg>"

---

<br>

## GET STUDENT BY ID

---

### Method GET (http://localhost:3000/student/:id)

### Request Header

> none

### Request Body

> none

### Response (200)

> "message": "<success_msg>" <br> "data": "<data_student>"

### Response (400 - Bad Request)

> "error": "<error_msg>"

---

<br>

## UPDATE STUDENT

---

### Method PUT (http://localhost:3000/student/:id)

### Request Header

> none

### Request Body

> "name" : "<asset_name>" <br> "NIM" : "<asset_NIM>"

### Response (200)

> "message": "<success_msg>"

### Response (404 - Not Found)

> "error": "<error_msg>"

---

<br>

## DELETE STUDENT

---

### Method DELETE (http://localhost:3000/student/:id)

### Request Header

> none

### Request Body

> none

### Response (200)

> "message": "<success_msg>"

### Response (404 - Not Found)

> "error": "<error_msg>"

---

<br>

# SUBJECT API

## CREATE SUBJECT

---

### Method POST (http://localhost:3000/subject)

### Request Header

> none

### Request Body

> "name" : "<asset_name>"

### Response (200)

> "msg": "<success_msg>" <br>"data": "<subject_created>"

### Response (400 - Bad Request)

> "error": "<error_msg>"

---

<br>

## GET ALL SUBJECT

---

### Method GET (http://localhost:3000/subject)

### Request Header

> none

### Request Body

> none

### Response (200)

> "message": "<success_msg>" <br> "data": "<all_subjects>"

### Response (400 - Bad Request)

> "error": "<error_msg>"

---

<br>

## GET SUBJECT BY ID

---

### Method GET (http://localhost:3000/subject/:id)

### Request Header

> none

### Request Body

> none

### Response (200)

> "message": "<success_msg>" <br> "data": "<data_subject>"

### Response (404 - Not Found)

> "error": "<error_msg>"

---

<br>

## UPDATE SUBJECT

---

### Method PUT (http://localhost:3000/subject/:id)

### Request Header

> none

### Request Body

> "name" : "<asset_name>"

### Response (200)

> "message": "<success_msg>"

### Response (404 - Not Found)

> "error": "<error_msg>"

---

<br>

## DELETE SUBJECT

---

### Method DELETE (http://localhost:3000/subject/:id)

### Request Header

> none

### Request Body

> none

### Response (200)

> "message": "<success_msg>"

### Response (404 - Not Found)

> "error": "<error_msg>"

---

<br>

# KRS API

## CREATE KRS

---

### Method POST (http://localhost:3000/krs)

### Request Header

> none

### Request Body

> "SubjectId" : "<asset_SubjectId>" <br> "StudentId" : "<asset_StudentId>"

### Response (200)

> "msg": "<success_msg>" <br> "data": "<krs_created>"

### Response (400 - Bad Request)

> "error": "<error_msg>"

---

<br>

## GET ALL KRS

---

### Method GET (http://localhost:3000/krs)

### Request Header

> none

### Request Body

> none

### Response (200)

> "message": "<success_msg>" <br> "data": "<all_krs>"

### Response (400 - Bad Request)

> "error": "<error_msg>"

---

<br>

## GET KRS BY ID

---

### Method GET (http://localhost:3000/krs/:id)

### Request Header

> none

### Request Body

> none

### Response (200)

> "message": "<success_msg>" <br> "data": "<data_krs>"

### Response (404 - Not Found)

> "error": "<error_msg>"

---

<br>

## UPDATE KRS

---

### Method PUT (http://localhost:3000/krs/:id)

### Request Header

> none

### Request Body

> "SubjectId" : "<asset_SubjectId>" <br> "StudentId" : "<asset_StudentId>"

### Response (200)

> "message": "<success_msg>"

### Response (404 - Not Found)

> "error": "<error_msg>"

---

<br>

## DELETE SUBJECT

---

### Method DELETE (http://localhost:3000/krs/:id)

### Request Header

> none

### Request Body

> none

### Response (200)

> "message": "<success_msg>"

### Response (404 - Not Found)

> "error": "<error_msg>"

---

<br>

