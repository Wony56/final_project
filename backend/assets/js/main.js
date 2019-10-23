import "../scss/styles.scss"

document.getElementById('addImage').addEventListener('click', () => {
    var imageContainer = document.getElementById('image-container');

    var process = document.createElement("DIV");
    process.className = "process-item";

    var input = document.createElement("INPUT");
    input.setAttribute("type", "file");
    input.setAttribute("name", "imageFile");
    input.setAttribute("accept", "image/*");

    var textarea = document.createElement("TEXTAREA");
    textarea.setAttribute("name", "description");
    textarea.setAttribute("rows", "10");
    textarea.setAttribute("cols", "50");
    textarea.setAttribute("placeholder", "&&로 입력을 구분!");

    process.appendChild(input);
    process.appendChild(textarea);

    imageContainer.appendChild(process);
});