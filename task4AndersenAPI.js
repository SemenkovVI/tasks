const citiesName = ['Brest', 'Vitebsk', 'Gomel', 'Grodno', 'Minskaya oblast', 'Mogilev', 'Minsk'];
const idOfCities = ['629634', '620127', '627907', '627904', '625142', '625073', '625144'];
const randNumber = makeRandomFn(new Array(citiesName.length))();

class WeatherInCity{
  constructor(city, id){
     this.api_key = '6119d860dd86fe8f788f53b1718bab60';
     this.city = city;
     this.id = id;
  }

  async getWeather(){
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?id=${this.id}&appid=${this.api_key}`);
    const responseData = await response.json();
    return responseData;
  }

  getNameCity() {
    return this.city;
  }

  getId() {
    return this.id;
  }
}

class MinskWeather extends WeatherInCity {
  constructor(city = 'Minsk', id = '625144') {
    super(city, id);
  }
}

class RandomCityWeather extends WeatherInCity {
  constructor(city = citiesName[randNumber], id = idOfCities[randNumber]){
    super(city, id);
  }
}

function makeRandomFn(arr = []) {
  if (arr.length === 0) {
    return;
  }
  return function () {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return randomIndex;
  };
}