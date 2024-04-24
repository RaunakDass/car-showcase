

export async function fetchCars(){
    const headers = {
        'X-RapidAPI-Key': '6385c50d4emsha0af529b8ee8f54p169eefjsn876eb5dd561e',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars', {
        headers: headers,
     });

     const result = await response.json()
}