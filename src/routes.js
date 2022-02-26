import { Redirect } from 'react-router-dom';

// auth components
import SignIn from './modules/auth/components/SignIn/SignIn';
import SignUp from './modules/auth/components/Signup/SignUp';
import ForgotPassword from './modules/auth/components/ForgotPassword/ForgotPassword';

// admin components
import UsersList from './modules/users/components/UsersList/UsersList';
import OrgsList from './modules/orgs/components/OrgsList/OrgsList';
import OrgsForm from './modules/orgs/components/OrgsForm/OrgsForm';
import HealthcareOrgsList from './modules/healthcareOrgs/components/HealthcareOrgsList/HealthcareOrgsList';

// user routes
import NewUpdatesList from './modules/newUpdates/components/NewUpdatesList/NewUpdatesList';
import CasesList from './modules/cases/components/CasesList/CasesList';
import PatientsList from './modules/patients/components/PatientsList/PatientsList';

import ContactUs from './modules/contactUs/ContactUs';

export const authRoutes = [
  {
    path: '/signIn',
    component: SignIn,
  },
  {
    path: '/signUp',
    component: SignUp,
  },
  {
    path: '/forgotPassword',
    component: ForgotPassword,
  },
];

export const adminRoutes = [
  {
    path: '/',
    component: () => <Redirect to='/users' />,
  },
  {
    path: '/users',
    component: UsersList,
  },
  {
    path: '/orgs',
    component: OrgsList,
  },
  {
    path: '/orgs/add',
    component: OrgsForm,
  },
  {
    path: '/healthcareOrgs',
    component: HealthcareOrgsList,
  },
  {
    path: '/contactUs',
    component: ContactUs,
  },
];

export const userRoutes = [
  {
    path: '/',
    component: () => <Redirect to='/newUpdates' />,
  },
  {
    path: '/newUpdates',
    component: NewUpdatesList,
  },
  {
    path: '/cases',
    component: CasesList,
  },
  {
    path: '/patients',
    component: PatientsList,
  },
];
