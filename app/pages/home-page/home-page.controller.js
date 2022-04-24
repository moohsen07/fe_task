const app = angular.module('appModule');
app.controller('homeController', homePageController);

function homePageController(Employees) {
  const homePageVm = this;
  homePageVm.employees = [];
  homePageVm.searchText = '';

  homePageVm.updateSearch = (value) => {
    homePageVm.searchText = value;
  };

  activate();

  function activate() {
    Employees.getEmployees()
      .then((res) => {
        homePageVm.employees = homePageVm.employees.concat(res.data.employees);
      });
  }
}
