

const Form = () => {

    const handleSubmit = e => {
        e.preventDefault()
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);
    }

    return (
        <div>
            <h1>Login Form</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" />
                <br />
                <input type="email" name="email"  />
                <br />
                <input type="phone" name="phone"/>
                <br />
                <input type="submit" value="submit"/>
            </form>
        </div>
    );
};

export default Form;