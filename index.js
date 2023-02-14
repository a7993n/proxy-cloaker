//check if ip is morocco show traffic from morocco
//fetch api to get ip country
fetch('https://ipapi.co/json/')
    .then(response => response.json())
    .then(data => {
        if (data.country == 'MA') {
          document.write(`You are from ${data.country} Your ip is ${data.ip}`);
        } else {
            document.write(`You are from ${data.country} Your ip is ${data.ip}`);
        }
});

 //else redirect to index.html
