const app = angular.module('appModule');
app.controller('homeController', homePageController);

function homePageController(Employees) {
  const homePageVm = this;
  homePageVm.employees = [];
  homePageVm.totalPages = null;
  homePageVm.currentPage = 1;
  homePageVm.loading = false;
  homePageVm.searchText = '';

  homePageVm.updateSearch = (value) => {
    homePageVm.searchText = value;
  };

  homePageVm.loadMoreEmplyees = () => {
    homePageVm.loading = true;
    Employees.loadMoreEmployees()
      .then((res) => {
        homePageVm.employees = homePageVm.employees.concat(res.data.employees);
        homePageVm.loading = false;
        homePageVm.currentPage = res.data.current_page;
      });
  };

  activate();

  function activate() {
    Employees.getEmployees()
      .then((res) => {
        homePageVm.employees = homePageVm.employees.concat(res.data.employees);
      });
  }
}
