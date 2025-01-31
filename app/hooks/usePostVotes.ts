export type Payload = {
    'image_id': string;
    'sub_id': string;
    'value': 1
}

const usePostVotes = () => {
    const postVote = async (payload: Payload) => {
        fetch('https://api.thecatapi.com/v1/votes', {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': process.env.API_KEY,
            } as any,
        })
            .then((res) => {
                console.log(res);

                return res.json();
            })
            .then(() => {

            });
    };

    return { postVote };
};

export default usePostVotes;
