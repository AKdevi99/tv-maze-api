
const moviebox = document.body.querySelector("#movieimagebox");
const submit = document.body.querySelector("#submit");
const searchbar = document.body.querySelector("#search");
submit.addEventListener("click",function(e) {
    e.preventDefault();
    const name = searchbar.value;
    moviebox.innerHTML= "";
    moviegenerate(name);

})


const moviegenerate = async(name) =>{
   try {
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${name}`)
    
    for(let movie of res.data){
    const image =movie.show.image ? movie.show.image.medium: "noimage.png ";
    const showname = movie.show.name;
    const newdiv = document.createElement("DIV");
    const newimg = document.createElement("IMG");
    newimg.classList.add("imgproperties");
    const newp = document.createElement("P");

    newdiv.classList.add("movie-item");

    newimg.src = image;
    newp.textContent = showname;
    newdiv.append(newimg,newp);
    moviebox.append(newdiv)
        
    }
   }catch(e)
   {
    console.log("error",e);
   }
    

    
}




