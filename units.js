// unit convertor <<<<length>>>>>>> Start  ===

let meter = document.getElementById('meter');
let cm = document.getElementById('cm');
let mm = document.getElementById('mm');
let foot = document.getElementById('foot');
let micrometer = document.getElementById('micrometer');
let mile = document.getElementById('mile');
let inch = document.getElementById('inch');
let km = document.getElementById('km');
let nm = document.getElementById('nm');
let angstrom = document.getElementById('angstrom');

// alert('Please input Meter value.');

// m to Centimeter//
meter.addEventListener('input', function(){
    let a = this.value;
    let b = a*100;
    cm.value = b;
}); 
// m to Centimeter//
meter.addEventListener('input', function(){
    let a = this.value;
    let b = a*1000;
    mm.value = b;
}); 

// m to Foot
meter.addEventListener('input', function(){
    let meter = this.value;
    let c = meter* 3.28084;
    foot.value = c;
} );

// m to Micrometer
meter.addEventListener('input', function(){
    let meter = this.value;
    let c = meter* 1000000;
    micrometer.value = c;
} );

// m to mile
meter.addEventListener('input', function(){
    let meter = this.value;
    let d = meter * 0.000621371;
    mile.value = d;
});
// m to inch
meter.addEventListener('input', function(){
    let meter = this.value;
    let e = meter * 39.97;
    inch.value = e;
});

//  m to km
meter.addEventListener('input', function(){
    let meter = this.value;
    let f = meter* 0.001;
    km.value = f;
});

//  m to nanometer
meter.addEventListener('input', function(){
    let meter = this.value;
    let f = meter* 1000000000;
    nm.value = f;
});

//  m to angstrom
meter.addEventListener('input', function(){
    let meter = this.value;
    let f = meter* 10000000000;
    angstrom.value = f;
});

// unit convertor <<<<length>>>>>>> End  ===


// temperature covnvertor Strat 

let celcius = document.getElementById('celcius');
let fahrenheit = document.getElementById('fahrenheit');
let kelvin = document.getElementById('kelvin');

// Fro the known ammount of Celcius///
celcius.addEventListener('input', function(){
   celcius = this.value; 
  let celcius_trm =  parseFloat(celcius)+273;
    kelvin.value = celcius_trm;
}); 

celcius.addEventListener('input', function(){
    celcius = this.value;
    let celcius_fahrenheit = (celcius*1.8)+32;
    fahrenheit.value = celcius_fahrenheit;
});
// End>>.

// For know the ammount of fahrenheit>>;

fahrenheit.addEventListener('input', function(){
    fahrenheit = this.value; 
    let fahrenheit_celcius = (fahrenheit-32) * 0.555556;
    celcius.value = fahrenheit_celcius;
})

fahrenheit.addEventListener('input', function(){
    fahrenheit = this.value; 
    let fahrenheit_kelvin = ((fahrenheit-32) * 0.5555556)+273; 
    kelvin.value = fahrenheit_kelvin;
})

// End >>

// Fro know about the ammount of kelvin>>>

kelvin.addEventListener('input', function(){
    kelvin = this.value; 
    celcius.value = kelvin- 273; 
});

kelvin.addEventListener('input', function(){
    kelvin = this.value; 
    fahrenheit.value = ((kelvin-273)*1.8)+32;

}); 
// End >>>
// Temperature containter End>>>

// Time conertor Start>>>

let year = document.getElementById('year');
let months = document.getElementById('months');
let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

// For years

year.addEventListener('input', function(){
year = this.value; 
months.value = year *12;
});
// End<
year.addEventListener('input', function(){
year = this.value; 
days.value = year *12 * 30;
});
// End<
year.addEventListener('input', function(){
year = this.value; 
hours.value = year * 12 * 30 * 24;
});
// End<
year.addEventListener('input', function(){
year = this.value; 
minutes.value = year * 12 * 30 * 24 * 60;
});
// End<
year.addEventListener('input', function(){
year = this.value; 
seconds.value = year * 12 * 30 * 24 * 60 * 60;
});
// End<








 




