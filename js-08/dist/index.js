"use strict";
const title = document.querySelector("#title");
const desc = document.querySelector("#desc");
const submitBtn = document.querySelector("#submitBtn");
const showDrawerBtn = document.querySelector("#showListTask");
const closeDrawerBtn = document.querySelector("#closeDrawer");
const drawer = document.querySelector("#drawer");
const listItemTask = document.querySelector("#item");
const listTask = [];
submitBtn === null || submitBtn === void 0 ? void 0 : submitBtn.addEventListener("click", () => {
    var _a, _b;
    const newTask = {
        title: (_a = title === null || title === void 0 ? void 0 : title.value) !== null && _a !== void 0 ? _a : "",
        desc: (_b = desc === null || desc === void 0 ? void 0 : desc.value) !== null && _b !== void 0 ? _b : ""
    };
    listTask.push(newTask);
    const taskItem = document.createElement("li");
    taskItem.className = "border-b-slate-600";
    const titleItem = document.createElement("h2");
    titleItem.className = "bg-zinc-800";
    titleItem.innerText = newTask.title;
    const descItem = document.createElement("p");
    descItem.innerText = newTask.desc;
    descItem.className = "bg-zinc-500";
    taskItem.append(titleItem, descItem);
    listItemTask === null || listItemTask === void 0 ? void 0 : listItemTask.append(taskItem);
});
showDrawerBtn === null || showDrawerBtn === void 0 ? void 0 : showDrawerBtn.addEventListener("click", () => {
    drawer === null || drawer === void 0 ? void 0 : drawer.classList.remove("right-0");
    drawer === null || drawer === void 0 ? void 0 : drawer.classList.add("right-96");
});
closeDrawerBtn === null || closeDrawerBtn === void 0 ? void 0 : closeDrawerBtn.addEventListener("click", () => {
    drawer === null || drawer === void 0 ? void 0 : drawer.classList.add("right-0");
    drawer === null || drawer === void 0 ? void 0 : drawer.classList.remove("right-96");
});
//# sourceMappingURL=index.js.map