const textArea = document.getElementById('textArea');
const tagsDiv = document.getElementById('tags');

document.addEventListener('DOMContentLoaded', function () {

    textArea.addEventListener('input', function () {
        const text = textArea.value;
        const options = text.split(',');

        tagsDiv.innerHTML = '';

        options.forEach((option) => {
            const newTextarea = document.createElement('div');
            newTextarea.className = 'tag';
            newTextarea.textContent = option;
            tagsDiv.appendChild(newTextarea);
        });
    });
});
