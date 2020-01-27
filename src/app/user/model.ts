 export  interface User{
    firstName: string,
   lastName: string,
   age?: number,
   address? : {
       street: string,
       city?: string,
       state? : number,
       
   },
   registered?: any,
   image? : string,
   hide? : boolean,

}