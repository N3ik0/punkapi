$(document).ready(function(){
  $.ajax({
    method : 'GET',
    url :'https://api.punkapi.com/v2/beers/ '
  })
  .done(function(response){
    var beerMaker = "";
    console.log(response);
    for (var i = 0; i<response.length; i++){
                    beerMaker += `<div class = \"col-md-3 m-5 beerCards\"> \n <img class="img-fluid" src = \"${response[i].image_url}">\n`
                    beerMaker += `<h2 class="mt-4">${response[i].name}</h2>\n`
                    beerMaker += `<p class="mt-3">${response[i].brewers_tips}</p>\n`
                    /* beerMaker += `<a href="#" class="btn btn-warning"><i class="fa-solid fa-beer-mug-empty" style="color: #7a7a7a;"></i></a>` */
                    beerMaker += "\n</div>\n"
                    
    }
    $('#divBeer').html(beerMaker);
  })
})




{/* <div class="card" style="width: 18rem">
    <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
                <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
                </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div> */}