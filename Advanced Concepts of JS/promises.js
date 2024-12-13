//solving callback hell


function step1(){
    return new Promise ((resolve) => {
        setTimeout(() =>{
            console.log('Step1');
            resolve();
        }, 1000);
    });
}

function step2(){
    return new Promise ((resolve) => {
        setTimeout(() =>{
            console.log('Step2');
            resolve();
        }, 1000);
    });
}

function step3(){
    return new Promise ((resolve) => {
        setTimeout(() =>{
            console.log('Step3');
            resolve();
        }, 1000);
    });
}

step1()
  .then(() => step2())
  .then(() => step3())
  .then(() => {
    console.log('All steps completed');
  });
