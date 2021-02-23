import {Field, FieldArray, Form} from "redux-form";
import React from "react";

function renderGifts({fields}) {
    return <>
        <button type="button" onClick={() => fields.push()}>
            Add Gift
        </button>
        {
            fields.map((fieldName, index) => {
                return <Field
                    name={fieldName}
                    component="input"
                    type="text"
                    key={index}
                />
            })
        }
    </>
}


export function GiftListForm({handleSubmit, onSubmitHandler}) {

    return (
        <Form onSubmit={handleSubmit(onSubmitHandler)}>
            <div>Recipient:</div>
            <Field
                name="giftRecipient"
                component="input"
                type="text"
            />
            <div>Gift:</div>
            <FieldArray
                name="gifts"
                component={renderGifts}
            />

            <button
                type="submit"
            >
                Save
            </button>
        </Form>
    )

}