type userType = {
    name?:string;
    lastName?:string;
    age?:number;
    job?:string
    maritalStatus?: "single" | "married";
    gender?: "male" | "female";
    height?:number;
    weight?:number;
    id?:string;
    phoneNumber?: string
    }
    const userList: Array<userType> =[]
    const addUser = (user:userType) =>{
        userList.push(user);
    }
    addUser({name:"moni", lastName:"keshavarz",  age:25, job:"bikar", maritalStatus: "single",gender: "female",
    height:173 ,weight:75,  id:"1", phoneNumber: "string"},
    );
    addUser({name:"ali", lastName:"keshavarz",  age:32, job:"bikar", maritalStatus: "single",gender: "male",
    height:180 ,weight:85,  id:"2", phoneNumber: "string"},
    );
    console.log( userList);
    const update = (id: userType["id"], user:userType) => {
        const userIndex = userList.findIndex((item)=>item.id===id);
        userList[userIndex] = {...userList[userIndex],...user}
    }
    update ("2", {job:"sarekar"});
    console.log(userList);
    
    const deleteUser = (id: userType["id"]) =>{
        return userList.filter((item)=> item.id !== id );
    }
    // console.log(deleteUser("2"));
    const sortUser = () =>{
        userList.sort((a, b) => 
        {const nameA = a.name ?? '';
        const nameB = b.name ?? '';
        return nameA.localeCompare(nameB);} );
    }
    sortUser();
    console.log(userList);