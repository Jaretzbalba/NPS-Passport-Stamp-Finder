
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){

  const movie = document.querySelector('input').value
  const url = `https://imdb-api.com/en/API/SearchMovie/k_3k414l0w/${movie}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.results)

        const item = new Moviesearchresults(data)
        item.showInfo()

        // const fragment = document.createDocumentFragment();
        // data.results.forEach( obj => {
        //   const li = document.createElement('li')
        //   const img = document.createElement('img')
        //   li.textContent = obj.title
        //   img.src = obj.image
        //   fragment.appendChild(li);
        //   fragment.appendChild(img)
        // });
        // document.querySelector('ul.location').replaceChildren(fragment);

      })
      .catch(err => {
          console.log(`error ${err}`)
      });

}

class Moviesearchresults {
  constructor(movieData) { // I am passing in data
    this.results = movieData.results
  }

  // showTitle() {
  //   document.getElementById('product-img').src = this.image
  //   document.getElementById('product-name').innerText = this.name
  // }

  showInfo() {
    let tableRef = document.getElementById('movie-table')

    //No i++ because you are deleting the row so i is always the next row
    for( let i = 1; i < tableRef.rows.length;) { 
      tableRef.deleteRow(i);
    }

    // if(!(this.title == null)){
      for(let key in this.results) {
        let newRow = tableRef.insertRow(-1)
        let newImageCell = newRow.insertCell(0)
        let newTitleCell = newRow.insertCell(1)
        let newImg = document.createElement('img')
        newImg.src = this.results[key].image
        let newTText = document.createTextNode(this.results[key].title)
        // let vegStatus = this.ingredients[key].vegetarian == null ? 'unknown' : this.ingredients[key].vegetarian
        // let newVText = document.createTextNode(vegStatus)
        newImageCell.appendChild(newImg)
        newTitleCell.appendChild(newTText) 
      } 
    // }
  }

}


