import useCount from "../Hooks/useCount";

const Cards = () => {
    const count = useCount();

    return (
        <div>
            <section>
                <input type='number' placeholder={count} />
                <button type='Button' onClick={this.handleadd()}>
                    sumar
                </button>
                <button type='Button' onClick={this.handlesust()}>
                    Restar
                </button>
            </section>
        </div>
    );
};

export default Cards;
