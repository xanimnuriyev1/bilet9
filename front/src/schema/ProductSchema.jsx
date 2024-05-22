import * as yup from 'yup';

export const ProductSchema=yup.object().shape({
    image:yup.string().required("Fill"),
    title:yup.string().required("Fill"),
    catagory:yup.string().required("Fill"),
})