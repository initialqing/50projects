const APIURL = 'https://api.github.com/users/';

//main
const main = document.getElementById('main');
//form
const form = document.getElementById('form')
// input
const search = document.getElementById('search')

async function getUser(username) {
    try {
        const { data } = await axios(APIURL + username)
        getRepos(username)
        createUserCard(data)
    } catch (error) {
        if (error.response.status === 404) {
            createErrorCard('No profile with this username')
        }
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const user = search.value
    if (user) {
        getUser(user)
        search.value = ''
    }
})

async function getRepos(username) {
    try {
        const { data } = await axios(APIURL + username + '/repos?sort=created')
        addReposToCard(data)
    } catch (e) {
        createErrorCard('Problem with fetching repos')
    }
}

function createUserCard(user) {
    const userId = user.name || user.login;
    const userBio = user.bio ? `<p>${user.bio}</p>` : '';
    const cardHtml =
        `
    <div class="card">
    <div>
        <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
    </div>
    <div class="user-info">
        <h2>${userId}</h2>
        ${userBio}
        <ul>
            <li>
                ${user.followers}
                <strong>Followers</strong>
            </li>
            <li>
                ${user.following}
                <strong>Following</strong>
                
            </li>
            <li>
                ${user.public_repos}
                <strong>Repos</strong>
            </li>
        </ul>
        <div id="repos"></div>
    </div>
</div>
`
    main.innerHTML = cardHtml
}

function createErrorCard(msg) {
    const cardHtml = `
        <div class="card">
            <h1>${msg}</h1>
        </div>
    `
    main.innerHTML = cardHtml;
}

function addReposToCard(repos) {
    const reposEl = document.getElementById('repos');

    repos
        .slice(0,5)
        .forEach(repo => {
            const repoEl = document.createElement('a');
            repoEl.classList.add('repo');
            repoEl.href = repo.html_url;
            repoEl.target = '_blank'
            repoEl.innerHTML = repo.name
            reposEl.appendChild(repoEl)
        })
}