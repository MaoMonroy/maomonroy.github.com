function retrieveData(url){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            var result = JSON.parse(this.responseText);
            buildWebPage(result);
        }
    }

    xhttp.open("GET", url, true);
    xhttp.send();
}

//Obtener valor del queryString
function findGetParameter(parameterName){
    var result = null;
    tmp = [];
    var items = location.search.substr(1).split("&");
    for (var i = 0; i < items.length; i++){
        tmp = items[i].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
}

//Cargamos el artículo en la página
function loadArticle(){
    //Obtener el detalle del articulo
    var articleId = findGetParameter("id");
    var articleUrl = './data/data-' + articleId + '.json';
    retrieveData(articleUrl);
}

//Construir la página
function buildWebPage(result)
{
    document.getElementById("article").innerHTML = result.description;
    document.getElementById("article-title").innerHTML = result.title;
}

loadArticle();