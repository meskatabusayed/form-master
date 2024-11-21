
import useInputState from "../../hooks/useInputState";


const CustomHookForm = () => {

    // const [name , handleNameChange] = useInputState("Meskat da");
    const emailState = useInputState("m@gmail.com");
    const handleSubmit = e => {
        e.preventDefault();
        console.log(emailState.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange}  type="text" name="name" /> */}
                <br />
                <input {...emailState} type="email" name="email"  />
                <br />
                <input  type="password" name="password"/>
                <br />
                <input type="submit" value="submit"/>
               
                
            </form>
        </div>
    );
};

export default CustomHookForm;