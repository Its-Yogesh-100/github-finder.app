// Intentiate  Github class
const github=new Github;

// Init UI class

const ui=new UI;

// search INput

const searchUser=document.getElementById('searchUser');


//Search input event Listerner

searchUser.addEventListener('keyup',(e)=>{

    // Get input text

    const userText=e.target.value;

    if(userText!== '')
    {
        //make http call

        github.getUser(userText)
        .then(data=>{
            console.log(data);

            if (data.profile.message==='Not Found') {

                // show alert

                ui.showAlert('User not Found','alert alert-danger');
                
            } else {
                //show profile

                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        })
    }
    else{

        // clear profile

        ui.clearProfile();

    }
});