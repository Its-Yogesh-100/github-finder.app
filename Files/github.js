class Github{

    constructor()
    {
        this.client_id='eb71bf2086ca00ac3d8b';
        this.client_secret='aab5eb9f3fbcf57d41ac9c402777b689490576f7';

    }



    async getUser(user)
    {
        const profileResponse=await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);


        const profile=await profileResponse.json();

        return{

            profile
        }
    }

}