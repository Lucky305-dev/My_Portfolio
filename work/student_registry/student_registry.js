// // Book Class: Represents a book
// class Book {
//     constructor(title, author, isbn) {
//         this.title = title;
//         this.author = author;
//         this.isbn = isbn;
//     }
// }
// // UI Class: Handle UI Tasks 
// class UI {
//     static displayBooks() {
//         const StoredBooks = [
//             {
//                 title: 'Book One',
//                 author: 'John Doe',
//                 isbn: '343444'
//             },
//             {
//                 title: 'Book Two',
//                 author: 'Jane Doe',
//                 isbn: '45534'
//             }
//         ];

//         const books = StoredBooks;

//         books.forEach(book => UI.addBookToList(book));
//     }

//     static addBookToList(book) {
//         const list = document.querySelector('#book-list');

//         const row = document.createElement('tr');

//         row.innerHTML = `
//             <td>${book.title}</td>
//             <td>${book.author}</td>
//             <td>${book.isbn}</td>
//             <td><a href="#" class="btn btn-danger btn-sm delete">x</a></td>
//         `;

//         list.appendChild(row);
//     }

//     static deleteBook(el) {
//         if (el.classList.contains('delete')) {
//             el.parentElement.parentElement.remove();
//         }
//     }

//     static clearFields() {
//         document.querySelector('#title').value = '';
//         document.querySelector('#author').value = '';
//         document.querySelector('#isbn').value = '';
//     }
// }
// // Store Class: Handles storage

// // Event: Display Books
// document.addEventListener('DOMContentLoaded', UI.displayBooks);
// // Event: Add Book
// document.querySelector('#book-form').addEventListener('submit', e => {
//     // get form values 
//     const title = document.querySelector('#title').value;
//     const author = document.querySelector('#author').value;
//     const isbn = document.querySelector('#isbn').value;

//     // Instatiate book
//     const book = new Book(title, author, isbn);

//     // Add Book to UI
//     UI.addBookToList(book);

//     // Clear fields
//     UI.clearFields();

//     console.log(book);

// });
// // Event: Remove a book

// document.querySelector('#book-list').addEventListener('click', e => {
//     UI.deleteBook(e.target);
// });


// student Class: Represents a student
class Student {
    constructor(name, surname, studentNumber) {
        this.name = name;
        this.surname = surname;
        this.studentNumber = studentNumber;
    }
}
// UI Class: Handle UI Tasks 
class UI {
    static displayStudents() {
        const StoredStudents = [
            {
                name: 'John',
                surname: 'Doe',
                studentNumber: '20398'
            }
            // {
            //     name: 'Jill',
            //     surname: 'Doe',
            //     studentNumber: '28654'
            // }
        ];

        const students = StoredStudents;

        students.forEach(student => UI.addStudentToList(student));
    }

    static addStudentToList(student) {
        const list = document.querySelector('#student-list');

        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.surname}</td>
            <td>${student.studentNumber}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">x</a></td>
        `;

        list.appendChild(row);
    }

    static deleteStudent(el) {
        if (el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }

    static clearFields() {
        document.querySelector('#name').value = '';
        document.querySelector('#surname').value = '';
        document.querySelector('#studentNumber').value = '';
    }
}
// Store Class: Handles storage

// Event: Display Student
document.addEventListener('DOMContentLoaded', UI.displayStudents);
// Event: Add Student
document.querySelector('#student-form').addEventListener('submit', e => {
    // get form values 
    const name = document.querySelector('#name').value;
    const surname = document.querySelector('#surname').value;
    const studentNumber = document.querySelector('#studentNumber').value;

    // Instatiate Student
    const student = new Student(name, surname, studentNumber);

    // Add Student to UI
    UI.addStudentToList(student);

    // Clear fields
    UI.clearFields();

    console.log(student);

});
// Event: Remove a Student

document.querySelector('#student-list').addEventListener('click', e => {
    UI.deleteStudent(e.target);
});

