//your JS code here. If required.
let button = document.getElementById("btn");
let output = document.getElementById("output");

button.addEventListener("click", () => {
  let number = document.getElementById("ip").value;
  let firstPromise = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        output.innerText = `Result: ${number}`;
        resolve(number);
      }, 2000);
    });
  };

  firstPromise()
    .then((number) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          let result = number * 2;
          output.innerText = `Result: ${result}`;
          resolve(result);
        }, 3000);
      });
    })
    .then((result) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          let res = result - 3;
          output.innerText = `Result: ${res}`;
          resolve(res);
        }, 4000);
      });
    })
    .then((res) => {
        return new Promise((resolve)=>{
            setTimeout(()=>{
                let result = res / 2;
                output.innerText = `Result: ${result}`;
                resolve(result);
            },5000)
        })
    })
    .then((result) =>{
        setTimeout(()=>{
            let res= result + 10;
            output.innerText = `Final Result: ${res}`;
        },6000)
    })
});
