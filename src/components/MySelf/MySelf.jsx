import Special from "../Special/Special";


const MySelf = ({gift}) => {
    return (
        <div>
           <h2>My Self</h2>
           <section className="flex">
            <Special name="Nishita" gift={gift}></Special>
           </section>
        </div>
    );
};

export default MySelf;