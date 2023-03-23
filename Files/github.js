class Github{

    constructor()
    {
        this.client_id='eb71bf2086ca00ac3d8b';
        this.client_secret='3e9d812480a7f4f3bd6eac4729e90bc844d2c2c9';

        this.repos_count=5;
        this.repos_sort='created: asc';

    }



    async getUser(user)
    {
        const profileResponse=await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);


        const repoResponse=await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile=await profileResponse.json();

        const repos=await repoResponse.json();

        return{

            profile,
            repos
        }
    }

}