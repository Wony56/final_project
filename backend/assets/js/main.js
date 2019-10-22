import "../scss/styles.scss"

// const submit = () => {
//     const title = document.getElementsByName('title').value.trim();
//     const repetition = document.getElementsByName('repetition').value.trim();
//     const check = document.getElementsByName('check').value.trim();
//     const point = document.getElementsByName('point').value.trim();
//     const hashtag = document.getElementsByName('hashtag').value.trim();
//     const processes = document.getElementsByClassName('process-item');

//     const processList = processes.map(process => {
//         const data = {
//             file: process.getElementsByTagName('input')[0].files[0],
//             description: process.getElementsByTagName('textarea')[0].value.split("&&")
//         };

//         return data;
//     });

//     const hashtagList = hashtag.split(',');

//     const data = {
//         title,
//         repetition,
//         check,
//         point,
//         hashtag: hashtagList,
//         processList
//     }

//     fetch("http://localhost:8080/upload", {
//         method: 'POST',
//         body: JSON.stringify(data),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }).catch(error => console.log(error));
// }