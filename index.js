let align  = document.querySelector(".align");
let url = `https://newsapi.org/v2/everything?q=tesla&from=2023-03-29&sortBy=publishedAt&apiKey=6cee01e87f894b2c9da7884afe9ca628`;
fetch(url)
    .then((e)=>{
        return e.json();
    })
    .then((e)=>{
        console.log("this is the article -> " , e);
        align.innerHTML = e.articles[1].author;
    })