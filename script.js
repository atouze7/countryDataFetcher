const input = document.querySelector(".input");
const div1 = document.querySelector(".div1");
const div2 = document.querySelector(".div2");

class Country {
  constructor() {
    //this.div1 = document.querySelector(".div1");
  }

  createNewElement(country) {
    fetch(`https://restcountries.com/v3.1/name/${country}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        let newDiv = document.createElement("div");
        newDiv.classList.add("newDiv1");
        div2.appendChild(newDiv);
        // newDiv.style.left = "250px";
        newDiv.innerHTML += `<img src="${data[0].flags.png}" class="pic"/>
        <h3 align="center" class="name">${data[0].name.common}</h3>
        <h3 class="name"> Capital: ${data[0].capital} </h3>
        <h3 class="name"> Region: ${data[0].region} </h3>
        <h3 class="name"> Population: ${data[0].population} </h3>`;
      });
  }

  /*
  createNewEl() {
    const getCountry = async function (country) {
      try {
        const res = await fetch(
          `https://restcountries.com/v3.1/name/${country}`
        );

        const data = res.json();
        console.log(data);

        let newDiv = document.createElement("div");
        newDiv.classList.add("newDiv1");
        div1.appendChild(newDiv);
        newDiv.innerHTML += `${data[0].capital}`;
      } catch (err) {
        console.log(err);
      }
    };
    getCountry(input.value);
  }*/
}

let country = new Country();

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    country.createNewElement(input.value);
  }
});

/*const input = document.querySelector(".input");
//const div1 = document.querySelector(".div1");

const country = async function (country) {
  try {
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    const data = res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};*/
