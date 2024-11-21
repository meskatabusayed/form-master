
import './App.css'
// import CustomHookForm from './components/CustomHookForm/CustomHookForm'
import ResuableForm from './components/ResuableForm/ResuableForm'
// import RefForm from './components/RefForm/RefForm'
// import StateFoem from './components/StateForm/StateFoem'
// import Form from './components/Form/Form'

function App() {

  const handleSignUp = (data) => {
    console.log("Inside handleSignup" , data);

  }

  const handleProfileUpdate = (data) => {
    console.log("Inside profileUpdate" , data);
  }


  return (
    <>
     {/* <Form></Form> */}
     {/* <StateFoem></StateFoem> */}
     {/* <RefForm></RefForm> */}
     {/* <CustomHookForm></CustomHookForm> */}
     <ResuableForm formTitle="SIgnUp" handleSubmitData={handleSignUp}>
      <h1>Signup</h1>
      <p>Please signup now</p>
     </ResuableForm>
     <ResuableForm formTitle="Update Profile" submitButtonText="update" handleSubmitData={handleProfileUpdate}>
      <h1>Profile Update</h1>
      <p>Always update your profile</p>
     </ResuableForm>
     
    </>
  )
}

export default App
