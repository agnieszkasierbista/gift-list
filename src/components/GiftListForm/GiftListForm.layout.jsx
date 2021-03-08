import {Field, FieldArray, Form} from "redux-form";
import React from "react";

function renderGifts({fields}) {
    return <>
        <button type="button" onClick={() => fields.push()}>
            Add Gift
        </button>
        {
            fields.map((fieldName, index) => {
                return (
                    <div
                        key={index}
                    >
                        <Field
                            name={fieldName}
                            component="input"
                            type="text"
                        />
                        <button
                            onClick={(event) => {

                                event.preventDefault();

                                return fields.remove(index);
                            }}
                        > X
                        </button>
                    </div>
                )
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
                required
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