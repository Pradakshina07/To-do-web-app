var input = document.getElementById("taskInput");
var btn = document.getElementById("addBtn");
var list = document.getElementById("list");
var stats = document.getElementById("stats");

var tasks = [];

btn.onclick = function(){
    if(input.value == "") return;

    var task = {
        text: input.value,
        priority: priority.value,
        done:false
    };

    tasks.push(task);
    input.value="";
    showTasks();
};

function showTasks(){
    list.innerHTML="";
    var doneCount=0;

    for(var i=0;i<tasks.length;i++){
        var li=document.createElement("li");
        li.className = tasks[i].priority;

        if(tasks[i].done){
            li.classList.add("done");
            doneCount++;
        }

        li.innerHTML = tasks[i].text;

        li.onclick = function(index){
            return function(){
                tasks[index].done = !tasks[index].done;
                showTasks();
            }
        }(i);

        var del=document.createElement("button");
        del.innerText="X";
        del.onclick = function(index){
            return function(){
                tasks.splice(index,1);
                showTasks();
            }
        }(i);

        li.appendChild(del);
        list.appendChild(li);
    }

    stats.innerText = "Total: "+tasks.length+" | Done: "+doneCount;
}