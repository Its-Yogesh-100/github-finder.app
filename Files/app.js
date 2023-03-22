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
                
            } else {
                //show profile

                ui.showProfile(data.profile);
            }
        })
    }
    else{

        // clear profile

        ui.clearProfile();

    }
});