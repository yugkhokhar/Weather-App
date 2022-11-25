const name="yug khokhar";
const age=18
// OBJECT SHORTING
const user={
    name,
    age,
    location:"surat"
}
console.log(user);




// OBJECT DESTRUCTRING
const product={
firstname:"yug",
middlename:"rajubhai",
lastname:"khokhar",
rating:10
}

// destructuring obj representation
const{firstname,lastname}=product;
console.log(firstname);
console.log(lastname);

/*
const{firstname:MYNAME,lastname,rating=85}=product;
console.log(MYNAME);
console.log(lastname);
console.log(rating);

*/

// ARGUMENT IN OBJECT
const transction=(type,{rating,firstname,lastname:surname})=>{
console.log(type,rating,firstname,surname);
}

transction("details",product);












