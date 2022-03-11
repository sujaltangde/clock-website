
     const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
     setInterval(() => {
      let a = new Date() ;
      let date = a.toLocaleDateString(undefined,options) ;
      // let time = a.getHours() +':'+ a.getMinutes() +':'+ a.getSeconds()
      let time = a.toLocaleTimeString();
      let b = document.getElementById('time').innerHTML = time + '<br> on ' + date ;
     }, 1000);