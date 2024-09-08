import useManageItem from "../../../Hooks/useManageItem";

const FindReservation = () => {
    const [ reservation, refetch ] = useManageItem()
    console.log(reservation.length)
    return (
        <div>
            <h2>{reservation.length}</h2>
        </div>
    );
};

export default FindReservation;