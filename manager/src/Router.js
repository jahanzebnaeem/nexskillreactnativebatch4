import React from 'react';
import {Router, Stack, Scene, Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene key="login" component={LoginForm} title="Login" />
        <Scene
          onRight={() => goToEmployeeCreate()}
          rightTitle="Add"
          key="employeeList"
          component={EmployeeList}
          title="Employees"
        />
        <Scene
          key="employeeCreate"
          component={EmployeeCreate}
          title="Create Employee"
          back={true}
          backTitle=" "
        />
      </Stack>
    </Router>
  );
};

const goToEmployeeCreate = () => {
  Actions.employeeCreate();
};

export default RouterComponent;
