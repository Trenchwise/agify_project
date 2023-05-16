// this works well
// however trying to pull two bits of additional data from the api.

const updateInterface = (age, nationality, gender) => {
  // updates dom

  const ageSentence = `You are ${age} years old`;
  document.getElementById("age").innerHTML = ageSentence;

  const nationalitySentence = `You hail from ${nationality[0].country_id}`;
  document.getElementById("nationality").innerHTML = nationalitySentence;

  const genderSentence = `You are a ${
    gender === "male" ? "you are a unicorn" : "you are a mermaid"
  }`;
  document.getElementById("gender").innerHTML = genderSentence;
};

//get data from api
const getData = async () => {
  const name = document.getElementById("name_input").value;
  const resultAge = await axios.get(`https://api.agify.io?name=${name}`);
  const resultNationality = await axios.get(
    `https://api.nationalize.io?name=${name}`
  );
  const resultGender = await axios.get(`https://api.genderize.io?name=${name}`);

  updateInterface(
    resultAge.data.age,
    resultNationality.data.country,
    resultGender.data.gender
  );
};
button.addEventListener("click", getData);

// possible problem -
// I am trying to pull different bits of data from the same input - is this possible?

// const resultNationality = async () => {
//   const nationality = document.getElementById("name_input").value;

// };
// button.addEventListener("click", () => resultNationality());

// const resultGender = async () => {
//     const gender = document.getElementById("name_input").value

// }
// button.addEventListener("click", () => resultNationality());
