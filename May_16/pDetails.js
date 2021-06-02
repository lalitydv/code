

function loadProductDetails(pData) {
	var ulTag = document.createElement("ul");
	var li1 = document.createElement("li"); 
	li1.setAttribute("class", "pDetails");

	var div1 = document.createElement("div");
	div1.innerText = "Product Name : " + pData.name;	
	li1.append(div1);

	var div2 = document.createElement("div");
	div2.innerText = "Product Price : $" + pData.price;
	li1.append(div2);

	var div3 = document.createElement("div");
	div3.innerText = "Manufacturer : " + pData.manu;
	li1.append(div3);

	var img = document.createElement("img");
	img.setAttribute("src", pData.imageUrl);
	li1.append(img);

	var div4 = document.createElement("div");
	div4.innerText = "Rating : " + pData.rating;
	li1.append(div4);

	ulTag.append(li1)

	document.querySelector("#container").append(ulTag);
}

function loadData() {
	for(var i = 0 ; i < pDetails.length; i++) {
		loadProductDetails(pDetails[i]);
	}

}

loadData();