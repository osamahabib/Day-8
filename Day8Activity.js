var xhr = new XMLHttpRequest();

xhr.open("GET", 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json');
xhr.send();

xhr.onload = function() {
    if(xhr.status>=200 && xhr.status<300)
    {
        var data = JSON.parse(xhr.response);
        
        //a. Get all the countries from Asia continent /region using Filter function
        let countryByRegion = data.filter(values=>values.region === 'Asia')//filtering countries that are in Asia region.
        console.log(countryByRegion);

        //b. Get all the countries with a population of less than 2 lakhs using Filter function
        let populationFilter = data.filter(values=>values.population < 200000)//filter based on population
        console.log(populationFilter);

        //c. Print the following details name, capital, flag using forEach function
        data.forEach(object => {
            console.log(object.name, object.capital, object.flag)
        });

        //d. Print the total population of countries using reduce function
        let populationReduce=data.reduce((sum,country)=>
            {
                return sum+country.population;
            }
            ,0);
        console.log(populationReduce);

        //e. Print the country which uses US Dollars as currency
        let currencyFilter = data.filter(countryData=> countryData.currencies[0].code == 'USD');
        console.log(currencyFilter);
    }
}

//Output:

//a.
// Array(50) [ {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, … ]
// ​
// 0: Object { name: "Afghanistan", alpha2Code: "AF", alpha3Code: "AFG", … }
// ​
// 1: Object { name: "Armenia", alpha2Code: "AM", alpha3Code: "ARM", … }
// ​
// 2: Object { name: "Azerbaijan", alpha2Code: "AZ", alpha3Code: "AZE", … }
// ​
// 3: Object { name: "Bahrain", alpha2Code: "BH", alpha3Code: "BHR", … }
// ​
// 4: Object { name: "Bangladesh", alpha2Code: "BD", alpha3Code: "BGD", … }
// ​
// 5: Object { name: "Bhutan", alpha2Code: "BT", alpha3Code: "BTN", … }
// ​
// 6: Object { name: "Brunei Darussalam", alpha2Code: "BN", alpha3Code: "BRN", … }
// ​
// 7: Object { name: "Cambodia", alpha2Code: "KH", alpha3Code: "KHM", … }
// ​
// 8: Object { name: "China", alpha2Code: "CN", alpha3Code: "CHN", … }
// ​
// 9: Object { name: "Georgia", alpha2Code: "GE", alpha3Code: "GEO", … }
//......


//b.
// Array(63) [ {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, … ]
// ​
// 0: Object { name: "Åland Islands", alpha2Code: "AX", alpha3Code: "ALA", … }
// ​
// 1: Object { name: "American Samoa", alpha2Code: "AS", alpha3Code: "ASM", … }
// ​
// 2: Object { name: "Andorra", alpha2Code: "AD", alpha3Code: "AND", … }
// ​
// 3: Object { name: "Anguilla", alpha2Code: "AI", alpha3Code: "AIA", … }
// ​
// 4: Object { name: "Antarctica", alpha2Code: "AQ", alpha3Code: "ATA", … }
// ​
// 5: Object { name: "Antigua and Barbuda", alpha2Code: "AG", alpha3Code: "ATG", … }
// ​
// 6: Object { name: "Aruba", alpha2Code: "AW", alpha3Code: "ABW", … }
// ​
// 7: Object { name: "Bermuda", alpha2Code: "BM", alpha3Code: "BMU", … }
// ​
// 8: Object { name: "Bonaire, Sint Eustatius and Saba", alpha2Code: "BQ", alpha3Code: "BES", … }
// ​
// 9: Object { name: "Bouvet Island", alpha2Code: "BV", alpha3Code: "BVT", … }
// ​
// 10: Object { name: "British Indian Ocean Territory", alpha2Code: "IO", alpha3Code: "IOT", … }
// ​
// 11: Object { name: "United States Minor Outlying Islands", alpha2Code: "UM", alpha3Code: "UMI", … }
// ​
// 12: Object { name: "Virgin Islands (British)", alpha2Code: "VG", alpha3Code: "VGB", … }
// ​
// 13: Object { name: "Virgin Islands (U.S.)", alpha2Code: "VI", alpha3Code: "VIR", … }
//......


//c.
// Afghanistan Kabul https://restcountries.eu/data/afg.svg Day8Activity.js:21:21
// Åland Islands Mariehamn https://restcountries.eu/data/ala.svg Day8Activity.js:21:21
// Albania Tirana https://restcountries.eu/data/alb.svg Day8Activity.js:21:21
// Algeria Algiers https://restcountries.eu/data/dza.svg Day8Activity.js:21:21
// American Samoa Pago Pago https://restcountries.eu/data/asm.svg Day8Activity.js:21:21
// Andorra Andorra la Vella https://restcountries.eu/data/and.svg Day8Activity.js:21:21
// Angola Luanda https://restcountries.eu/data/ago.svg Day8Activity.js:21:21
// Anguilla The Valley https://restcountries.eu/data/aia.svg Day8Activity.js:21:21
// Antarctica <empty string> https://restcountries.eu/data/ata.svg Day8Activity.js:21:21
// Antigua and Barbuda Saint John's https://restcountries.eu/data/atg.svg
//.....


//d.
//7349137231



//e.
// Array(14) [ {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, … ]
// ​
// 0: Object { name: "American Samoa", alpha2Code: "AS", alpha3Code: "ASM", … }
// ​
// 1: Object { name: "Bonaire, Sint Eustatius and Saba", alpha2Code: "BQ", alpha3Code: "BES", … }
// ​
// 2: Object { name: "British Indian Ocean Territory", alpha2Code: "IO", alpha3Code: "IOT", … }
// ​
// 3: Object { name: "United States Minor Outlying Islands", alpha2Code: "UM", alpha3Code: "UMI", … }
// ​
// 4: Object { name: "Virgin Islands (U.S.)", alpha2Code: "VI", alpha3Code: "VIR", … }
// ​
// 5: Object { name: "Ecuador", alpha2Code: "EC", alpha3Code: "ECU", … }
// ​
// 6: Object { name: "El Salvador", alpha2Code: "SV", alpha3Code: "SLV", … }
// ​
// 7: Object { name: "Guam", alpha2Code: "GU", alpha3Code: "GUM", … }
// ​
// 8: Object { name: "Marshall Islands", alpha2Code: "MH", alpha3Code: "MHL", … }
// ​
// 9: Object { name: "Northern Mariana Islands", alpha2Code: "MP", alpha3Code: "MNP", … }
// ​
// 10: Object { name: "Puerto Rico", alpha2Code: "PR", alpha3Code: "PRI", … }
// ​
// 11: Object { name: "Timor-Leste", alpha2Code: "TL", alpha3Code: "TLS", … }
// ​
// 12: Object { name: "Turks and Caicos Islands", alpha2Code: "TC", alpha3Code: "TCA", … }
// ​
// 13: Object { name: "United States of America", alpha2Code: "US", alpha3Code: "USA", … }
// ​
// length: 14