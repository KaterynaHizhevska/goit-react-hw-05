import s from "./SearchBar.module.css"
import { Field, Form, Formik } from "formik"

const SearchBar = ({ onSubmit }) => {
    const handleSubmit = (values, options) => {
        const searchQuery = values.query.trim().toLowerCase();
        if (searchQuery === "") {
            alert("Please enter a search query to begin!");
            return;
        }
        onSubmit(searchQuery)
        options.resetForm();
    }

    const initialValues = {
        query: "",
    }

    return (
        <div>
            <Formik onSubmit={handleSubmit} initialValues={initialValues}>
                <Form className={s.form}>
                    <Field name="query" placeholder="Film Search" className={s.field}/>
                    <button type="submit">Search</button>
                </Form>
            </Formik>
        </div>
    )
}

export default SearchBar