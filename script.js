let recentReadsCollection = [
{
	"name": "My Antonia",
	"author": "Willa Cather",
	"image": "myantonia.jpg",
},
{
	"name": "Out of Africa",
	"author": "Karen Blixen",
	"image": "outofafrica.jpg",
},
{
	"name": "The Bell Jar",
	"author": "Sylvia Plath",
	"image": "thebelljar.jpg",
},
{
	"name": "When I Was Five I Killed Myself",
	"author": "Howard Buten",
	"image": "wheniwasfive.jpg",
},
{
	"name": "The Reader",
	"author": "Bernhard Schlink",
	"image": "thereader.jpg",
},
{
	"name": "Lucky Jim",
	"author": "Kingsley Amis",
	"image": "luckyjim.jpg",
}
]



function displayItems() {
	let recentReadsContainer = document.getElementById('content');
	

	for(let book of recentReadsCollection){
		let recentBook = document.createElement('div');
		recentBook.className = 'myBook';

		let bookCover = document.createElement('img');
		bookCover.className = 'bookCover';
		bookCover.src = book.image;
		recentBook.appendChild(bookCover);

		let bookTitle = document.createElement('h1');
		bookTitle.className = 'bookTitle';
		bookTitle.textContent = book.name;
		recentBook.appendChild(bookTitle);

		let bookAuthor = document.createElement('h2');
		bookAuthor.className = 'bookAuthor';
		bookAuthor.textContent = book.author;
		recentBook.appendChild(bookAuthor);

		recentReadsContainer.appendChild(recentBook);
	}
}

displayItems();
