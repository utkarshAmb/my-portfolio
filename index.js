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

document.querySelector(".darkMode").addEventListener("click", function () {
    if (document.firstElementChild.getAttribute("data-bs-theme")==="dark") {
        document.firstElementChild.removeAttribute("data-bs-theme");
    }else{
        document.firstElementChild.setAttribute("data-bs-theme","dark");
    }
    
})