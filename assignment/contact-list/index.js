
// pre-made function 
function createNewButton() {
    const createNew = createElement('article', 'create-new', '+ Create New Contact');
    createNew.addEventListener('click', () => {
        fillDetails(__BS_RBC__.default);
    });
    return createNew;
}

function createContact(contact) {
    const contactContainer = createElement('article', 'contact');
    const contactImage = createElement('img', 'contact__image', null, (img) => {
        img.setAttribute('src', contact.image);
        return img;
    });
    const contactContent = createElement('div', 'contact__content');
    const contactName = createElement('strong', 'contact__name', contact.name);
    const contactNumber = createElement('p', 'contact__number', contact.phones.mobile);

    contactContent.appendChild(contactName);
    contactContent.appendChild(contactNumber);

    contactContainer.appendChild(contactImage);
    contactContainer.appendChild(contactContent);

    contactContainer.addEventListener('click', event => {
        __BS_RBC__.details = contact;
        renderDetails();
    })

    return contactContainer;
}

const contactList = document.querySelector('.contact-list')

const fetchContacts = () => {
    // fetch the contacts from the API and load them into our local state
    // contacts need to be assigned to -> __BS_RBC__.contacts
    console.log(__BS_RBC__.contacts);
}

// you may need to move this function in order to get your desired effects!
__BS_RBC__.contacts.forEach(contact => {
    contactList.appendChild(createContact(contact));
});

contactList.appendChild(createNewButton());
