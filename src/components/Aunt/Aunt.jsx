import Cousin from "../Cousin/Cousin";


const Aunt = () => {
    return (
        <div>
            <h2>Aunt</h2>
            <section className="flex">
                <Cousin name="shathi"></Cousin>
                <Cousin name="shakib"></Cousin>

            </section>
        </div>
    );
};

export default Aunt;