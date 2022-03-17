const somethingWillHappen = ()=>{
  return new Promise((resolve,reject)=>{
    if(true){
      resolve("Yaii!");
    }else {
      reject("F pai");
    }
  });
};

somethingWillHappen().then((response)=> {
  console.log("Rta --> " + response);
}).catch((error)=> console.error("Error -->  " + error));


const somethingWillHappen2 = () => {
  return new Promise((resolve, reject)=>{
    if(true){
      setTimeout(()=>{
        resolve("True con timeout")
      },3000);
    }else{
      const error = new Error("f timeout");
      reject(error);

    }

  });
}

somethingWillHappen2().then(response => console.log(response))
.catch(error => console.error(error));


/**
 * *Para ejecutar más de una promesa
 */

Promise.all([somethingWillHappen(),somethingWillHappen2()])
.then(response => console.log("Rta global --> " , response))
.catch(error => console.error("Errores --> " , error));