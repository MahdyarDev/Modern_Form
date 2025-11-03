

let productPrice = 9_000_000; 
let postCost = 450_000;

let totalPrice = productPrice + postCost;



const id = 1;
const title = "گوشی موبایل اپل مدل iPhone 16 CH/A ظرفیت 128 گیگابایت رم 8 گیگابایت رجیستر شده";
const price = 105_000_000;
const qty = 12;

const product = {
  id,
  title,
  price,
  qty,
};

const generageUser = (username, email, password) => {
  const newUser = {
    username,
    email,
    password,
  };

  return newUser;
};

const ali = generageUser("ali_mmdi", "ali@gmail.com", "ali1212345");

console.log(ali);

