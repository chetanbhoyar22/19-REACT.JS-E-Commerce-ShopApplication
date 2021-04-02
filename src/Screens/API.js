const registerAPI = "https://chetanshopappbackend.herokuapp.com/api/registeruser"; //Register User
const categoryInsert = "https://chetanshopappbackend.herokuapp.com/api/category/create"; //Insert Category
const productInsert = "https://chetanshopappbackend.herokuapp.com/api/product/create"; //Insert Product

// fetch : GET ( POSTMAN / NODE.js)

//Register User
export const Function_registerAPI = user => 
{
    return fetch(registerAPI, 
        {
      method: "POST",
      headers: 
      {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)  // JSON.stringfy : convert to JSON 
    })
      .then(response => {
        return response.json();  //JSON:Stringifly(user) : is used to convert array into json
      })
      .catch(err => console.log(err));
};

//Insert Category
export const Function_InsertCategory =category => 
{
    return fetch(categoryInsert, 
        {
      method: "POST",
      headers: 
      {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(category)  // JSON.stringfy : convert to JSON 
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
};


//Insert Product
export const Function_InsertProduct = product => 
{
    return fetch(productInsert, 
        {
      method: "POST",
      headers: 
      {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)  // JSON.stringfy : convert to JSON 
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
};

//Login Validation
export const Function_LoginAPI = user => {
  return fetch(`https://chetanshopappbackend.herokuapp.com/api/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user) // JSON.stringfy : convert to JSON 
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

//Show Category In React
export const getAllcategories = () => 
{
  return fetch(`https://chetanshopappbackend.herokuapp.com/api/category/getallcategories`,
   {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

//Show Products In React
export const getAllproducts = () => {
  return fetch(`https://chetanshopappbackend.herokuapp.com/api/product/getallproducts`,
   {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

//Show Users In React
export const getAllusers = () => {
  return fetch(`https://chetanshopappbackend.herokuapp.com/api/user/getallusers`,
   {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

//Show Orders In React
export const getAllorders = () => {
  return fetch(`https://chetanshopappbackend.herokuapp.com/api/order/getallorders`,
   {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};






