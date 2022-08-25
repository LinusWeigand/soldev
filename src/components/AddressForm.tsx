import { ChangeEvent, FormEvent, useState } from "react"
const styles = require('../styles/AddressForm.css');


const AddressForm = (props: { handler: (address: string) => void }) => {

    const [values, setValues] = useState({
        address: '',
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.handler(values.address)
    }

    const handleAddressInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.persist();
        setValues((values) => ({
            ...values,
            address: event.target.value
        }));
    };

    return (
        <div className="Form">
            <form onSubmit={handleSubmit}>
                <input
                    id="public-key"
                    className="formField"
                    type="text"
                    placeholder="Public Address"
                    name="address"
                    value={values.address}
                    onChange={handleAddressInputChange}
                />
                    <br />
                    <button type="submit" className="formButton">
                        Check SOL Balance
                    </button>
            </form>

        </div>
    );
}

export default AddressForm;