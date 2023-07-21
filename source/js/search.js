fetch("../js/posts.json")
.then(function(response){
	return response.json();
})
.then(function(posts)
{
	document.querySelector('#input').addEventListener('keypress', function()
	{
		let input = document.querySelector('#input').value;
		let container = document.querySelector('#output');
		container.innerHTML = "";
		let out = "";
		for (let post of posts)
		{
			let title = post.title.toLowerCase();
			let desc = post.desc.toLowerCase();
			if ((title.indexOf(input.toLowerCase()) != -1 || desc.indexOf(input.toLowerCase()) != -1) && input !== "")
			{
				out += `
					<div class="search__item">
						<h1>${post.title}</h1>
						<p>${post.desc}</p>
						<a href='${post.url}'>Ссылка</a>
					</div>
				`;
			}
		}
		if (out == "")
		{
			out = '<div class="search__item"><h1>Ничего не найдено</h1></div>';
		}
		container.innerHTML = out;
	});
})