const navigation = () => {
  $('#navigation').html(`
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#" id="groups_users">Complex Data Starter</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item" id="groups">
        <a class="nav-link" href="#">Groups</a>
      </li>
      <li class="nav-item" id="users">
        <a class="nav-link" href="#">Users</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" id="search-input">
      <button class="btn btn-outline-success my-2 my-sm-0" id="search">Search</button>
    </form>
  </div>
</nav>
  `);
};

export default navigation;
