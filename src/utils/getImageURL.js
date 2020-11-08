// get weather image url by its id
export const getImageURL = ( id ) => {

    return `${ process.env.REACT_APP_IMAGES_URL }${ id }.svg`;

}