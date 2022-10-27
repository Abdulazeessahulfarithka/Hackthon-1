document.body.innerHTML=
`<nav class="nav-container">
<h1 class="data1">Ice and Fire API<h1></nav>
<div id="container" class="main-container"></div>
<div class="main">
<label for="number">Enter your book number:</label><br>
<input type="text" value="" id="number"><br><br>
<button onclick="bookdetails()">Search</button>
</div>`
var data=document.createElement('div');
data.setAttribute("id","number1");
 document.body.append(data);
 

async function bookdetails(){
try{
        
        let bookinp=document.getElementById("number").value;
        let booklist = await fetch(`https://www.anapioficeandfire.com/api/books/${bookinp}`);
        let bookdata = await booklist.json();
        var date=bookdata.released;
        var date1=new Date(date).toDateString();
        var ele=document.getElementById("number1");
        ele.innerHTML=`<p><span>Name of Book:</span>${bookdata.name}</p>
        <p><span>ISBN:</span>${bookdata.isbn} </p>
        <p><span>Number of Pages:</span>${bookdata.numberOfPages} </p>
        <p><span>Authors Name:</span>${bookdata.authors}</p>
        <p><span>Publishers Name:</span>${bookdata.publisher} </p>
        <p><span>Released Date:</span>${date1}</p>
        <p><span>Character Names</span></p>`;
     for(var i=0;i<5;i++){
        let chardata=await fetch(bookdata.characters[i]);
        let char= await chardata.json();
      //   console.log(char);
        var foo=document.createElement("div");
        foo.setAttribute("id","number2");
        foo.innerHTML=`<ul><li>${char.name}</li></ul>`;
        var data=document.getElementById("number1");
        data.append(foo);
   }
   document.body.append(ele);
} catch(error){
        console.log(error);
   }
}
//var nav=document.createElement("nav")
//var nav=document.createElement("nav")
//nav.setAttribute("class","nav-container")

//var h1=document.createElement("h1")
//h1.setAttribute("class","data1")
//h1.innerHTML="Ice And Fire"

//var div=document.createElement("div")
//div.setAttribute("id","container")
//div.setAttribute("class","main-conainer")

//var div1=document.createElement("div")
//div1.setAttribute("class","main")


//var label=document.createElement("label")
//label.setAttribute("for","number")
//label.innerHTML="Enter Your book:"

//var br=document.createElement("br")
