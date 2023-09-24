let url="http://universities.hipolabs.com/search?name=";
let btn=document.querySelector("button");


btn.addEventListener("click",async()=>{
    //select the input field and extract its inputed value for search
    let country=document.querySelector("input").value;
    // console.log(country);
    // getcolleges( country);//

    let collegesarray= await getcolleges(country);
    console.log(collegesarray);
    //now time to show it in our webpage
    show(collegesarray);

})

function show(collegesarray){
 
    let list= document.querySelector("#list");

    list.innerText=" ";//here the innertext is empty as  when
                    //the function will be loaded the screen should be empty
                    //remove l.n.-22 search for two colleges one after antother
                    //without refreshing to see changes
    
for( col of collegesarray){
        console.log(col.name);
        //now create the li tag for ul tag created in index.html
        let li=document.createElement("li");
        li.innerText=col.name;
        list.appendChild(li);

    }
}

async function getcolleges(country){
    try{
        let res = await axios.get(url+country);
        console.log(res.data);
        return res.data;
    }
    catch(e){
        console.log("error",e);
        return []; //return empty array
    }
}
