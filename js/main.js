
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){

  const natPark = document.querySelector('input').value
  const url = `https://developer.nps.gov/api/v1/passportstamplocations?parkCode=${natPark}&api_key=9bf5nYIbcP2CTqtkxG4pKnjp81cGLl94FS5gtu3E`
  
  // List of National Park by State Code
  // const state = document.querySelector('input').value
  // console.log(state)
  // const url = `https://developer.nps.gov/api/v1/parks?stateCode=${state}&api_key=9bf5nYIbcP2CTqtkxG4pKnjp81cGLl94FS5gtu3E`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {

        document.querySelector('#numOfLocations').innerText = data.data.length

         // List of National Park by State Code
        // document.querySelector('#numOfLocations').innerText = data.data.filter( a => a.designation === 'National Park').length

        // data.data.forEach( obj => {
        //   const li = document.createElement('li')
        //   li.textContent = obj.label
        //   document.querySelector('ul.location').appendChild(li)
        // })

        const fragment = document.createDocumentFragment();
        data.data.forEach( obj => {
          const li = document.createElement('li')
          li.textContent = obj.label
          fragment.appendChild(li);
        });
        document.querySelector('ul.location').replaceChildren(fragment);
        
        // List of National Park by State Code
        // data.data.filter( a => a.designation === 'National Park').forEach( obj => {
        //   const li = document.createElement('li')
        //   li.textContent = obj.fullName
        //   console.log(obj.fullName)
        //   document.querySelector('ul.location').appendChild(li)
        // })

      })
      .catch(err => {
          console.log(`error ${err}`)
      });

}


