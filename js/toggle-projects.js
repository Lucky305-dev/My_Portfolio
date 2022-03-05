const workBtn = document.getElementById('workBtn');
const toggleContent = document.getElementById('toggle-content');

workBtn.addEventListener('click', toggleElement);

function toggleElement() {
    if(workBtn.classList.contains('off')) {
        console.log('open');
        workBtn.classList.add('on');
        workBtn.classList.remove('off');
        workBtn.innerText = 'Show less';
        toggleContent.classList.remove('closed');
        toggleContent.classList.add('opened');
    } else{
        console.log('close');
        workBtn.classList.add('off');
        workBtn.classList.remove('on');
        workBtn.innerText = 'Show more';
        toggleContent.classList.remove('opened');
        toggleContent.classList.add('closed');
    }
}