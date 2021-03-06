
const News ={

search(crisis: string){
    var url = "https://newscatcher.p.rapidapi.com/v1/search_free?q=philippines%20"+crisis+"&lang=en&media=False";
    return fetch(url, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "039ddef734msh07919f94290861dp14440fjsna239b77e2334",
            "x-rapidapi-host": "newscatcher.p.rapidapi.com"
        }
    }).then(response =>{
        return response.json();
    }).then(jsonResponse => {
        if(jsonResponse.articles){
            return jsonResponse.articles.map(((article: {author: string,
                clean_url: string,
                country: string,
                language: string,
                link: string,
                published_date: string,
                rank: string,
                rights: string,
                summary: string,
                title: string,
                topic: string,
                _id: string,
                _score: number}) =>{
                
                return {
                    title: article.title,
                    rights: article.rights,
                    url: article.link      
                }
            }));
        }
    });
}
}

export default News;