const form = document.querySelector("#searchForm");
form.addEventListener("submit", async function (e) {
	e.preventDefault();
	const searchTerm = form.elements.query.value;
	const config = {params: {q: searchTerm} }
	const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
	displayCover(res.data);
	form.elements.query.value="";
})

const displayCover = (covers) => {
		for( let cover of covers){
			if(cover.show.image){
				const img = document.createElement("IMG");
				img.src = cover.show.image.medium
				document.body.append(img);
			}
		}
}
