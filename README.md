# Pet-project-CRUD-API-Node.js
Road to Senior (ha-ha net)

# End-points
AUTH:
- /api/auth/register
- /api/auth/login

GET:
- /api/book/ - get a list of all books;
- /api/book/id - get a book by id;

POST:
- /api/book/ - create a book;

PATCH:
- /api/book/id - update the book by id;

DELETE
- /api/book/id - delete book by id;

# Models

User:
- email: String;
- password: String;

Book:
- name: String;
- description: String;
- cost: Number;
