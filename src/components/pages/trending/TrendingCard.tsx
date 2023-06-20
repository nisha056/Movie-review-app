import { Card } from "@mantine/core";

const TrendingCard = (props: any) => {
    return (
        <div className="flex flex-col  items-center h-full overflow-y-auto  ">
            <Card className="w-full  " style={{ padding: 5, width: "200px" }}>
                <img src={props.details?.medium_cover_image}
                    className="w-full object-cover h-full "

                />

            </Card>
            <p className="text-white font-bold ">{props.details?.title}</p>
            <p className="text-gray-600">{props.details?.year}</p>

        </div>

    )
};
export default TrendingCard;