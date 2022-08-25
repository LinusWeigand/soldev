import { ChangeEvent, FormEvent, useState } from "react"
import styles from './AddressForm.module.css'


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
        <div className={styles.Form}>

        </div>
    )
    
}