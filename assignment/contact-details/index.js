
function fillDetails(contact) {

    const image = document.querySelector('.details__image');
    const title = document.querySelector('.details__title');
    const number = document.querySelector('.details__number');

    const name = document.getElementById('name');
    const address = document.getElementById('address');
    const mobile = document.getElementById('mobile');
    const home = document.getElementById('home');
    const isNew = document.getElementById('isNew');

    image.setAttribute('src', contact.image);
    title.innerText = contact.name;
    number.innerText = contact.phones.mobile;

    name.setAttribute('value', contact.name)
    address.setAttribute('value', contact.address)
    mobile.setAttribute('value', contact.phones.mobile)
    home.setAttribute('value', contact.phones.home)

    isNew.setAttribute('value', !!contact.isNew);
}

const form = document.querySelector('.details-form');
form.addEventListener('submit', (event) => {
    // Fetch logic goes here!
    // get data from the form by using the `event` object!
    console.log(
        event.target.name.value,
        event.target.address.value,
        event.target.mobile.value,
        event.target.work.value,
        event.target.isNew.value,
    )

    // you will need to POST and PUT here depending on whether or not we are in a new state or not!
    // additionally you will need to handle what happens after the Request
})

renderDetails();