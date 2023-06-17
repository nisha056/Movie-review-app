import { Card } from "@mantine/core";

const MovieCard = (props: any) => {

    return (
        <>
            <div className="flex flex-col gap-1 items-center ">
                <Card className="w-full  " style={{ padding: 5 }}>
                    <img src={props.image}
                        className="w-full object-cover h-full "

                    />

                </Card>
                <p className="text-white font-bold ">{props.details.description}</p>
                <p className="text-gray-600">{props.details.date}</p>

            </div>


        </>

    );
}
export default MovieCard;