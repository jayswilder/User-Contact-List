import React from 'react';
import ContactsComponent from './ContactsComponent';

const ListContacts = (props) => {
    return (
        props.contactsList.map((user) => {
            return <ContactsComponent key={user.id} user={user} />
        })
    )
}

export default ListContacts;