

function loadStudentDetails(StdData) {
	var ulTag = document.createElement("ul");
	var li1 = document.createElement("li"); 
	li1.setAttribute("class", "StdDetails");

	var img = document.createElement("img");
	img.setAttribute("src", StdData.imageUrl);
	li1.append(img);


	var div1 = document.createElement("div");
	div1.innerText = "Student Name : " + StdData.name;	
	li1.append(div1);

	var div2 = document.createElement("div");
	div2.innerText = "Student Age : " + StdData.Age;
	li1.append(div2);

	var div3 = document.createElement("div");
	div3.innerText = "Gender : " + StdData.Gender;
	li1.append(div3);

	
	var div4 = document.createElement("div");
	div4.innerText = "Avg : " + StdData.Avg;
	li1.append(div4);

	var div5 = document.createElement("div");
	div5.innerText = "Grade : " + StdData.Grade;
	li1.append(div5);

	ulTag.append(li1)

	document.querySelector("#container").append(ulTag);
}

function loadData() {
	for(var i = 0 ; i < StdDetails.length; i++) {
		loadStudentDetails(StdDetails[i]);
	}

}

loadData();