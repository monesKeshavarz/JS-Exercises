const title = document.querySelector <HTMLInputElement> ("#title");
const desc = document.querySelector <HTMLInputElement> ("#desc");
const submitBtn = document.querySelector<HTMLButtonElement>("#submitBtn");
const showDrawerBtn= document.querySelector<HTMLButtonElement>("#showListTask");
const closeDrawerBtn= document.querySelector<HTMLButtonElement>("#closeDrawer");

const drawer = document.querySelector("#drawer");

const listItemTask = document.querySelector("#item");

type taskType ={
    title:string;
    desc:string;
}
const listTask : Array<taskType> = [];
submitBtn?.addEventListener("click",()=>{
const newTask ={
  title:title?.value??"",
    desc:desc?.value??""
}
listTask.push(newTask);
const taskItem = document.createElement("li");
taskItem.className="border-b-slate-600";
const titleItem = document.createElement("h2");
titleItem.className="bg-zinc-800";
titleItem.innerText=newTask.title;
const descItem = document.createElement("p");
descItem.innerText=newTask.desc;
descItem.className="bg-zinc-500";
taskItem.append(titleItem,descItem);
listItemTask?.append(taskItem)

})
showDrawerBtn?.addEventListener("click",()=>{

  drawer?.classList.remove("right-0");
  drawer?.classList.add("right-96");
})
closeDrawerBtn?.addEventListener("click",()=>{
  drawer?.classList.add("right-0");
  drawer?.classList.remove("right-96");
})