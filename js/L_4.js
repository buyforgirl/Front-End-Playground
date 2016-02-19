// L4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books. Go to the editor 
// var library = [ 
//     {
//         title: 'Bill Gates',
//         author: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         title: 'Steve Jobs',
//         author: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         author: 'Suzanne Collins',
//         readingStatus: false
//     }];
function displayReadingStatus(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i].readingStatus === true) {
           console.log("you have read:" + array[i].title + " " + array[i].author); 
        } else {
            console.log("you still need read:" + array[i].title + " " + array[i].author);
        }
    }
}

var library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }];

    displayReadingStatus(library);