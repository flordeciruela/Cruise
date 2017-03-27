window.addEventListener('load', function () {

  var agents = [{
        class: "idle",
        web: "bjstdmngbgr02.thoughtworks.com",
        link: "/var/lib/cruise-agent",
        resource: ["Ubuntu", "Firefox3", "Core-Duo"],
        ip: "192.168.1.2"},
        {
        class: "building",
        web: "bjstdmngbgr03.thoughtworks.com",
        link: "/var/lib/cruise-agent",
        resource: ["Ubuntu", "Firefox3", "MySQL", "Core-Duo"],
        ip: "192.168.1.3"},
        {
        class: "building",
        web: "bjstdmngbgr04.thoughtworks.com",
        link: "/var/lib/cruise-agent",
        resource: ["Ubuntu", "Firefox3", "MySQL", "Core-Duo"],
        ip: "192.168.1.4"},
        {
        class: "idle",
        web: "bjstdmngbgr05.thoughtworks.com",
        link: "/var/lib/cruise-agent",
        resource: ["Ubuntu"],
        ip: "192.168.1.5"
    }];

    //Funciones para mostrar pestañas AGENTS:
	var showAll = document.getElementById('all');
  showAll.addEventListener("click",function(){
    var divs = document.getElementsByTagName('div')[0];


        if(divs.id == "all_content") {
          divs.style.display="none";
          }


  })

  var showPhysical = document.getElementById('physical');
  showPhysical.addEventListener("click",function(){
    var divs = document.getElementsByTagName('div');

    for(var i in divs){
        if(divs[i].classList == "physical"){
          divs[i].style.display="block";
        } else if(divs[i].classList == "all" && divs[i].classList == "virtual"){
          divs[i].style.display="none"
          }
    }
  })

  var showVirtual = document.getElementById('virtual');
  showVirtual.addEventListener("click",function(){
    var divs = document.getElementsByTagName('div');

    for(var i in divs){
        if(divs[i].classList == "virtual"){
          divs[i].style.display="block";
          } else {
          divs[i].style.display="none"
          }
    }
  })















  });
