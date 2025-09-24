document.querySelector("#download").addEventListener("click", function () {
    var path = "./Resume.pdf";
    window.open(path, "_blank");
})

document.querySelectorAll(".coursework")[0].addEventListener("click", function () {
    alert("Relevant Coursework: Foundations of Programming Languages, Parallel Computing, Data Mining, Advanced Operating Systems, Mobile Application Development, Algorithms, Software Engineering, for AI.")
})

document.querySelectorAll(".coursework")[1].addEventListener("click", function () {
    alert("Relevant Coursework: Object-oriented programming, Database Management System, RTOS, Computer Organization & Architecture, Cyber Security and Laws, Internet of Things. ")
})

document.querySelectorAll(".coursework")[2].addEventListener("click", function () {
    alert("Relevant Coursework: Programming in C++, Data Structures and Algorithms, System Programming, Fundamentals of Operating Systems, Database Management System, Advanced Network, Administration, Data Warehousing, Software Design.")
})

document.querySelector(".darkMode").addEventListener("click", darkMode)

function darkMode() {
//light mode    
    if (document.firstElementChild.getAttribute("data-bs-theme")==="dark") {
        document.firstElementChild.removeAttribute("data-bs-theme");
        document.querySelector(".darkMode").innerHTML="<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-brightness-high mb-1' viewBox='0 0 16 16'> <path d='M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708'/> </svg>"
        document.querySelector("#navbar2").classList.remove("bg-dark");
        document.querySelector("#navbar2").classList.add("bg-light");  
        document.querySelector("#download").classList.add("btn-outline-dark");
        document.querySelector("#download").classList.remove("btn-outline-light"); 
        document.querySelector("#work").classList.remove("btn-light"); 
        document.querySelector("#work").classList.add("btn-dark"); 
//dark mode       
    }else{
        document.firstElementChild.setAttribute("data-bs-theme","dark");
        document.querySelector(".darkMode").innerHTML="<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-brightness-high-fill mb-1' viewBox='0 0 16 16'> <path d='M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708' /> </svg>"
        document.querySelector("#navbar2").classList.remove("bg-light");
        document.querySelector("#navbar2").classList.add("bg-dark");
        document.querySelector("#download").classList.remove("btn-outline-dark"); 
        document.querySelector("#download").classList.add("btn-outline-light");
        document.querySelector("#work").classList.remove("btn-dark"); 
        document.querySelector("#work").classList.add("btn-light"); 
         
    }
    
}