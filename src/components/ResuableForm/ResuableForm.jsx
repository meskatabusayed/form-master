

const ResuableForm = ({formTitle , submitButtonText = "Submit" , handleSubmitData  , children}) => {
    const handleLocalSubmit = e => {
        e.preventDefault();
        const data = {
            name : e.target.name.value,
            email : e.target.email.value,
            password : e.target.password.value,

        }
        handleSubmitData(data);
        
    }
    return (
        <div>
            <h1>{children}</h1>
            <form onSubmit={handleLocalSubmit}>
                <input type="text" name="name" />
                <br />
                <input type="email" name="email"  />
                <br />
                <input type="password" name="password"/>
                <br />
                <input type="submit" value={submitButtonText}/>
            </form>
        </div>
    );
};

export default ResuableForm;