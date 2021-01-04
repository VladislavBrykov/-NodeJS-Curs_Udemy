//Модуль fs и его методы

const fs = require('fs')
const path = require('path');
//модуль

//создание папки
// fs.mkdir(path.join(__dirname, 'notes'), err => {
//     if(err) throw new Error(err)

//     console.log('папка создана');
// })

//создание файла принимает 3 параметра путь, в какую папку, имя файла
//который нужно создать, что записать в файл, ошибки
// fs.writeFile(path.join(__dirname, 'notes', 'my_newfile.txt'), 
// 'Hello World', //что записать в новый текстовый файл
// (err) => {
//     if(err) throw err
//     console.log('Файл был создан');
// }
// )

//добавить новый контент в файл
// fs.appendFile(
//     path.join(__dirname, 'notes', 'my_newfile.txt'),
//     ' Fron new text',
//     err => {
//         if(err) throw err

//         console.log('Файл был изменен');
//     }
// )

//достать содержимое файла
// fs.readFile(
//     path.join(__dirname, 'notes', 'my_newfile.txt'),
//     'utf-8',
//     (err, data) => {
//         if(err) throw err

//         console.log(data);
//     }
// )



//переименовать файл
fs.rename(
    path.join(__dirname, 'notes', 'newline.txt'),
    path.join(__dirname, 'notes', 'my_newfile.txt'),
    err => {
        if(err) throw err

        console.log('файл перименован');
    }
)
