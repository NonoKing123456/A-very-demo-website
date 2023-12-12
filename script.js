  let homepage;
  let defaultName = 'DefaultProject';
  let defaultDescription = 'This is not created yet. Don\'t click!';
  let myProjects = 
    [{name: 'HashMapVsTreeMap',  projDescription: 'This project allows you to test your customize data!', pageElementId: 'hvt'},
    {name: defaultName,  projDescription: defaultDescription},
    {name: defaultName,  projDescription: defaultDescription},
    {name: defaultName,  projDescription: defaultDescription}
  ];
  let hobbies = ['coding', 'math', 'yinyou', 'this', 'that', 'Physics', 'Copilot']
  window.onload = function() {
    homepage = document.getElementById('home');
    currentPage = homepage;
    generateProjects(myProjects);
  };

  function generateProjects(myProjects){
    myProjects.forEach((project)=>{
      const button = document.createElement("button");
      const projName = document.createElement("h1");
      projName.innerHTML = project.name;
      const projDescription = document.createElement('span');
      projDescription.innerHTML = project.projDescription;
      button.appendChild(projName);
      button.appendChild(projDescription);
      button.setAttribute('class', 'project-button')
      if (project.hasOwnProperty('pageElementId')) {
        button.onclick = function() {
          changeContent(project.pageElementId);
        }
      } else {
        button.onclick = function() {
          alert('This project is not created yet. Don\'t click!')
        }
      }
      homepage.appendChild(button)

    })
  }
  
  function changeContent(pageElementId){
    currentPage.style.display = 'none';
    let newPage = document.getElementById(pageElementId);
    if (pageElementId === 'home'){
      newPage.style.display = 'grid';
    } else{
      newPage.style.display = 'block';
    }
    currentPage = newPage;
  }

  function handleSubmission(){
    event.preventDefault();
    var inputs = document.querySelectorAll('input[type="number"]');
    var isEmpty = false;

    inputs.forEach(function(input) {
      if (input.value === '') {
        isEmpty = true;
      }
    });

    if (isEmpty) {
      alert('Input cannot be empty');
      return;
    }
    document.getElementById('test-result1').style.display = 'none';
    document.getElementById('test-result2').style.display = 'block';
  }

  function changeFirstHobby(){
    
    let randomHobby = hobbies[Math.floor(Math.random() * hobbies.length)];
    console.log(randomHobby);
    document.getElementById('hobby').innerHTML = randomHobby;
  }

  function changeSecondHobby(){
    alert("This is something you never change! You are destroying young software developers' confidence!!!")
  }