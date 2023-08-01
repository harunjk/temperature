const API_KEY=`f53e4799293b29676783e4fb0e8df2b0`;

const city ='dhaka';

const temperature=city=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(res => res.json())
    .then(data => loadTemp(data))
}

const loadTemp=data=>{
    console.log(data.weather[0].main)
    const temp = document.getElementById('Temperature');
    temp.innerText=data.main.temp;

    const wather=document.getElementById('wather');
    wather.innerText=data.weather[0].main

}

document.getElementById('search-btn').addEventListener('click', function(){
    const inputSearch=document.getElementById('Search-input');
    const inputSearchValue=inputSearch.value;

    const cityName=document.getElementById('city');
    cityName.innerText=inputSearchValue
    temperature(inputSearchValue)
})

temperature('dhaka')

