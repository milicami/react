import Author from "../models/Author";
import { authorsEndpoint } from "../shared/constants";

class AuthorsServices {

    fetchAuthors(authorsEndpoint) {
        return fetch(authorsEndpoint)
            .then(response => response.json())
            .then(myResponse => {
                const authorsList = this.adaptAuthorsData(myResponse)
                return authorsList;
            })
    }

    fetchSingleAuthor(id) {
        const singleAuthorEndpoint = `${authorsEndpoint}/${id}`
        return fetch(singleAuthorEndpoint)
            .then(response => response.json())
            .then(myResponse => {
                const newAuthor = this.createAuthorInstance(myResponse)
                return newAuthor
            })
    }

    adaptAuthorsData(authorsData) {
        const myAuthorsData = authorsData.map(author => {
            return this.createAuthorInstance(author);
        })
        return myAuthorsData;
    }

    createAuthorInstance(author) {
        const { id, name, username, email, address, phone, company } = author;
        const street = address.street;
        const city = address.city;
        const zipcode = address.zipcode;
        const companyName = company.name;
        const slogan = company.catchPhrase
        const authorId = id;
        return new Author(authorId, name, username, email, street, city, zipcode, phone, companyName, slogan);
    }

    fetchRandomPicture(randomPictureEndpoint) {
        return fetch(randomPictureEndpoint)
        .then(response => response.json())
        .then(response => {
            const pictureSrc = response.results[0].picture.large;
            return pictureSrc;
        })
    }
}

export const authorsServices = new AuthorsServices();