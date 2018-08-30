function loadData() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
       
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            var i = 0;
            data.data.temperature.forEach(element => {
                var node = document.createElement("li");
                node.innerText = data.time.startPeriodName[i] + "'s" +" " + data.time.tempLabel[i] + " " + "is " + element;
                document.getElementById("weather").appendChild(node)
                i++;
            });
            
        }
    };
    xhttp.open("GET", "https://forecast.weather.gov/MapClick.php?lat42.9634=&lon=-85.6681&FcstType=json", true);
    xhttp.send();