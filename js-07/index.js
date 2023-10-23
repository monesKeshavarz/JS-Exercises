"use strict";
const userList = [];
const addUser = (user) => {
    userList.push(user);
};
addUser({ name: "moni", lastName: "keshavarz", age: 25, job: "bikar", maritalStatus: "single", gender: "female",
    height: 173, weight: 75, id: "1", phoneNumber: "string" });
addUser({ name: "ali", lastName: "keshavarz", age: 32, job: "bikar", maritalStatus: "single", gender: "male",
    height: 180, weight: 85, id: "2", phoneNumber: "string" });
console.log(userList);
const update = (id, user) => {
    const userIndex = userList.findIndex((item) => item.id === id);
    userList[userIndex] = Object.assign(Object.assign({}, userList[userIndex]), user);
};
update("2", { job: "sarekar" });
console.log(userList);
const deleteUser = (id) => {
    return userList.filter((item) => item.id !== id);
};
// console.log(deleteUser("2"));
const sortUser = () => {
    userList.sort((a, b) => {
        var _a, _b;
        const nameA = (_a = a.name) !== null && _a !== void 0 ? _a : '';
        const nameB = (_b = b.name) !== null && _b !== void 0 ? _b : '';
        return nameA.localeCompare(nameB);
    });
};
sortUser();
console.log(userList);
