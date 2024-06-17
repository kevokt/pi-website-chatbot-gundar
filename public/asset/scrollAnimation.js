const hidden = document.querySelectorAll('.hidden');

const intersect = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
    })
}) 

hidden.forEach(el => intersect.observe(el));