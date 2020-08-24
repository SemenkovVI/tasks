
const CITIES = ['Brest', 'Vitebsk', 'Gomel', 'Grodno', 'Minskaya oblast', 'Mogilev', 'Minsk'];
const ID_CITIES = ['629634', '620127', '627907', '627904', '625142', '625073', '625144'];
const RandNumber = makeRandomFn(new Array(CITIES.length))();

class Weather{
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

  getID() {
    return this.id;
  }
}

class Minsk extends Weather {
  constructor(city = CITIES[6], id = ID_CITIES[6]) {
    super(city, id);
  }
}

class RandomCityWeather extends Weather {
  constructor(city = CITIES[RandNumber], id = ID_CITIES[RandNumber]){
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