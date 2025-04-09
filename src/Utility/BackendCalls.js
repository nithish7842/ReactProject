import axios from "axios";


export const updateData = async (Token, values) => {
    const updatingData = {
        name: values.name,
        email: values.email
    };
    console.log('updating Data')
    axios.defaults.headers.Authorization = `Bearer ${Token}`;
    const response = await axios.put('http://10.128.22.52:5004/updateData', updatingData);
    if (response) {
        console.log('Data Updated');
        return response.data;
    }
};

export const getData = async (Token) => {
    const response = await axios.post('http://10.128.22.52:5004/userdata', { token: Token });
    return response.data;
}

export const addProduct = async (Data) => {
    console.log("Api call To Get The Products");
    const formData = new FormData();
    const objKeys = Object.keys(Data);
    objKeys.forEach((key) => {
        formData.append(key, Data[key]);
    });
    console.log(formData);
    const response = await axios({
        url: 'http://10.128.22.52:5004/addProduct',
        method: 'post',
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        data: formData,
    });
    if (response) {

        return response;
    }
}

export const getProductData = async (Token) => {
    console.log("Fetching product data...");
    try {
        const response = await axios.post("http://10.128.22.52:5004/productdata", { token: Token });
        console.log(response);
        return response;
    } catch (error) {
        console.error("Error fetching products", error);
    }
};