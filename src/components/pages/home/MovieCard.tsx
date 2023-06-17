import { Card } from "@mantine/core";

const MovieCard = (props: any) => {

    return (
        <>
            <Card className="w-full  " style={{ padding: 5 }}>
                <img src={props.image}
                    className="w-full object-cover h-full "

                />

            </Card>
        </>

    );
}
export default MovieCard;