import axios from 'axios';

export default async function data() {
    const response = await axios.get(
        'https://opentdb.com/api.php?amount=10&category=26'
    );
    return response;
}


