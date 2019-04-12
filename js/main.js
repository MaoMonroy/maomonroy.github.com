function retrieveData(url){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            var result = JSON.parse(this.responseText);
            buildWebPage(result);
        }
    }

    xhttp.open("GET", url, true);
    xhttp.send();
}

//Un valor del queryString
function findGetParameter(parameterName){
    var result = null;
    tmp = [];
    var items = location.search.substr(1).split("&");
    for (var index = 0; index < items.length; index++)
    {
        tmp = items[index].split("=");
        if(tmp[0] === parameterName) result = decodeURI(tmp[1]);
    }
    return result;
}

//Cargar las últimas noticias y llenar contenido
function loadLatestNews()
{
    var dataURL = './data/latest.json';
    var result = retrieveData(dataURL);
}

function buildWebPage(result)
{
    //Construir html
    var latestNews = '';

    //Iterar resultados
    for (var i = 0; i < result.latestNews.length; i++)
    {
        var title = "<h2><a href='./article.html?id=" + result.latestNews[i].id + "'>" + result.latestNews[i].title + "</a></h2>";
        var description = "<p>" + result.latestNews[i].description + "</p>";
        latestNews += title + description;
    }

    //Actualiza página con los datos
    document.getElementById("latestNews").innerHTML = latestNews;
}

loadLatestNews();