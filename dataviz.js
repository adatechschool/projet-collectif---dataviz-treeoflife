function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

// heure qui passe
function startTime(i) {
  // console.log(i)



  //var spanElement = document.querySelectorAll('g')

  // span.Element.array.forEach(element => {
  //   element.addEventListener('time',function(){
  //     element.classList.add('fall')
  //   });
  // });

  // changement de couleur d'une feuille (marche pas pour l'instant)
  
  // let animation = document.getElementById('Feuille1');
  // Feuille1.animate('t1000, 8888, r120');
  
  
  // let feuille = feuilleSVG.select('Feuille1');
  //     // changement de couleur de la feuille
  //     if(secondes > 0){feuille.animate({fill:"#104210"}, 10000)}
  //     if(secondes > 10){feuille.animate({fill:"#6A8820"}, 10000)}
  //     if(secondes > 20){feuille.animate({fill:"#D3C02F"}, 10000)}
  //     if(secondes > 30){feuille.animate({fill:"#DF9A10"}, 10000)}
  //     if(secondes > 40){feuille.animate({fill:"#D85E00"}, 10000)}
  //     if(secondes > 50){feuille.animate({fill:"#D41E00"}, 10000)}

  //feuille qui tombe et tourne

}

function leafClick(){
  const leaves = document.querySelectorAll('svg > g > g:nth-child(n+3)');
  for (const leaf of leaves) {
    // const paths = leaf.querySelectorAll('path[style*="fill:rgb"]');
    leaf.addEventListener('click', function(){
      console.log(leaf);
      getApi(function(json){
      console.log(json.response.docs[0].web_url);
      })
    })
        // for (const path of paths) {
      // const leafColor = Snap(path);
      // if (i > 0) { leafColor.animate({ fill: "#104210" }, 10000) }
      // if (i > 20) { leafColor.animate({ fill: "#6A8820" }, 10000) }
      // if (i > 40) { leafColor.animate({ fill: "#D3C02F" }, 10000) }
      // if (i > 60) { leafColor.animate({ fill: "#DF9A10" }, 10000) }
      // if (i > 80) { leafColor.animate({ fill: "#D85E00" }, 10000) }
      // if (i > 100) { leafColor.animate({ fill: "#D41E00" }, 10000) }
      // leafColor.animate({ transform: 't100,-88888'}, 500000);
      // console.log('i:',i)
    // }
  }
  
}
function setTime(){
  t = setInterval(function(){
    getHours();
  }, 500);
}
function getHours(){
    var today = new Date();
  var heures = today.getHours();
  var minutes = today.getMinutes();
  var secondes = today.getSeconds();
  minutes = minutes < 10 ? "0" + minutes : minutes;
  secondes = secondes < 10 ? "0" + secondes : secondes;
  document.getElementById('heureExacte').innerHTML = heures + ":" + minutes + ":" + secondes;
}
function getApi(callback){
  const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
  const key = 'vZp4utc6FRpt3uuJfScnqQtrFubLsx3S';
  let url = baseURL + '?api-key=' + key + '&q=forest' 
  fetch(url).then(function(result) {
    return result.json();
  }).then(function(json) {
    callback(json);
  });
}
// API NYT qui retourne 10 articles avec le mot "forest"
setTime();
leafClick();