let url = "http://universities.hipolabs.com/search?country=United+States";
let response = fetch(url);

response
  .then((v) => {
    return v.json();
  })
  .then((contests) => {
    for (item in contests) {
      //card = document.getElementById("api_list").innerHTML;
      n = contests[item].name;
      console.log(contests[item].name.length);
      //card = "shalini";
      document.getElementById("api_list").innerHTML += n + "</br>";
      //document.getElementById("hacker_msg").innerHTML += message + "</br>";
      console.log(n);
    }
    //console.log(v);
  });
