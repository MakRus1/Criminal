let onEntry = function(entry, observer)
{
	entry.forEach(change => {
		if (change.isIntersecting)
		{
			change.target.classList.add('element-show');
		}
		else
		{
			change.target.classList.remove('element-show');
		}
	});
}

let options = {
	root: null,
	rootMargin: '5px',
	treshold: 0.5
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let el of elements)
{
	observer.observe(el);
}