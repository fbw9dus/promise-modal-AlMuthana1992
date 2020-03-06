// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/


// \/ All of your javascript should go here \/


let promise = new Promise(function(resolve, reject) {
 
    setTimeout(function()  {resolve("done");},6000);
  });

  promise.then(function(){
       var mymodel = document.querySelector('.modal')
       mymodel.style.display='block'

  })