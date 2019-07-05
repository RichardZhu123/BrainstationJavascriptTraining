/**
 * @typedef {function(HTMLElement)} elementExtensions
 */

const __BS_RBC__ = {
    contacts: [
        {
            "_id": "5d16343cab74ba73ddb8b23e",
            "user": "5d19331d1c648823fe8157ef",
            "name": "Alica Appleside",
            "phones": {
                "mobile": "647-998-1676",
                "work": "416-113-5685"
            },
            "address": "2192 Yonge Street",
            "image": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        },
        {
            "_id": "5d16343cab74ba73ddb8b23e",
            "user": "5d19331d1c648823fe8157ef",
            "name": "Christina Luong",
            "phones": {
                "mobile": "289-151-1312",
                "work": "416-113-5685"
            },
            "address": "2192 Yonge Street",
            "image": "https://images.unsplash.com/photo-1500259783852-0ca9ce8a64dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
        },
        {
            "_id": "5d16343cab74ba73ddb8b23e",
            "user": "5d19331d1c648823fe8157ef",
            "name": "Azan Khan",
            "phones": {
                "mobile": "647-766-1714",
                "work": "416-113-5685"
            },
            "address": "2192 Yonge Street",
            "image": "https://images.unsplash.com/photo-1541418950054-c12804e149d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        },
    ],
    details: {
        "_id": "5d16343cab74ba73ddb8b23e",
        "user": "5d19331d1c648823fe8157ef",
        "name": "Alica Appleside",
        "phones": {
            "mobile": "647-998-1676",
            "work": "416-113-5685"
        },
        "address": "2192 Yonge Street",
        "image": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
    },
    default: {
        "isNew": true,
        "name": "New Contact",
        "phones": {
            "mobile": "",
            "work": ""
        },
        "address": "",
        "image": "data:image/jpeg;base64,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"
    },

};

/**
 * 
 * @param {String} tag Name of the tag you want to create
 * @param {String} className class name
 * @param {String} content text content to place in the element
 * @param {elementExtensions} additions
 * @return {HTMLElement} the element created
 */
function createElement(tag, className, content, additions) {
    const element = document.createElement(tag);
    element.classList.add(className);

    if (content) {
        element.innerText = content;
    }

    if (typeof additions === 'function') {
        return additions(element);
    }

    return element;

}

function renderDetails() {
    if (!__BS_RBC__.details) {
        return;
    }

    fillDetails(__BS_RBC__.details);
}