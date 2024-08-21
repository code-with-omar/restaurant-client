import useCart from "../../../Hooks/useCart";

const Cart = () => {
    const [cart] = useCart();
    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0)
    return (
        < div >
            <h2 className="text-6xl text-white">My cart</h2>
            <h2>{cart.length}</h2>
            <h2>{totalPrice}</h2>
        </div >
    );
};

export default Cart;