      var checkBox = document.querySelector('input');
      var para = document.querySelector('p');
      var shoppingDone = false;

      checkBox.addEventListener('change',function() {
        checkBox.disabled = true;
        shoppingDone = true;
        updateAllowance();
      });

      function updateAllowance() {
        if(shoppingDone === true) {
          var childsAllowance = 10;
        } else {
          var childsAllowance = 5;
        }

        para.textContent = 'Child has earned $' + childsAllowance + ' this week.';
      }

      updateAllowance();
	  var select = document.querySelector('select');
var para = document.querySelector('h3');

select.addEventListener('change', setWeather);

function setWeather() {
  var choice = select.value;

  if (choice === 'sunny') {
    para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
  } else if (choice === 'rainy') {
    para.textContent = 'Rain is falling outside; take a rain coat and a brolly, and don\'t stay out for too long.';
  } else if (choice === 'snowing') {
    para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
  } else if (choice === 'overcast') {
    para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
  } else {
    para.textContent = '';
  }
}