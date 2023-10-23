const  userList = [] ;
const addUser = (name,age,fieldOfStudy,id)=>{
    if(name && age && fieldOfStudy){
        const newUser = {
            name,
           age,
           fieldOfStudy,
           id,
        }
        userList.push(newUser);
     }else {
       throw Error("The fields are empty")
     }}
addUser ("moni",26,"computer","1");
addUser ("ali",26,"electronic","2");
addUser ("amir",26,"bargh","3");
addUser ("hasan",26,"mekanik","4");
console.log(userList);

 const deletUser = id => userList.filter(item => item.id !== id);
 console.log(deletUser('4'));

 const updateUser = (id,user)=>{
    userList.forEach((item , index)=>{
        if(item.id === id){
            userList[index] = {...item,...user };
        }
    })
 }
 updateUser("3", {name:"hasti",age: 16,fieldOfStudy:"riyazi"});
 console.log(userList);